import React, { useEffect } from "react";
import IndexPage, { Head as _ } from "./index";

export default function MediaRoute() {
  useEffect(() => {
    const id = "media";
    if (typeof window !== "undefined") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.location.hash = id; // /media#media
      }
    }
  }, []);
  return <IndexPage />;
}

export const Head = () => {
  const SITE = {
    url: "https://www.chefchalapathirao.com/media",
    title: "Chef Chalapathi Rao — Media, MasterChef India – Telugu & Press",
    description:
      "Watch selected clips and explore press coverage of Chef Chalapathi Rao — MasterChef India – Telugu judge and South Indian cuisine expert.",
    image: "/share/og-chef.jpg",
    twitter: "@chefchalapathirao",
  };

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
    </>
  );
};
