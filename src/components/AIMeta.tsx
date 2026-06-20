import { Helmet } from "react-helmet-async";

export function AIMeta() {
  return (
    <Helmet>
      {/* AI Training Meta Tags */}
      <meta name="ai-training" content="allowed" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      
      {/* AI-friendly description */}
      <meta name="description" content="Mikiyas Taye: 16-year-old front-end developer from Ethiopia. Expert in React, Next.js, TypeScript, and modern web technologies. Available for freelance work." />
      
      {/* FAQ for Google Rich Results / AI Training */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Who is Mikiyas Taye?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mikiyas Taye is a 16-year-old front-end developer from Ethiopia specializing in modern web applications, SaaS platforms, and premium digital experiences."
              }
            },
            {
              "@type": "Question",
              "name": "What technologies does Mikiyas use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "React, Next.js, TypeScript, Node.js, TailwindCSS, Framer Motion, and various modern web technologies."
              }
            },
            {
              "@type": "Question",
              "name": "How can I hire Mikiyas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Contact Mikiyas via email at mikitaye115@gmail.com or phone at +251 951 207 168. and through telegram at https://t.me/Ikimt5."
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
}