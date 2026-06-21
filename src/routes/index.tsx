import { createFileRoute } from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";
import { AIMeta } from "@/components/AIMeta";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Hero } from "@/components/sections/Hero";
import {
  About, Skills, Services, Projects, Experience, Testimonials,
  Partners, Stats, Process, FAQ, Contact, Footer,
  SoftSkills,
} from "@/components/sections/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mikiyas Taye | Front-end Developer & Digital Solution Provider" },
      { name: "description", content: "Premium portfolio of Mikiyas, an independent front-end developer crafting modern, performant digital products." },
      { property: "og:title", content: "Mikiyas Taye | Front-end Developer & Digital Solution Provider" },
      { property: "og:description", content: "Premium portfolio of Mikiyas, an independent front-end developer crafting modern, performant digital products." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <HelmetProvider>
      {/* Favicon for browser tab */}
      <Helmet>
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
      </Helmet>

      <div className="relative noise">
        {/* SEO for entire site */}
        <SEO />
        <StructuredData />
        <AIMeta />

        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Partners />
          <Testimonials />
          <Stats />
          <SoftSkills />
          <Process />
          <Experience />
          <FAQ />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
}