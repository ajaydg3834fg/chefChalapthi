import React, { useEffect } from "react";
import IndexPage, { Head as _ } from "./index";

export default function ConsultingRoute() {
  useEffect(() => {
    const id = "consulting";
    if (typeof window !== "undefined") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.location.hash = id; // /consulting#consulting
      }
    }
  }, []);
  return <IndexPage />;
}

export const Head = () => {
  const SITE = {
    url: "https://www.chefchalapathirao.com/consulting",
    title:
      "Restaurant Menu Consultant (Hyderabad, India) — Chef-Led Menu Engineering & Concept Development",
    description:
      "Chef-led menu engineering, recipe standardization, SOPs and pre-openings. Work with Chef Chalapathi Rao on South Indian concepts and revamps.",
    image: "/share/og-chef.jpg",
    twitter: "@chefchalapathirao",
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Restaurant Menu Consulting & Concept Development",
      provider: { "@type": "Person", name: "Chef Chalapathi Rao" },
      areaServed: { "@type": "Country", name: "India" },
      offers: {
        "@type": "Offer",
        url: "https://www.chefchalapathirao.com/#contact",
        price: 0,
        priceCurrency: "INR",
      },
    },
  ];

  return (
    <>
      <html lang="en" />
      <title>{SITE.title}</title>
      <meta name="description" content={SITE.description} />
      <link rel="canonical" href={SITE.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={SITE.title} />
      <meta property="og:description" content={SITE.description} />
      <meta property="og:url" content={SITE.url} />
      <meta
        property="og:image"
        content={`https://www.chefchalapathirao.com${SITE.image}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitter} />
      <meta name="twitter:title" content={SITE.title} />
      <meta name="twitter:description" content={SITE.description} />
      <meta
        name="twitter:image"
        content={`https://www.chefchalapathirao.com${SITE.image}`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};
