import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Shield, Globe, Cpu } from "lucide-react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    const group = new THREE.Group();
    scene.add(group);

    const wireGeometry = new THREE.IcosahedronGeometry(2.2, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d2b8,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    group.add(wireMesh);

    const orbGeometry = new THREE.TorusGeometry(1.6, 0.5, 24, 120);
    const orbMaterial = new THREE.MeshBasicMaterial({
      color: 0x22e6d6,
      transparent: true,
      opacity: 0.08
    });
    const orbMesh = new THREE.Mesh(orbGeometry, orbMaterial);
    group.add(orbMesh);

    const pointsGeometry = new THREE.BufferGeometry();
    const pointsCount = 90;
    const positions = new Float32Array(pointsCount * 3);
    for (let i = 0; i < pointsCount; i += 1) {
      const radius = 3 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x22f0d8,
      size: 0.04,
      transparent: true,
      opacity: 0.26
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    group.add(points);

    const resize = () => {
      const section = containerRef.current as HTMLElement | null;
      const width = section?.clientWidth ?? window.innerWidth;
      const height = section?.clientHeight ?? window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener("resize", resize);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const clock = new THREE.Clock();
    let frameId = 0;

    const renderFrame = () => {
      const t = clock.getElapsedTime();
      group.rotation.y = t * 0.14;
      group.rotation.x = t * 0.08;
      orbMesh.rotation.z = t * 0.1;
      points.rotation.y = -t * 0.06;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(renderFrame);
    };

    if (prefersReduced) {
      renderer.render(scene, camera);
    } else {
      renderFrame();
    }

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      window.removeEventListener("resize", resize);
      wireGeometry.dispose();
      wireMaterial.dispose();
      orbGeometry.dispose();
      orbMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen min-h-[100dvh] flex items-center pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="glow-mesh" />
        <div className="absolute inset-0 noise-overlay" />
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-25" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1px, transparent 0)", backgroundSize: "44px 44px" }} />
        <div className="absolute inset-x-0 -top-24 h-64 bg-linear-to-b from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-bold tracking-[0.3em] uppercase mb-10 backdrop-blur-xl"
          >
            <Shield className="w-3.5 h-3.5" />
            Executive Website Delivery • 24H
          </motion.div>
          
          <motion.h1 
            style={{ y: y1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-8xl 2xl:text-9xl font-black leading-[0.95] 2xl:leading-[0.9] tracking-tighter text-white mb-6 sm:mb-8"
          >
            EXECUTIVE WEBSITES. <br />
            <span className="text-gradient-elite italic inline-block pr-6 sm:pr-4">LIVE IN 24H.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-base sm:text-lg md:text-2xl text-slate-400 mb-10 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Private studio delivering elite, conversion-ready sites in one focused day. Strategy, design, build, and launch—ready for scale.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-20"
          >
            <Button size="lg" className="h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg bg-primary hover:bg-cyan-400 text-slate-950 font-black shadow-[0_0_60px_rgba(0,210,184,0.45)] transition-all hover:scale-[1.06] group">
              INITIATE LAUNCH <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-bold transition-all">
              REQUEST PRIVATE BRIEF
            </Button>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-slate-500 font-bold mb-12 sm:mb-16">
            {["NDA STANDARD", "SENIOR-LED TEAM", "15-MIN RESPONSE"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary/80" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Luxury Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {[
              { label: "Uptime", value: "99.99%", icon: Globe },
              { label: "Response", value: "< 18ms", icon: Zap },
              { label: "Core Score", value: "100/100", icon: Cpu },
              { label: "Delivery", value: "24 Hours", icon: RocketIcon }
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (i * 0.1) }}
                className="rounded-[calc(var(--radius)+8px)] border border-white/15 bg-slate-950 p-4 sm:p-6 text-center group shadow-[0_24px_80px_rgba(0,0,0,0.6)] transition-colors"
              >
                <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary mx-auto mb-2 sm:mb-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="text-lg sm:text-2xl font-black text-white mb-1">{metric.value}</div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-bold">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 sm:mt-14 flex flex-col items-center gap-5 sm:gap-6">
            <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.4em] text-slate-500 font-bold text-center">Built with the tools we use daily</div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] text-slate-500">
              {["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js", "Express", "PostgreSQL", "Drizzle ORM"].map((tool) => (
                <span key={tool} className="px-3 sm:px-4 py-2 rounded-full border border-white/15 bg-slate-950">
                  {tool}
                </span>
              ))}
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium text-center">Selected work and case notes available on request. NDA available.</div>
          </div>
        </div>
      </div>
      
      {/* Decorative side elements */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden xl:block">
        <div className="h-64 w-px bg-linear-to-b from-transparent via-primary/50 to-transparent" />
      </div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden xl:block">
        <div className="h-64 w-px bg-linear-to-b from-transparent via-primary/50 to-transparent" />
      </div>
    </section>
  );
}

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.56.45-2.13.45-2.13s-1.57-.26-2.13.45Z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
      <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
    </svg>
  );
}
