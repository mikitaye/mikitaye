import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  author?: string;
  tags?: string[];
}

export function SEO({
  title = "",
  description = "16-year-old front-end developer specializing in modern web applications, mobile apps, and premium digital experiences. Available for freelance work.",
  image = "/og-image.jpg",
  url = "https://mikitaye.vercel.app",
  type = "website",
  publishedTime,
  author = "Mikiyas Taye",
  tags = ["Web Developer", "Front-end", "React", "Next.js", "Freelancer"],
}: SEOProps) {
  const siteTitle = "";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={tags.join(", ")} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Mikiyas Taye - Front-end Developer Portfolio" />
      <meta property="og:site_name" content="Mikiyas Taye Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter (X) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@mikiyas" />
      
      {/* Telegram / WhatsApp (uses Open Graph) */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Article Specific (if applicable) */}
      {type === "article" && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:author" content={author} />
          {tags.map((tag, i) => (
            <meta property="article:tag" content={tag} key={i} />
          ))}
        </>
      )}
      
      {/* Geo Location */}
      <meta name="geo.region" content="ET-AA" />
      <meta name="geo.placename" content="Addis Ababa" />
      <meta name="geo.position" content="9.02497;38.74689" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color" content="#8b5cf6" />
    </Helmet>
  );
}