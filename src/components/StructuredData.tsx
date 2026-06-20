import { Helmet } from "react-helmet-async";

export function StructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mikiyas Taye",
    "alternateName": "Mikiyas",
    "description": "16-year-old front-end developer specializing in modern web applications, mobile apps, and premium digital experiences.",
    "url": "https://mikitaye.vercel.app",
    "image": "https://mikitaye.vercel.app/profile.jpg",
    "email": "mikitaye115@gmail.com",
    "telephone": "+251951207168",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Addis Ababa",
      "addressCountry": "Ethiopia"
    },
    "jobTitle": "Full-Stack Developer",
    "knowsAbout": ["React", "Next.js", "TypeScript", "Node.js", "TailwindCSS", "Framer Motion"],
    "sameAs": [
      "https://t.me/Ikimt5",
      "https://www.facebook.com/share/1EUqpFEFeK/",
      "https://www.linkedin.com/in/mikiyas-taye-23941040b"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Self Developer"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "age": "16",
    "nationality": "Ethiopian",
    "knowsLanguage": ["English", "Amharic"]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mikiyas Taye Portfolio",
    "url": "https://mikitaye.vercel.app",
    "description": "Portfolio of Mikiyas Taye - Full-Stack Developer",
    "author": {
      "@type": "Person",
      "name": "Mikiyas Taye"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(personData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteData)}
      </script>
    </Helmet>
  );
}