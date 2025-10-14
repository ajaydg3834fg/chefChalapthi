import React, { useEffect } from "react";
import IndexPage, { Head as _ignore } from "./index";

export default function SpeakingRoute() {
  useEffect(() => {
    const id = "speaking";
    if (typeof window !== "undefined") {
      const el = document.getElementById(id);
      if (el) {
        // Scroll to the section
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Update URL without using the restricted global `history`
        window.location.hash = id; // results in /speaking#speaking
      }
    }
  }, []);
  return <IndexPage />;
}

export const Head = () => {
  const SITE = {
    url: "https://www.chefchalapathirao.com/speaking",
    title: "Book Chef Chalapathi Rao — TEDx Speaker & Culinary Masterclasses",
    description:
      "Invite Chef Chalapathi Rao for TEDx-style keynotes and culinary masterclasses on South Indian heritage, menu engineering, and zero-waste kitchens.",
    image: "/share/og-chef.jpg",
    twitter: "@chefchalapathirao",
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Chef Chalapathi Rao",
      url: "https://www.chefchalapathirao.com/",
      image: "https://www.chefchalapathirao.com/share/chef-portrait.jpg",
      sameAs: [
        "https://www.youtube.com/@chefchalapathirao",
        "https://www.instagram.com/chefchalapathirao/",
      ],
    },
  ];

  return (
    <>
      <html lang="en" />
      <title>{SITE.title}</title>
      <meta name="description" content={SITE.description} />
      <link rel="canonical" href={SITE.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Chef Chalapathi Rao" />
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
