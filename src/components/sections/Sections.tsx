import { motion } from "motion/react";
import { SectionHeader } from "@/components/SectionHeader";
import emailjs from "@emailjs/browser";
import {
  Code2, Smartphone, Palette, Server, Workflow, Layers, Github, ExternalLink,
  Briefcase, Award, Star, Check, MessageSquare, Mail, MapPin, Phone, Send,
  Quote, Zap, Globe, Database, Cpu, Box, Coffee, Heart, Terminal, Twitter, Linkedin, Instagram, Facebook, Youtube, ImageOff
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ---------------- Brand Mark (logo) ---------------- */
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Mikiyas Taye logo"
      className={className}
    >
      <rect width="64" height="64" rx="14" fill="var(--primary, #F4C542)" />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="38"
        fill="var(--primary-foreground, #0B0B0C)"
      >
        M
      </text>
    </svg>
  );
}

/* ---------------- About ---------------- */
export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              eyebrow="About Me"
              title={<>Designer's eye. <span className="text-gradient">Engineer's brain.</span></>}
              description="I'm a 16-year-old web developer with a passion for creativity, innovation, and building exceptional digital experiences. From modern business websites to creative projects, I focus on delivering work that is both visually engaging and technically solid. My vision is to become a successful Tech entrepreneur and create products that inspire and solve real-world problems."
            />
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Coffee, label: "Learning & Building", value: "3+ Years" },
                { icon: Terminal, label: "Websites & Personal Projects", value: "30+ Projects" },
                { icon: Heart, label: "For Technology", value: "100% Passion" },
                { icon: Briefcase, label: "Future Tech Entrepreneur", value: "Building My Vision" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-2xl p-4"
                >
                  <s.icon className="mb-3 h-5 w-5 text-primary" />
                  <div className="font-display text-xl font-bold">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-strong rounded-3xl p-2 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/60" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <span className="h-3 w-3 rounded-full bg-green-500/60" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">~/mikiyas/about.ts</span>
              </div>
              <div className="rounded-2xl bg-background/70 p-6 font-mono text-sm leading-relaxed">
                <div><span className="text-primary">const</span> <span className="text-secondary">mikiyas</span> = {"{"}</div>
                <div className="pl-4">role: <span className="text-primary">"Front-end Developer"</span>,</div>
                <div className="pl-4">stack: [<span className="text-primary">"React"</span>, <span className="text-primary">"Bootstrap"</span>, <span className="text-primary">"TS"</span>],</div>
                <div className="pl-4">focus: <span className="text-primary">"Premium products"</span>,</div>
                <div className="pl-4">currentlyReading: <span className="text-primary">"Refactoring UI"</span>,</div>
                <div className="pl-4">availability: <span className="text-secondary">true</span>,</div>
                <div>{"};"}</div>
                <div className="mt-3 text-muted-foreground">{"//"} ready when you are.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Skills ---------------- */
const skillGroups = [
  { name: "Frontend", items: [["React / Next.js", 95], ["TypeScript", 92], ["TailwindCSS", 96], ["Bootstrap", 98]] },
  /*{ name: "Backend", items: [["Node / Express", 90], ["PostgreSQL", 85], ["MongoDB", 82], ["GraphQL / REST", 88]] },
  { name: "Mobile", items: [["React Native", 80], ["Expo", 78], ["Swift basics", 60], ["PWA", 90]] },*/
  { name: "UI/UX & Tools", items: [["Figma", 92], ["Design Systems", 88], ["Git / CI", 90], ["Vercel / AWS", 80]] },
] as const;

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Skills"
          title={<>A toolkit for building <span className="text-gradient">end-to-end</span></>}
          description="From pixel-perfect interfaces to scalable APIs and deployment pipelines."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((g, gi) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="glass rounded-3xl p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-xl font-bold">{g.name}</h3>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">0{gi + 1}</span>
              </div>
              <div className="space-y-5">
                {g.items.map(([label, val]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{label}</span>
                      <span className="font-mono text-primary">{val}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-surface-elevated">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
const services = [
  { icon: Code2, title: "Web Development", desc: "Performant, accessible, beautifully animated web apps from scratch." },
  { icon: Layers, title: "ERP System", desc: "Comprehensive enterprise resource planning solutions." },
  { icon: Palette, title: "UI/UX Design", desc: "Design systems, product flows, and pixel-perfect interfaces." },
  { icon: Smartphone, title: "Branding", desc: "Visual identity, type systems, and brand-driven product design." },
  { icon: Server, title: "SaaS Development", desc: "Scalable software-as-a-service solutions built for the modern web." },
  { icon: Workflow, title: "Automation", desc: "Internal tooling, CI pipelines, and workflows that save hours." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Services"
          title={<>What I can <span className="text-gradient">build</span> for you</>}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:border-primary/40"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary transition-transform group-hover:rotate-6 group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-xl font-bold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
type Project = {
  title: string;
  tag: string;
  desc: string;
  image: string;
  link: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Getahun Assefa",
    tag: "Portfolio Website",
    desc: "Personal portfolio for 20-30 TV Show host Getahun Assefa. Showcasing his work and achievements.",
    image: "/images/getahun-assefa.png",
    link: "https://getahunassefa.com",
    github: "https://github.com/mikiyastaye/getahun-portfolio",
  },
  {
    title: "Makiba Medication Center",
    tag: "Medical & Booking Website",
    desc: "Complete medical center website with online appointment booking and service information.",
    image: "/images/makiba.png",
    link: "https://makibamedication.com/",
  },
  {
    title: "MD Medical Clinic",
    tag: "Medical & Booking Website",
    desc: "Modern clinic website featuring appointment scheduling, doctor profiles, and patient resources.",
    image: "/images/mdmedical.png",
    link: "https://mdmedicalservice.com/",
  },
  {
    title: "Ethealturf",
    tag: "Business Website",
    desc: "Professional business website with services showcase, company profile, and contact integration.",
    image: "/images/estamos.png",
    link: "https://ethealturf.com/",
  },
  {
    title: "Hema Wooden Accessories",
    tag: "Business Website",
    desc: "Handcrafted wooden accessories website with product gallery and brand story.",
    image: "/images/hema.png",
    link: "https://www.hemawoods.com/",
  },
  {
    title: "Bright E-commerce",
    tag: "E-commerce Website",
    desc: "Full-featured online store with product catalog, cart functionality, and checkout process.",
    image: "/images/bright.png",
    link: "https://e-com-web-phi.vercel.app/",
    github: "https://github.com/mikiyastaye/bright-ecommerce",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Selected work"
          title={<>Projects <span className="text-gradient">i have worked on</span></>}
        />

        {/* Projects Grid */}
        <div className="grid gap-5 md:grid-cols-6 md:auto-rows-[430px]">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* BUTTON - Fixed position: centered, below all projects */}
        <div className="flex justify-center mt-16">
          <a
            href="#contact"
            className="rounded-full py-4 px-20 text-center text-sm font-semibold transition bg-primary text-primary-foreground hover:scale-[1.02] hover:bg-primary/90"
          >
            Contact me for more
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index: i }: { project: Project; index: number }) {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.07 }}
      className="group relative overflow-hidden rounded-3xl glass p-0 md:col-span-2"
    >
      {/* Hover effects — pointer-events-none so they don't block clicks on icons */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-primary/30 blur-3xl opacity-30 transition-all duration-700 group-hover:opacity-60 group-hover:scale-125" />

      {/* Image at the TOP — proper aspect ratio with onError fallback */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-elevated">
        {imgError ? (
          <div className="grid h-full w-full place-items-center text-muted-foreground">
            <div className="flex flex-col items-center gap-2 text-xs">
              <ImageOff className="h-6 w-6" />
              <span>Preview unavailable</span>
            </div>
          </div>
        ) : (
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Content below image */}
      <div className="p-5">
        <div className="flex items-center justify-between text-xs">
          <span className="rounded-full bg-primary/15 px-3 py-1 text-primary">
            {p.tag}
          </span>
          <span className="font-mono text-muted-foreground">0{i + 1}</span>
        </div>

        <h3 className="mt-3 font-display font-bold text-xl">
          {p.title}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {p.desc}
        </p>

        <div className="mt-4 flex gap-2">
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${p.title} live site`}
            title="Visit live site"
            className="grid h-8 w-8 place-items-center rounded-full glass hover:bg-primary hover:text-white transition-all"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a
            href={p.github ?? p.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${p.title} on GitHub`}
            title={p.github ? "View source on GitHub" : "View project page"}
            className="grid h-8 w-8 place-items-center rounded-full glass hover:bg-primary hover:text-white transition-all"
          >
            <Github className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ---------------- Experience ---------------- */
const experience = [
  { year: "2026 — Now", role: "Freelance Developer", company: "Self-employed", desc: "Developing modern, responsive, elegant websites; SaaS applications and UI/UX designs." },
  { year: "2024 - 2025", role: "CEO & Front-end Developer", company: "IKIM Tech Co.", desc: "Created a company focused on delivering high-quality web and mobile solutions." },
  { year: "2023", role: "Started learning And Building", desc: "Began my journey into web development, learning front-end development and building small projects." },
  { year: "2021", role: "Interested in the Tech field", desc: "My interest in the tech field began with a fascination for web development and design." },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="container mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Journey"
          title={<>The <span className="text-gradient">timeline</span> so far</>}
        />
        <div className="relative">
          <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-primary via-border to-transparent md:left-1/2" />
          {experience.map((e, i) => (
            <motion.div
              key={e.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative mb-10 grid gap-4 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className={`pl-10 md:pl-0 ${i % 2 ? "md:pl-10" : "md:pr-10 md:text-right"}`}>
                <div className="font-mono text-xs uppercase tracking-widest text-primary">{e.year}</div>
                <h3 className="mt-1 font-display text-xl font-bold">{e.role}</h3>
                <div className="text-muted-foreground">{e.company}</div>
              </div>
              <div className={`pl-10 md:pl-0 ${i % 2 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                <p className="glass rounded-2xl p-5 text-sm text-muted-foreground">{e.desc}</p>
              </div>
              <span className="absolute left-1.5 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-primary shadow-[0_0_0_4px_var(--background)] md:left-1/2 md:-translate-x-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const testimonials = [
  { quote: "Very punctual individual, i can’t stress this enough. I wanted a website for this new business. I basically just gave him info on how i wanted it and without missing a beat he brought my thoughts to life. 10/10 recommended.", name: "Avidan", role: "CEO, Estamos Catering Service" },
  { quote: "Rare combination of taste, speed and engineering rigor. Easily my favorite collaborator.", name: "Henok", role: "Owner, Hema Woods" },
  { quote: "From Figma to production with zero translation loss. Our users immediately felt the difference.", name: "Yoseph", role: "Founder, Hema Woods" },
  { quote: "Genuinely the most reliable freelancer I've worked with. Always one step ahead.", name: "Bruk", role: "CEO, Ethealturf" },
];

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>What people <span className="text-gradient">say</span></>}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-3xl p-6"
            >
              <Quote className="mb-4 h-6 w-6 text-primary" />
              <p className="text-sm leading-relaxed">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 font-display font-bold text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- 
const plans = [
  { name: "Starter", price: "$2.5k", tag: "Landing & micro-sites", features: ["1-page premium site", "Custom design", "Animations & polish", "1 week delivery"] },
  { name: "Professional", price: "$7k", tag: "Full product builds", recommended: true, features: ["Up to 8 pages / screens", "Design system included", "Backend + database", "3–4 weeks delivery", "30-day support"] },
  { name: "Premium", price: "Custom", tag: "Long-term partnership", features: ["Dedicated retainer", "Full product team of one", "Design + dev + DevOps", "Weekly shipping cadence", "Priority Slack support"] },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Pricing"
          title={<>Simple, <span className="text-gradient">transparent</span> packages</>}
          description="Fixed scope, fixed price. No surprises, just shipping."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 transition-all ${
                p.recommended
                  ? "border border-primary/40 bg-gradient-to-b from-primary/10 to-transparent glow-primary"
                  : "glass"
              }`}
            >
              {p.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  Most popular
                </span>
              )}
              <div className="text-sm uppercase tracking-widest text-muted-foreground">{p.tag}</div>
              <h3 className="mt-1 font-display text-2xl font-bold">{p.name}</h3>
              <div className="mt-4 font-display text-5xl font-bold">{p.price}</div>
              <ul className="my-8 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                  p.recommended
                    ? "bg-primary text-primary-foreground hover:scale-[1.02]"
                    : "glass hover:bg-surface-elevated"
                }`}
              >
                Get started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}*/

/* ---------------- Tech Stack Marquee ---------------- */
const partners = [
  { name: "MeMa Digital Marketing Agency", logo: "/images/mema.jpg" },
  { name: "Gojo Guest House", logo: "/images/gojo.jpg" },
  { name: "Makiba Medication Center", logo: "/images/makiba-logo.jpg" },
  { name: "Ethealturf", logo: "/images/etheal-logo.jpg" },
  { name: "Hema Woods", logo: "/images/hema-logo.jpeg" },
  { name: "Wakene Food Complex", logo: "/images/Wakene Logo.jpg" },
  { name: "Lentebur Foreign Employment Agency", logo: "/images/lentebur.jpg" },
  { name: "Maedot ZeGola Consultancy", logo: "/images/maedot.jpg" }
];
export function Partners() {
  return (
    <section id="partners" className="relative overflow-hidden py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Partners"
          title={<>Companies I've <span className="text-gradient">Worked With</span></>}
        />
      </div>
      
      <div className="relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        
        <div className="flex animate-marquee gap-16">
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex shrink-0 items-center justify-center">
              {/* Fixed: Overlay wrapper goes here - inside the map */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden group">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                {/* Dark overlay - fades on hover */}
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0" />              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats / CTA strip ---------------- */
function useCounter(target: number, run: boolean) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start: number | null = null;
    const dur = 1400;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / dur, 1);
      setV(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [run, target]);
  return v;
}
export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const items = [
    { v: useCounter(15, run), suffix: "+", label: "Projects shipped", icon: Globe },
    { v: useCounter(98, run), suffix: "%", label: "Client retention", icon: Heart },
    { v: useCounter(10, run), suffix: "+", label: "Happy clients", icon: Star },
    { v: useCounter(5, run), suffix: "", label: "Awards & features", icon: Award },
  ];
  return (
    <section ref={ref} className="relative py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-4">
            {items.map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <s.icon className="mx-auto mb-3 h-6 w-6 text-primary md:mx-0" />
                <div className="font-display text-5xl font-bold text-gradient">
                  {s.v}{s.suffix}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
const steps = [
  { n: "01", title: "Consultation", desc: "Discuss your needs, goals, and project requirements." },
  { n: "02", title: "Pricing", desc: "Choose a package that fits your budget and service needs." },
  { n: "03", title: "Agreement", desc: "Sign contract, agree on price, and share your files." },
  { n: "04", title: "Build & Launch", desc: "I build your website and deliver the final product." },
];
export function Process() {
  return (
    <section className="relative py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Process"
          title={<>How we'll <span className="text-gradient">work together</span></>}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-3xl glass p-6"
            >
              <div className="font-display text-6xl font-bold text-primary/20">{s.n}</div>
              <h3 className="mt-2 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const softSkills = [
  "Collaboration",
  "Team Work", 
  "Negotiation",
  "Open-Mindedness",
  "Decision Making",
  "Creativity",
  "Communication",
  "Problem Solving",
  "Adaptability",
  "Time Management",
  "Leadership"
];

export function SoftSkills() {
  return (
    <section id="soft-skills" className="relative py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Soft Skills"
          title={<>How I <span className="text-gradient">Work with Others</span></>}
          description="Beyond code — the human skills that make projects successful"
        />
        
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {softSkills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="group flex items-center gap-3 rounded-full glass px-6 py-3 transition-all hover:border-primary/50 hover:scale-105"
            >
              <span className="h-2 w-2 rounded-full bg-primary transition-transform group-hover:scale-150" />
              <span className="font-display font-semibold whitespace-nowrap">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  { q: "How quickly can we start?", a: "Usually within 1–2 weeks. I take on a limited number of projects per quarter to keep quality high." },
  { q: "Do you work with teams or just founders?", a: "Both. I integrate clearly without confusion with my teams or i can collaborate and work with exisitng team if it comes over" },
  { q: "What kind of website do you recommend for Start-up Business?", a: "I recommend a modern, responsive website that showcases your products or services effectively and provides a great user experience." },
  { q: "Do you handle hosting & deployment?", a: "Yes. I set up CI/CD, hosting, monitoring, and documentation as part of the deal." },
];
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-28">
      <div className="container mx-auto max-w-3xl px-6">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Questions, <span className="text-gradient">answered</span></>}
          align="center"
        />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass overflow-hidden rounded-2xl"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left font-medium"
              >
                <span>{f.q}</span>
                <span className={`grid h-7 w-7 place-items-center rounded-full bg-primary/15 text-primary transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`grid overflow-hidden transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="min-h-0">
                  <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  // Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = "service_q9bzagw";     // Get from EmailJS dashboard
  const EMAILJS_TEMPLATE_ID = "template_dsalzcv";   // Get from EmailJS dashboard
  const EMAILJS_PUBLIC_KEY = "MIS_JN9lx4S2Lx3DF";     // Get from EmailJS dashboard

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: null, message: "" });

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log("Email sent:", result.text);
      setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Email error:", error);
      setStatus({ type: "error", message: "Failed to send message. Please try again or contact me directly." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Contact"
                title={<>Let's build something <span className="text-gradient">real</span></>}
                description="Got a project in mind? Drop a message — I usually reply within 24 hours."
              />
              {[
                { icon: Mail, label: "mikitaye115@gmail.com", link: "mailto:mikitaye115@gmail.com" },
                { icon: Phone, label: "+251 951 207 168", link: "tel:+251951207168" },
                { icon: MapPin, label: "Addis Ababa, Ethiopia", link: null },
                { icon: Send, label: "Send Message on Telegram: @Ikimt5", link: "https://t.me/Ikimt5" }
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 rounded-2xl glass p-4 group transition-all hover:border-primary/30">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary group-hover:scale-110 transition-transform">
                    <c.icon className="h-5 w-5" />
                  </div>
                  {c.link ? (
                    <a href={c.link} target="_blank" className="text-sm hover:text-primary transition-colors">
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-sm">{c.label}</span>
                  )}
                </div>
              ))}
            </div>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <Field label="Your name" name="user_name" placeholder="Mikiyas Taye" required />
              <Field label="Email" type="email" name="user_email" placeholder="you@company.com" required />
              <Field label="Service" name="user_service" placeholder="Website Development" required />
              <Field label="Phone Number" name="user_phone" placeholder="+251 912 345 678" required />
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Project details</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your idea…"
                  className="w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary"
                  required
                />
              </div>
              
              {/* Status Message */}
              {status.type && (
                <div className={`p-3 rounded-lg text-sm ${
                  status.type === "success" 
                    ? "bg-green-500/10 border border-green-500/30 text-green-500" 
                    : "bg-red-500/10 border border-red-500/30 text-red-500"
                }`}>
                  {status.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSending}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 font-semibold text-primary-foreground transition-all hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="w-full rounded-full border border-border bg-background/40 px-5 py-3 text-sm outline-none transition focus:border-primary"
      />
    </div>
  );
}

export function Footer() {
  const socialLinks = [
    { icon: Facebook, name: "Facebook", link: "https://www.facebook.com/share/1EUqpFEFeK/" },
    { icon: Twitter, name: "X", link: "#" },
    { icon: Linkedin, name: "LinkedIn", link: "https://www.linkedin.com/in/mikiyas-taye-23941040b" },
    { icon: Instagram, name: "Instagram", link: "https://instagram.com/mikiy_taye" },
  ];

  return (
    <footer className="relative border-t border-border pt-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3 font-display text-2xl font-bold">
              <BrandMark className="h-9 w-9 shrink-0" />
              <span>Mikiyas<span className="text-primary"> Taye</span></span>
            </a>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Freelance developer & designer building premium digital products and websites for anyone in the world.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Available for New Chapter In 2026
            </div>
          </div>
          
          {[
            { title: "Navigate", links: ["Home", "About Me", "Projects", "Services"] },
            { title: "Services", links: ["Website Development", "SaaS Development", "UI/UX Design", "ERP System"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-primary">{col.title}</h4>
              <ul className="space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l}>
                    <span className="text-muted-foreground transition-colors hover:text-foreground">
                      {l}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Social Media Column */}
          <div>
            <h4 className="mb-4 font-display text-sm uppercase tracking-widest text-primary">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full glass text-muted-foreground transition-all hover:bg-primary hover:text-white hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-3 pb-8 text-xs text-muted-foreground md:flex-row">
          <span>© 2026 Mikiyas Studio · Privacy Policy | Terms of Service</span>
          <span className="font-mono">网站 Developer</span>
        </div>
      </div>
      <div className="font-display select-none text-center text-[18vw] font-bold leading-none text-primary/[0.04]">
        Mikiyas
      </div>
    </footer>
  );
}