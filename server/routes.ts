import type { Express } from "express";
import { createServer, type Server } from "http";
import { Resend } from "resend";

type IntakePayload = {
  fullName?: string;
  email?: string;
  company?: string;
  phone?: string;
  website?: string;
  packageTier?: string;
  launchWindow?: string;
  preferredStartPreset?: string;
  goal?: string;
  notes?: string;
};

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/private-intake", async (req, res) => {
    const payload = (req.body ?? {}) as IntakePayload;
    const fullName = payload.fullName?.trim();
    const email = payload.email?.trim();

    if (!fullName || !email || !email.includes("@")) {
      return res.status(400).json({ message: "Missing or invalid required fields." });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ message: "Email service is not configured." });
    }

    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM ?? "Website 24h <hello@web24h.ae>";
    const adminEmail = process.env.RESEND_ADMIN_EMAIL ?? "hello@web24h.ae";

    const escapeHtml = (value: string) =>
      value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");

    const fields = [
      ["Name", fullName],
      ["Email", email],
      ["Company", payload.company],
      ["Phone", payload.phone],
      ["Website", payload.website],
      ["Package", payload.packageTier],
      ["Launch window", payload.launchWindow],
      ["Preferred start", payload.preferredStartPreset],
      ["Goal", payload.goal],
      ["Notes", payload.notes],
    ]
      .map(([label, value]) => [label, String(value ?? "").trim()] as const)
      .filter(([, value]) => value.length > 0)
      .map(([label, value]) => [label, escapeHtml(value)] as const);

    const rows = fields
      .map(
        ([label, value]) =>
          `<tr><td style="padding:10px 12px;border-bottom:1px solid #E5E7EB;font-weight:600;color:#0F172A;">${label}</td><td style="padding:10px 12px;border-bottom:1px solid #E5E7EB;color:#1F2937;">${value}</td></tr>`,
      )
      .join("");

    const safeFullName = escapeHtml(fullName);
    const subjectName = fullName.replace(/[\r\n]+/g, " ").trim();
    const adminHtml = `
      <div style="font-family: 'Inter', Arial, sans-serif; background:#0B0F1A; padding:32px;">
        <div style="max-width:640px;margin:0 auto;background:#FFFFFF;border-radius:20px;overflow:hidden;border:1px solid #E2E8F0;">
          <div style="padding:28px 32px;background:linear-gradient(135deg,#0F172A,#111827);color:#FFFFFF;">
            <div style="font-size:12px;letter-spacing:0.3em;text-transform:uppercase;color:#94A3B8;font-weight:700;">Private Intake</div>
            <h1 style="margin:10px 0 0;font-size:26px;line-height:1.2;">New intake submitted</h1>
            <p style="margin:8px 0 0;color:#CBD5F5;font-size:14px;">Captured from web24h.ae intake form.</p>
          </div>
          <div style="padding:20px 24px;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">${rows}</table>
          </div>
          <div style="padding:20px 24px;background:#F8FAFC;font-size:13px;color:#475569;">
            Reply directly to this email to reach the requester.
          </div>
        </div>
      </div>
    `;

    const userHtml = `
      <div style="font-family: 'Inter', Arial, sans-serif; background:#0B0F1A; padding:32px;">
        <div style="max-width:640px;margin:0 auto;background:#FFFFFF;border-radius:20px;overflow:hidden;border:1px solid #E2E8F0;">
          <div style="padding:28px 32px;background:linear-gradient(135deg,#0EA5E9,#10B981);color:#0B1120;">
            <div style="font-size:12px;letter-spacing:0.3em;text-transform:uppercase;color:#0B1120;font-weight:800;">Website 24h</div>
            <h1 style="margin:10px 0 0;font-size:26px;line-height:1.2;">Your intake is confirmed</h1>
            <p style="margin:8px 0 0;color:#0B1120;font-size:14px;">We will reply shortly with availability and next steps.</p>
          </div>
          <div style="padding:24px 28px;color:#0F172A;">
              <p style="font-size:15px;line-height:1.6;margin:0 0 14px;">
              Hi ${safeFullName}, thank you for sharing your project details. We treat every intake as a private engagement and respond fast.
            </p>
            <div style="background:#F8FAFC;border-radius:16px;padding:16px 18px;border:1px solid #E2E8F0;">
              <div style="font-size:12px;letter-spacing:0.25em;text-transform:uppercase;color:#64748B;font-weight:700;margin-bottom:10px;">Next step</div>
              <div style="font-size:14px;color:#1F2937;">Expect a response within 15 minutes with the delivery window and scope confirmation.</div>
            </div>
          </div>
          <div style="padding:20px 28px;background:#0F172A;color:#E2E8F0;font-size:12px;">
            If you have urgent additions, reply to this email.
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from,
      to: adminEmail,
      subject: `New private intake · ${subjectName || "New lead"}`,
      replyTo: email,
      html: adminHtml,
    });

    await resend.emails.send({
      from,
      to: email,
      subject: "We received your private intake",
      html: userHtml,
    });

    return res.status(200).json({ success: true });
  });

  return httpServer;
}
