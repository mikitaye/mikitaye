import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowDownRight, Github, Linkedin, Sparkles, Send } from "lucide-react";
import portrait from "@/assets/portrait.png";

const roles = [ "Front-end Developer", "SaaS Builder", "Website Developer", "Creative Coder"];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-30 pb-20">
      {/* background layers */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]" />

      <div className="container relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left */}
        <div className="relative z-10">
          {/*<motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for new projects · 2026
          </motion.div>*/}

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="block"
            >
              Crafting <span className="text-gradient">digital</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="block"
            >
              experiences that
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="block"
            >
              actually <span className="italic text-primary">ship.</span>
            </motion.span>
          </h1>

          <div className="mt-6 flex items-center gap-3 text-lg text-muted-foreground">
            <span className="font-mono text-primary">{">"}</span>
            <span>I'm Mikiyas, a</span>
            <span className="relative h-7 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[i]}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -28, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block font-semibold text-foreground"
                >
                  {roles[i]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-lg text-muted-foreground"
          >
            I build performant interfaces, responsive and
            interactive systems for ambitious businesses, influencers and individuals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View my work
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium hover:bg-surface-elevated"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              Start a project
            </a>
            <div className="flex items-center gap-2">
              <a href="https://t.me/Ikimt5" target="_blank" aria-label="Telegram" className="grid h-11 w-11 place-items-center rounded-full glass hover:text-primary">
                <Send className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/mikiyas-taye-23941040b" target="_blank" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full glass hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {[
              { v: "30+", l: "Projects" },
              { v: "2y", l: "Experience" },
              { v: "15+", l: "Clients" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-primary">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md sm:-mt-30 lg-mt-1"
        >
          {/* glowing radial backdrop */}
          <div className="absolute inset-0 rounded-full bg-primary blur-3xl opacity-30" />
          {/* animated gradient ring */}
          <div className="absolute inset-0 rounded-full p-[2px] animate-gradient-spin"
            style={{ background: "conic-gradient(from 0deg, transparent 0%, var(--primary) 30%, transparent 60%, var(--primary) 90%, transparent 100%)" }}
          />
          <div className="absolute inset-[6px] rounded-full pd-20 bg-background" />
          <motion.div
            whileHover={{ rotateY: 6, rotateX: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="absolute inset-3 overflow-hidden rounded-full ring-1 ring-primary/30 [transform-style:preserve-3d]"
          >
            <img src={portrait} alt="Mikiyas portrait" className="h-full w-full object-cover" />
          </motion.div>

          {/* floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-4 top-12 rounded-2xl glass-strong p-3 shadow-xl"
          >
            <div className="flex items-center gap-2 text-xs">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">⚡</div>
              <div>
                <div className="font-semibold">Shipping fast</div>
                <div className="text-muted-foreground">avg 2 weeks</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -right-2 bottom-16 rounded-2xl glass-strong p-3 shadow-xl"
          >
            <div className="text-xs">
              <div className="font-mono text-primary">$ npm run dream</div>
              <div className="text-muted-foreground">build successful ✓</div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute -bottom-2 left-8 rounded-full glass-strong px-4 py-2 text-xs"
          >
            ⭐ 5.0 · 15+ clients
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
