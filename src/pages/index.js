// src/pages/index.js
import React, { useEffect, useState, useMemo } from "react";

// Assets (swap to StaticImage later if you want)
import chalapathi from "../assets/chalapathi.png";
import ImageHero from "../assets/ImageHero.jpg";
import heroRight from "../assets/heroRight.jpg";
import logoChef from "../assets/logoChef.png";
import heroImage2 from "../assets/heroImage2.jpg";

import wa0065 from "../assets/IMG-20251008-WA0065.jpg";
import wa0013_1 from "../assets/IMG-20251008-WA0013(1).jpg";
import wa0015 from "../assets/IMG-20251008-WA0015.jpg";
import wa0017 from "../assets/IMG-20251008-WA0017.jpg";
import wa0019 from "../assets/IMG-20251008-WA0019.jpg";
import wa0021 from "../assets/IMG-20251008-WA0021.jpg";
import wa0024 from "../assets/IMG-20251008-WA0024.jpg";
import wa0026 from "../assets/IMG-20251008-WA0026.jpg";
import wa0028 from "../assets/IMG-20251008-WA0028.jpg";
import wa0029 from "../assets/IMG-20251008-WA0029.jpg";
import wa0031 from "../assets/IMG-20251008-WA0031.jpg";
import wa0033 from "../assets/IMG-20251008-WA0033.jpg";
import wa0035 from "../assets/IMG-20251008-WA0035.jpg";
import wa0037 from "../assets/IMG-20251008-WA0037.jpg";
import wa0039 from "../assets/IMG-20251008-WA0039.jpg";
import wa0041 from "../assets/IMG-20251008-WA0041.jpg";
import wa0043 from "../assets/IMG-20251008-WA0043.jpg";
import wa0046 from "../assets/IMG-20251008-WA0046.jpg";
import wa0049 from "../assets/IMG-20251008-WA0049.jpg";
import wa0050 from "../assets/IMG-20251008-WA0050.jpg";
import wa0052 from "../assets/IMG-20251008-WA0052.jpg";
import wa0054 from "../assets/IMG-20251008-WA0054.jpg";
import wa0055 from "../assets/IMG-20251008-WA0055.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image4.jpg";
import image6 from "../assets/image6.jpg";

const GALLERY_TABS = [
  { key: "masterchef", label: "MasterChef" },
  { key: "chefs", label: "With Chefs" },
  { key: "awards", label: "Awards" },
];

const GALLERY_MAP = {
  masterchef: [
    { src: wa0017, alt: "On the MasterChef India – Telugu set" },
    { src: wa0019, alt: "Chef Chalapathi Rao during MasterChef tasting" },
    { src: wa0021, alt: "MasterChef studio shot" },
    { src: wa0028, alt: "MasterChef studio shot" },
    { src: wa0046, alt: "MasterChef studio shot" },
  ],
  chefs: [
    { src: wa0031, alt: "With fellow chefs at an industry event" },
    { src: wa0033, alt: "Culinary meetup: panel with chefs" },
    { src: wa0035, alt: "Kitchen pass with visiting chef" },
    { src: wa0039, alt: "Kitchen pass with visiting chef" },
    { src: wa0037, alt: "Kitchen pass with visiting chef" },
  ],
  awards: [
    { src: wa0049, alt: "Receiving a culinary award" },
    { src: wa0050, alt: "Times Food Awards evening" },
    { src: wa0052, alt: "Stage photo after recognition" },
    { src: wa0054, alt: "Stage photo after recognition" },
    { src: wa0065, alt: "Stage photo after recognition" },
  ],
};

/* ---------------- THEME DATA ---------------- */
const PALETTE = {
  deepForest: "rgba(30,57,42,.88)",
  terracotta: "#A94D2C",
  warmIvory: "#F5F2ED",
  charcoal: "#212121",
  white: "#ffffff",
};

const SITE = {
  url: "https://www.chefchalapathirao.com", // TODO: update
  title:
    "Chef Chalapathi Rao — TEDx Speaker, MasterChef India – Telugu Judge & South Indian Cuisine Expert",
  description:
    "Official portfolio of Chef Chalapathi Rao: TEDx speaker, MasterChef India – Telugu judge, South Indian cuisine expert. Menu consulting, masterclasses, collaborations, and media.",
  twitter: "@chefchalapathirao",
  ogImage: "/share/chalapathi.png", // ensure /static/share/og-chef.jpg exists
};

const socials = {
  youtube: "https://www.youtube.com/@chefchalapathirao",
  instagram: "https://www.instagram.com/chefchalapathirao/",
  handle: "@chefchalapathirao",
  email: "hello@chefchalapathirao.com",
};

const IMG = {
  heroDishTopLeft: ImageHero,
  heroDishBottomLeft: heroImage2,
  heroRightWide: heroRight,
  chefPortrait: chalapathi,
};

const AWARDS = [
  { title: "Top 30 Chefs in India", issuer: "Culinary Culture", year: "2022" },
  {
    title: "MasterChef India – Telugu Judge",
    issuer: "Star Maa / Endemol",
    year: "2021",
  },
  {
    title: "Best South Indian Restaurant",
    issuer: "Times Food & Nightlife Awards",
    year: "Multi-year",
  },
  {
    title: "Top 50 Restaurants in India",
    issuer: "Conde Nast Traveller",
    year: "List",
  },
  {
    title: "Most Authentic South Indian Cuisine",
    issuer: "Restaurant India",
    year: "Honor",
  },
];

const DISHES = [
  "Gongura Royyalu",
  "Alleppey Prawn Curry",
  "Chettinad Chicken",
  "Mutton Nilgiri Korma",
  "Telangana Pachi Mirchi Kodi",
  "Yetti Ghee Roast & Rasa Vada",
];

/* --- MEDIA & LINKS --- */
const MEDIA = {
  youtube: ["ZjhW8Sh2eYg", "Unx53YMbM-c", "cClEz1gdmLQ", "lAMYoubWrx0"],
  instagram: [
    "https://www.instagram.com/reel/DNspUzZ3j_A/",
    "https://www.instagram.com/reel/DNihCcAucXl/",
  ],
};

const GALLERY = [image2, image3, image4, image5, image6];

const ARTICLES = [
  {
    title: "Custodian of Dakshin: Discipline behind authenticity",
    outlet: "Gourmet Journal",
    year: "2023",
    href: "#",
  },
  {
    title: "The South Indian Table, Elevated",
    outlet: "Food & Culture",
    year: "2022",
    href: "#",
  },
  {
    title: "Repair to Perfection: Fixing a dish under pressure",
    outlet: "Weekend Magazine",
    year: "2021",
    href: "#",
  },
];

const CONTACT = { email: "hello@chefchalapathirao.com" };

/* ------------- SEO: JSON-LD helpers ------------- */
const jsonLd = {
  person: () => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#chef`,
    name: "Chef Chalapathi Rao",
    description:
      "Hyderabad-based chef, TEDx speaker, MasterChef India – Telugu judge, former ITC Dakshin custodian, co-founder of culinary ventures.",
    url: SITE.url,
    image: `${SITE.url}/share/chalapathi.png`, // put file in /static/share/
    sameAs: [socials.youtube, socials.instagram],
    worksFor: [{ "@type": "Organization", name: "Simply South" }],
    knowsAbout: [
      "South Indian cuisine",
      "Telangana cuisine",
      "Andhra cuisine",
      "Menu engineering",
      "Masterclasses",
      "Culinary heritage",
    ],
  }),
  service: () => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/#consulting`,
    name: "Restaurant Menu Consulting & Concept Development",
    provider: { "@id": `${SITE.url}/#chef` },
    areaServed: { "@type": "Country", name: "India" },
    offers: {
      "@type": "Offer",
      url: `${SITE.url}/#contact`,
      price: 0,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  }),
  faq: () => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer chef-led staff training and SOPs for new restaurants?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — training covers recipe standardization, plating, thali service, production planning and hygiene SOPs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver keynotes and culinary masterclasses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — book a TEDx-style keynote or hands-on masterclass in Hyderabad or at your venue.",
        },
      },
      {
        "@type": "Question",
        name: "Which cuisines do you consult on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A five-state South Indian lens — Telangana, Andhra Pradesh, Tamil Nadu, Karnataka and Kerala, with regional thalis and seasonal menus.",
        },
      },
    ],
  }),
};

/* ------------ ICONS (inline svgs) ------------ */
const Icon = {
  yt: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M23.5 6.2a4 4 0 0 0-2.8-2.8C18.9 3 12 3 12 3S5.1 3 3.3 3.4A4 4 0 0 0 .5 6.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 5.8 4 4 0 0 0 2.8 2.8C5.1 21 12 21 12 21s6.9 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-5.8zM9.6 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  ),
  ig: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm6-1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
    </svg>
  ),
  chev: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M7.4 8.4 12 13l4.6-4.6 1.4 1.4L12 15.8 6 9.8z" />
    </svg>
  ),
  mail: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm3-.5 7 5 7-5H5Z" />
    </svg>
  ),
};

/* ---------------- UI ---------------- */
const Header = () => {
  const [open, setOpen] = useState(false);
  const links = [
    ["#about", "About"],
    ["#speaking", "Speaking"],
    ["#consulting", "Consulting"],
    ["#philosophy", "Concept"],
    ["#dishes", "Dishes"],
    ["#media", "Media"],
    ["#gallery", "Gallery"],
    ["#articles", "Articles"],
    ["#faq", "FAQ"],
    ["#contact", "Contact"],
  ];

  return (
    <>
      <header className="header sticky">
        <div className="brand">
          <img
            className="avatar"
            src={logoChef}
            alt="Chef Chalapathi Rao logo"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="nav">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div className="mobile-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-top">
              <img className="avatar small" src={logoChef} alt="" />
              <button
                className="close"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <ul className="mobile-links">
              {links.map(([href, label]) => (
                <li key={href}>
                  <a href={href} onClick={() => setOpen(false)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-socials">
              <a href={socials.youtube} target="_blank" rel="noreferrer">
                <Icon.yt className="w-5 h-5" />
              </a>
              <a href={socials.instagram} target="_blank" rel="noreferrer">
                <Icon.ig className="w-5 h-5" />
              </a>
              <a href={`mailto:${socials.email}`}>
                <Icon.mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        {/* Chef image layered for mobile */}
        <div className="chef-hero-wrap" aria-hidden="true">
          <img className="chef-hero" src={IMG.chefPortrait} alt="" />
        </div>

        <div className="hero-left-img tl">
          <img
            src={IMG.heroDishTopLeft}
            alt="A beautifully plated traditional South Indian dish"
          />
        </div>
        <div className="hero-left-img bl">
          <img
            src={IMG.heroDishBottomLeft}
            alt="Another vibrant South Indian culinary creation"
          />
        </div>
      </div>
      <div className="hero-right">
        <img
          className="hero-right-bg"
          src={IMG.heroRightWide}
          alt="An artfully arranged plate with spices"
        />
        <div className="green-card">
          <div className="green-card-col">
            <h1>
              TEDx Speaker • MasterChef India – Telugu Judge • Custodian of
              South Indian Cuisine
            </h1>
            <p>
              Honouring heritage with modern craft. Chef Chalapathi Rao
              celebrates the depth of South India—curating menus as cultural
              narratives and elevating classics with precision and integrity.
            </p>
          </div>
          <div>
            <a className="btn terra" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const About = () => (
  <section id="about" className="about-band">
    <div className="about-band-bg" />
    <img
      className="chef"
      src={IMG.chefPortrait}
      alt="Portrait of Chef Chalapathi Rao"
    />
    <aside className="about-card">
      <header className="about-head">
        <span className="eyebrow">About</span>
        <h3>Chef Chalapathi Rao</h3>
        <p className="about-kicker">
          TEDx Speaker • MasterChef India – Telugu Judge • Top 30 Chefs in India
        </p>
      </header>
      <p className="about-copy">
        Chef Rao is a lifelong steward of South Indian cuisine—known for menu
        curation, ingredient honesty, and reviving regional dishes. From
        stewarding ITC’s iconic Dakshin to co-founding{" "}
        <strong>Simply South (2014)</strong>, he presents a culinary map of
        Andhra Pradesh, Telangana, Karnataka, Tamil Nadu, and Kerala with
        respect and rigor.
      </p>
      <div className="about-stats">
        <div className="stat">
          <strong>30+</strong>
          <span>Years Craft</span>
        </div>
        <div className="stat">
          <strong>5</strong>
          <span>States on the Menu</span>
        </div>
        <div className="stat">
          <strong>100+</strong>
          <span>Revived Recipes</span>
        </div>
      </div>
      <ul className="about-points">
        <li>Curated menus • Regional thalis • Seasonal tasting journeys</li>
        <li>Ingredient integrity—no shortcuts, no dilution</li>
        <li>Research-led revivals connecting families to roots</li>
      </ul>
      <div className="about-cta">
        <a className="btn hollow" href="#consulting">
          Work With Chef
        </a>
      </div>
    </aside>
  </section>
);

/* ---- Speaking ---- */
const SpeakingSection = () => (
  <section id="speaking" className="section ivory speaking">
    <div className="container">
      <h2 className="section-title">Speaking & Masterclasses (TEDx)</h2>
      <p className="lead">
        Keynotes and hands-on sessions on culinary heritage, menu engineering,
        and the five-state South Indian lens.
      </p>
      <ul className="bullets">
        <li>
          TEDx talk: <em>Live Life with a Little Spice</em> (see Media below for
          the embedded video)
        </li>
        <li>
          Keynote topics: Heritage Thali for Hotels • Zero-waste Kitchens • Menu
          Engineering for Brunches
        </li>
        <li>
          Formats: 30–45 min keynotes, 90–120 min masterclasses, full-day
          workshops
        </li>
      </ul>
    </div>
  </section>
);

/* ---- Consulting ---- */
const ConsultingSection = () => (
  <section id="consulting" className="section consulting">
    <div className="container">
      <h2 className="section-title">
        Restaurant Menu Consulting & Concept Development
      </h2>
      <div className="phi-row">
        <div className="phi card phi--light">
          <h4>Concept Creation</h4>
          <p>
            Define the culinary story, menu scope, and guest experience across
            dayparts.
          </p>
        </div>
        <div className="phi card phi--light">
          <h4>Menu Engineering</h4>
          <p>
            Recipe standardization, costing, contribution margins, and seasonal
            rotations.
          </p>
        </div>
        <div className="phi card phi--light">
          <h4>Pre-Openings & SOPs</h4>
          <p>
            Kitchen design inputs, prep flows, plating guides, and service SOPs.
          </p>
        </div>
      </div>
      <p className="about-copy" style={{ marginTop: 12 }}>
        Engagements include hotel pop-ups, restaurant revamps, and chef-led
        staff training. Share your brief and we’ll propose a right-sized plan.
      </p>
    </div>
  </section>
);

const AwardsSection = ({ awardsData }) => (
  <section className="section ivory awards">
    <div className="container">
      <h2 className="section-title">Awards & Recognition</h2>
      <div className="awards-row">
        {awardsData.map((a, i) => (
          <article className="award-card" key={i}>
            <div className="award-icon" aria-hidden>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 L12 2 z" />
              </svg>
            </div>
            <div className="award-meta">
              <h4 className="award-title">{a.title}</h4>
              <p className="award-issuer">{a.issuer}</p>
            </div>
            <span className="award-year">{a.year}</span>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Philosophy = () => (
  <section id="philosophy" className="section philosophy">
    <div className="container">
      <h2 className="section-title light">The Philosophy</h2>
      <div className="phi-row">
        <div className="phi card">
          <h4>Curated Menus</h4>
          <p>
            Menus as cultural narratives—researched, tested, and seasonally
            refined; regional thalis and a living “Map of the South.”
          </p>
        </div>
        <div className="phi card">
          <h4>Honest Representation</h4>
          <p>
            Ingredient integrity first. If quality produce isn’t available, the
            dish is respectfully withdrawn—never compromised.
          </p>
        </div>
        <div className="phi card">
          <h4>Revival & Memory</h4>
          <p>
            Grandmother recipes, temple food, rustic Telangana fare—revived with
            technique and presented with contemporary elegance.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SignatureDishes = ({ dishes }) => (
  <section id="dishes" className="black-wrap">
    <h2 className="section-title light signature-title">Signature Dishes</h2>
    <ul className="tags">
      {dishes.map((dish) => (
        <li key={dish}>{dish}</li>
      ))}
    </ul>
  </section>
);

/* ---------------- MEDIA ---------------- */
const MediaSection = () => {
  useEffect(() => {
    if (!MEDIA.instagram?.length) return;
    const id = "ig-embed";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.async = true;
    s.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(s);
  }, []);

  return (
    <section id="media" className="section media">
      <div className="container">
        <h2 className="section-title">Media</h2>

        <div className="media-block">
          <h4>YouTube</h4>
          <div className="video-grid">
  {MEDIA.youtube.map((id) => (
    <div className="embed" key={id}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
        title={`YouTube ${id}`}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  ))}
</div>
        </div>

        {MEDIA.instagram?.length > 0 && (
          <div className="media-block">
            <h4>Instagram</h4>
            <div className="ig-grid">
              {MEDIA.instagram.map((url, i) => (
                <blockquote
                  key={i}
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

/* ---------------- GALLERY ---------------- */
/* ---------------- UPDATED: GALLERY (with filter tabs) ---------------- */
const GallerySection = () => {
  const [active, setActive] = useState(GALLERY_TABS[0].key); // default first selected
  const [openIdx, setOpenIdx] = useState(null);

  const images = useMemo(() => GALLERY_MAP[active] || [], [active]);

  // Close or navigate lightbox with keyboard
  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") setOpenIdx((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setOpenIdx((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx, images.length]);

  // When switching tabs, close any open lightbox
  useEffect(() => {
    setOpenIdx(null);
  }, [active]);

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>

        {/* Filter tabs */}
        <div
          className="gallery-tabs"
          role="tablist"
          aria-label="Gallery filters"
        >
          {GALLERY_TABS.map((t) => {
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                role="tab"
                id={`tab-${t.key}`}
                aria-selected={isActive}
                aria-controls={`panel-${t.key}`}
                className={`tab-btn ${isActive ? "active" : ""}`}
                onClick={() => setActive(t.key)}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Images for the selected tab */}
      <div
        className="container gallery-wrap"
        id={`panel-${active}`}
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
      >
        <div className="masonry">
          {images.map((img, i) => (
            <figure
              className="tile"
              key={`${active}-${i}`}
              onClick={() => setOpenIdx(i)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {openIdx !== null && images[openIdx] && (
        <div
          className="lightbox"
          onClick={() => setOpenIdx(null)}
          role="dialog"
          aria-modal="true"
        >
          <img src={images[openIdx].src} alt={images[openIdx].alt} />
          <button
            className="close"
            onClick={() => setOpenIdx(null)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

/* ---------------- ARTICLES ---------------- */
const ArticlesSection = () => (
  <section id="articles" className="section ivory">
    <div className="container">
      <h2 className="section-title">Articles & Features</h2>
      <div className="articles-grid">
        {ARTICLES.map((a, i) => (
          <a className="article-card" key={i} href={a.href}>
            <div className="article-meta">
              <strong>{a.title}</strong>
              <span>
                {a.outlet} • {a.year}
              </span>
            </div>
            <span className="read">Read</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- FAQ (rich results) ---------------- */
const FAQSection = () => (
  <section id="faq" className="section ivory">
    <div className="container">
      <h2 className="section-title">FAQs</h2>
      <details>
        <summary>
          Do you offer chef-led staff training and SOPs for new restaurants?
        </summary>
        <p>
          Yes — training covers recipe standardization, plating, thali service,
          production planning and hygiene SOPs.
        </p>
      </details>
      <details>
        <summary>Do you deliver keynotes and culinary masterclasses?</summary>
        <p>
          Yes — book a TEDx-style keynote or hands-on masterclass in Hyderabad
          or at your venue.
        </p>
      </details>
      <details>
        <summary>Which cuisines do you consult on?</summary>
        <p>
          A five-state South Indian lens — Telangana, Andhra Pradesh, Tamil
          Nadu, Karnataka and Kerala, with regional thalis and seasonal menus.
        </p>
      </details>
    </div>
  </section>
);

/* ---------------- CONTACT ---------------- */
const ContactSection = () => {
  const submit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") || "";
    const subject = encodeURIComponent(
      form.get("subject") || "Inquiry from website"
    );
    const message = encodeURIComponent(
      (form.get("message") || "") + (name ? `\n\n— ${name}` : "")
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${message}`;
  };
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title light">Contact</h2>
        <form className="contact-grid" onSubmit={submit}>
          <label>
            <span>Your Name</span>
            <input name="name" required />
          </label>
          <label>
            <span>Subject</span>
            <input
              name="subject"
              placeholder="Chef appearance, interview, menu curation..."
            />
          </label>
          <label className="full">
            <span>Message</span>
            <textarea name="message" rows="5" required />
          </label>
        </form>
        <a className="btn terra" href={`mailto:${CONTACT.email}`}>
          Send to {CONTACT.email}
        </a>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="icons" role="presentation">
      <a
        href={socials.youtube}
        target="_blank"
        rel="noreferrer"
        className="text-white/60 hover:text-amber-300 transition-colors"
      >
        <Icon.yt className="w-5 h-5" />
      </a>
      <a
        href={socials.instagram}
        target="_blank"
        rel="noreferrer"
        className="text-white/60 hover:text-amber-300 transition-colors"
      >
        <Icon.ig className="w-5 h-5" />
      </a>
      <a
        href={`mailto:${socials.email}`}
        className="text-white/60 hover:text-amber-300 transition-colors"
      >
        <Icon.mail className="w-5 h-5" />
      </a>
      <a
        href="#top"
        className="px-4 py-2 rounded-full border border-white/15 text-white/70 hover:bg-amber-500/10 hover:text-amber-300 hover:border-amber-300/30 transition-all flex items-center gap-2"
      >
        Back to top <Icon.chev className="w-4 h-4 rotate-180" />
      </a>
    </div>
    <p>
      © {new Date().getFullYear() + 1} Chef Chalapathi Rao. All rights reserved.
    </p>
  </footer>
);

/* ---------------- PAGE ---------------- */
export default function IndexPage() {
  useEffect(() => {
    // client-only scripts like IG embed are handled in MediaSection
  }, []);

  return (
    <div className="page" id="top">
      <div className="artboard">
        <div className="topbar" />
        <Header />
        <main>
          <Hero />
          <About />
          <SpeakingSection />
          <ConsultingSection />
          <AwardsSection awardsData={AWARDS} />
          <Philosophy />
          <SignatureDishes dishes={DISHES} />
          <MediaSection />
          <GallerySection />
          <ArticlesSection />
          <FAQSection />
          <ContactSection />
          <section className="section ivory closing">
            <div className="container">
              <blockquote>
                “Taste honesty. Relive tradition. Experience South India.”
              </blockquote>
            </div>
          </section>
        </main>
        {/* <Footer /> */}
      </div>

      {/* ---------------- STYLES ---------------- */}
      {/* ---------------- STYLES ---------------- */}
      <style>{`
        :root{
          --deep:${PALETTE.deepForest};
          --terra:${PALETTE.terracotta};
          --ivory:${PALETTE.warmIvory};
          --charcoal:${PALETTE.charcoal};
          --white:${PALETTE.white};
          --page:#E9E1CE;
        }
        *{box-sizing:border-box}
        html,body,#root{height:100%}
        body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif;line-height:1.45}
        img{display:block;max-width:100%}
        h1,h2,h3,h4,p{margin:0}
        .page{min-height:100%;background:var(--page)}
        .artboard{overflow-x:hidden}

        :focus-visible{outline:3px solid var(--terra);outline-offset:2px;border-radius:4px}

        /* Header */
        .topbar{height:20px;background:var(--deep)}
        .header{height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 16px;border-bottom:1px solid #eee;background:#fff}
        .header.sticky{position:sticky;top:0;z-index:1000;background:#fff}
        .brand{display:flex;align-items:center;gap:10px}
        .avatar{width:62px;height:66px;object-fit:contain}
        .avatar.small{width:84px;height:42px}
        .nav{display:flex;gap:18px;font-size:12px;color:#4b5563}
        .nav a{cursor:pointer;text-decoration:none;color:inherit}
        .nav a:hover{color:var(--terra)}
        .hamburger{display:none;background:transparent;border:0;cursor:pointer}
        .hamburger span{display:block;width:22px;height:2px;background:#333;margin:4px 0;border-radius:2px}

        /* Mobile menu */
        .mobile-menu{position:fixed;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(2px);z-index:1100;display:flex;justify-content:flex-end}
        .mobile-sheet{width:min(86vw,360px);height:100%;background:#0f1b16;color:#fff;border-left:1px solid rgba(255,255,255,.1);display:flex;flex-direction:column}
        .mobile-top{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,.1)}
        .mobile-top .close{background:transparent;border:1px solid rgba(255,255,255,.25);color:#fff;border-radius:8px;padding:6px 10px;cursor:pointer}
        .mobile-links{list-style:none;padding:8px 12px;margin:0}
        .mobile-links a{display:block;padding:12px 10px;border-radius:10px;color:#e7f0ec;text-decoration:none}
        .mobile-links a:hover{background:rgba(255,255,255,.05);color:#ffd4bf}
        .mobile-socials{margin-top:auto;display:flex;gap:12px;padding:14px 16px;border-top:1px solid rgba(255,255,255,.1)}
        .mobile-socials a{color:#ffd4bf}

        /* Hide desktop nav on small screens, show hamburger */
        @media (max-width:760px){
          .nav{display:none}
          .hamburger{display:block}
        }
.chef-hero-wrap { display: none; }

        /* Hero */
        .hero{position:relative;display:flex;min-height:360px}
        .hero-left{position:relative;flex:1.04}
        .hero-right{position:relative;flex:0.96;min-height:360px}
        .hero-right-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:saturate(.98) contrast(1.02)}
        .hero-right::after{content:"";position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,.18),rgba(0,0,0,.10) 40%,rgba(0,0,0,0) 100%);pointer-events:none}
        .hero-left-img{position:absolute;left:0;right:0;overflow:hidden}
        .hero-left-img img{width:100%;height:100%;object-fit:cover}
        .hero-left-img.tl{top:0;height:340px}
        .hero-left-img.bl{bottom:-8px;height:140px}
        .green-card{position:absolute;left:22px;right:22px;top:100px;background:var(--deep);border-radius:10px;box-shadow:0 10px 22px rgba(0,0,0,.22);color:#fff;display:flex;justify-content:space-between;gap:10px;align-items:flex-end;padding-bottom:14px}
        .green-card-col{display:flex;flex-direction:column;gap:10px;padding:24px 26px;background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="360" height="220"><g fill="%231a5a45" opacity=".35"><path d="M0 180c60-60 120-60 180 0-60 34-120 34-180 0z"/><circle cx="300" cy="40" r="70"/></g></svg>');background-repeat:no-repeat;background-position:right -40px top -40px}
        .green-card h1{font-size:22px;line-height:28px;font-weight:800;letter-spacing:.3px}
        .green-card p{font-size:12.6px;line-height:18px;opacity:.95}
        .btn{display:inline-block;border:none;border-radius:6px;font-weight:700;font-size:12px;padding:10px 14px;cursor:pointer;text-align:center;transition:transform .2s ease}
        .btn:hover{transform:scale(1.05)}
        .btn.terra{background:var(--terra);color:#fff}
        .btn.hollow{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.72)}

        /* About band */
        .about-band{position:relative;min-height:420px}
        .about-band-bg::before{content:"";position:absolute;left:0;top:-80px;width:792px;height:190px;background:var(--deep);z-index:1}
        .about-band-bg{position:absolute;inset:0;background:var(--deep);background-image:linear-gradient(135deg,rgba(0,0,0,.05) 1px,transparent 1px);background-size:58px 38px}
        .chef{position:absolute;left:0;top:-160px;width:280px;height:520px;object-fit:cover;z-index:2;filter:drop-shadow(0 10px 24px rgba(0,0,0,.35))}
        .about-card{position:absolute;left:280px;width:920px;max-width:calc(100% - 16px);background:var(--terra);color:#fff;border-radius:10px;padding:22px 26px;z-index:3;display:flex;flex-direction:column;gap:10px}
        .about-card p,.about-card li,.about-card h3{text-shadow:1px 1px 2px rgba(0,0,0,0.2)}
        .eyebrow{font-size:10px;letter-spacing:.2em;text-transform:uppercase;opacity:.85}
        .about-head h3{font-size:20px;letter-spacing:.6px;font-weight:800;margin-top:4px}
        .about-kicker{font-size:12px;opacity:.9}
        .about-copy{font-size:12.5px;line-height:18px;opacity:.95}
        .about-stats{display:flex;gap:8px}
        .stat{flex:1;background:rgba(0,0,0,.18);border:1px solid rgba(255,255,255,.22);border-radius:8px;padding:8px 10px;text-align:center}
        .stat strong{display:block;font-size:16px;line-height:18px}
        .stat span{display:block;font-size:10px;opacity:.9}
        .about-points{margin:2px 0 0 16px;padding-left:0;font-size:12px;line-height:17px}
        .about-cta{margin-top:6px}

        /* Sections */
        .section{padding:28px 0}
        .container{max-width:720px;margin:0 auto;padding:0 22px}
        .section-title{margin-bottom:12px;font-size:20px;letter-spacing:.5px;color:#163026}
        .section-title.light{color:#fff}
        .ivory{background:var(--ivory)}
        .philosophy{background:var(--deep)}
        .closing blockquote{text-align:center;font-size:18px;font-weight:700;color:#163026}

        /* Awards */
        .awards{padding-top:26px;padding-bottom:24px}
        .awards-row{display:flex;flex-wrap:wrap;gap:14px;justify-content:center}
        .award-card{flex:1 1 calc(50% - 14px);max-width:calc(50% - 14px);display:flex;align-items:center;gap:12px;padding:14px;border-radius:12px;background:rgba(255,255,255,.66);border:1px solid rgba(30,57,42,.14);box-shadow:0 4px 12px rgba(0,0,0,.05);transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease}
        .award-card:hover{transform:translateY(-3px);box-shadow:0 12px 22px rgba(0,0,0,.08);border-color:rgba(30,57,42,.25)}
        .award-icon{width:38px;height:38px;border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--terra);background:linear-gradient(145deg,#ffffff,#e6e3de);border:1px solid rgba(30,57,42,.1);flex-shrink:0}
        .award-meta{flex:1 1 auto}
        .award-title{font:700 15px/20px Inter,ui-sans-serif;color:#143326}
        .award-issuer{font:500 12px/16px Inter,ui-sans-serif;color:#405e52;opacity:.95}
        .award-year{font-size:12px;padding:4px 8px;border-radius:6px;background:rgba(169,77,44,.12);color:#7b3a27;font-weight:600;flex-shrink:0}

        /* Philosophy */
        .phi-row{display:flex;flex-wrap:wrap;gap:14px;justify-content:center}
        .phi.card{flex:1 1 calc(33.333% - 14px);max-width:calc(33.333% - 14px);background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:16px;color:#eaecec;transition:transform .2s ease,background .2s ease}
        .phi.card:hover{background:rgba(255,255,255,.1);transform:translateY(-2px)}
        .phi.card h4{font-size:18px;color:#fff;margin-bottom:6px}
        .phi.card p{font-size:14px;line-height:1.55;opacity:.9}

        /* Signatures */
        .black-wrap{background:#000;padding:30px min(6vw,56px) 26px}
        .signature-title{text-align:center;margin:0 0 12px}
        .tags{display:flex;flex-wrap:wrap;gap:10px;margin:0;padding:0;list-style:none;justify-content:center}
        .tags li{padding:10px 16px;border-radius:20px;background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.16);font-size:13px;cursor:pointer;transition:background .2s ease,border-color .2s ease}
        .tags li:hover{background:var(--terra);border-color:var(--terra)}

        /* NEW: Media */
        .media .media-block{margin-top:18px}
        .media .media-block h4{margin:0 0 8px;color:#163026;font-size:16px}
        .video-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .embed{position:relative;padding-top:56.25%;border-radius:12px;overflow:hidden;background:#000;box-shadow:0 10px 22px rgba(0,0,0,.18)}
        .embed iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
        .ig-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .instagram-media{min-width:100%!important;max-width:100%!important;border-radius:12px!important;margin:0!important}

        /* NEW: Gallery */
        .gallery{background:var(--ivory)}
        .gallery-wrap{max-width:860px}
        .masonry{column-count:2;column-gap:12px}
        .tile{break-inside:avoid;margin:0 0 12px;border-radius:12px;overflow:hidden;box-shadow:0 8px 18px rgba(0,0,0,.12);cursor:zoom-in;background:#fff}
        .tile img{width:100%;height:auto;display:block}
        .lightbox{position:fixed;inset:0;background:rgba(0,0,0,.9);display:grid;place-items:center;z-index:50}
        .lightbox img{max-width:90vw;max-height:85vh;border-radius:10px;box-shadow:0 20px 60px rgba(0,0,0,.6)}
        .lightbox .close{position:absolute;top:16px;right:16px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fff;padding:8px 10px;border-radius:8px;cursor:pointer}
        /* ===== Gallery filter tabs ===== */
.gallery-tabs {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin: 8px 0 16px;
  flex-wrap: wrap;
}

.tab-btn {
  appearance: none;
  border: 1px solid rgba(30,57,42,.18);
  background: #ffffff;
  color: #163026;
  padding: 8px 14px;
  font-weight: 700;
  font-size: 13px;
  border-radius: 999px;
  cursor: pointer;
  transition: background .2s ease, color .2s ease, border-color .2s ease, transform .15s ease, box-shadow .15s ease;
}
.tab-btn:hover {
  border-color: rgba(30,57,42,.32);
  transform: translateY(-1px);
}
.tab-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(169,77,44,.35);
}
.tab-btn.active {
  background: var(--deep);
  color: #fff;
  border-color: transparent;
}

/* Slightly tighter masonry spacing on mobile if needed */
@media (max-width: 760px) {
  .gallery-tabs { gap: 6px; margin-bottom: 14px; }
}


        /* NEW: Articles */
        .articles-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        .article-card{display:flex;align-items:center;justify-content:space-between;padding:14px;border-radius:12px;background:#fff;border:1px solid rgba(30,57,42,.14);text-decoration:none;color:#163026;box-shadow:0 4px 12px rgba(0,0,0,.05);transition:transform .2s ease, box-shadow .2s ease}
        .article-card:hover{transform:translateY(-3px);box-shadow:0 12px 22px rgba(0,0,0,.08)}
        .article-meta strong{display:block;font-size:15px;line-height:20px}
        .article-meta span{font-size:12px;opacity:.8}
        .article-card .read{font-size:12px;padding:6px 10px;border-radius:6px;background:rgba(169,77,44,.1);color:#7b3a27;font-weight:600}

        /* NEW: Contact */
        .contact{background:var(--deep)}
        .contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:16px;color:#fff}
        .contact-grid label{display:flex;flex-direction:column;font-size:12px}
        .contact-grid label span{margin-bottom:6px;opacity:.9}
        .contact-grid input,.contact-grid textarea{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.2);border-radius:8px;padding:10px;color:#fff;font-size:14px}
        .contact-grid textarea{resize:vertical}
        .contact-grid .full{grid-column:1 / -1}
        .contact .section-title{color:#fff}

        /* Responsive */
        @media (max-width:1024px){
          .about-card{right:12px;left:12px;width:auto}
          .chef{left:12px;top:-100px}
          .container{max-width:680px}
        }

        /* MOBILE: chef sits over the second (right) hero image, header sticky, hero bottom img visible */
        @media (max-width:760px){
          .hero{flex-direction:column}
          .hero-left{min-height:600px} /* room for both TL + BL images */
          .hero-left-img img {
    width: ;
    height: 100%;
    object-fit: cover;
}
          .hero-left-img.tl{height:600px}
          .hero-left-img.bl{display:block;bottom:0;height:170px}
          .hero-right{min-height:260px}
          
          .hero { --tl-h: 280px; }              /* keep this in sync with .hero-left-img.tl */
  // .hero-left-img.tl { height: var(--tl-h); }
  .green-card {
    left: 16px;
    right: 16px;
    /* pull the card up by the height of the top image (minus your desired offset) */
    top: calc(46px - var(--tl-h));      /* puts it over the top image */
    border-radius: 12px;
  }
    
  .chef-hero-wrap{
    display:block;
    position:absolute;
    top:10px;              /* same visual position you had */
    right:80px;   
           /* push slightly off the right edge so crop feels intentional */
    height:350px;           /* controls visible height */
    z-index:4;
    pointer-events:none;    /* purely decorative */
    // transform-origin:right top;
    // transform: scale(2.5);  /* << replaces “width: 4000px” */
    /* tweak scale between 2.5–4 depending on the device look */
  }

  .chef-hero{
    display:block;
    height:100%;
    bottom:20px
    width:auto;             /* preserve aspect ratio */
    filter:drop-shadow(0 10px 22px rgba(0,0,0,.35));
  }

  /* Warm tint OVER the image (don’t use background on <img>) */
  .chef-hero-wrap::after{
    content:"";
    position:absolute;
    inset:0;
    background: rgba(169,77,44,.40); /* your terracotta tint */
    mix-blend-mode:multiply;         /* rich overlay; remove if too strong */
    pointer-events:none;
  }
/* ====== Speaking & Consulting readability fixes ====== */

/* Speaking (lives on .ivory already) — tighten contrast & spacing */
.speaking .section-title { color: #163026; }
.speaking .lead { color: #2b4a3f; font-size: 15px; line-height: 1.6; }
.speaking .bullets { margin: 6px 0 14px 20px; }
.speaking .bullets li { margin: 6px 0; line-height: 1.7; }
.speaking .btn { margin-top: 10px; }

/* Consulting section lives on a light surface; give it its own soft panel bg */
.consulting {
  /* warm neutral panel so it’s visually distinct from Speaking above */
  background: #efe8d8; /* tweak if you want closer to your brand */
}

/* OVERRIDES for the cards reused from .philosophy (which are white-on-dark by default) */
.consulting .phi.card {
  background: #ffffff;                /* readable on light surface */
  border: 1px solid rgba(30,57,42,.14);
  color: #163026;                     /* main text color */
  box-shadow: 0 8px 18px rgba(0,0,0,.06);
}
.consulting .phi.card h4 {
  color: #0f3a2e;                     /* strong heading */
  font-weight: 800;
}
.consulting .phi.card p {
  color: #2b4a3f;                     /* comfortable body contrast */
  opacity: .95;                       /* remove the heavy dimming used on dark */
  line-height: 1.6;
}
.consulting .phi.card:hover {
  transform: translateY(-2px);
  background: #fff;
  border-color: rgba(30,57,42,.25);
  box-shadow: 0 12px 22px rgba(0,0,0,.08);
}

/* readable buttons inside Speaking/Consulting */
.speaking .btn.terra,
.consulting .btn.terra {
  box-shadow: 0 2px 0 rgba(0,0,0,.08);
  margin-top:5px;
}
.speaking .btn.hollow,
.consulting .btn.hollow {
  color: #163026;
  border-color: rgba(30,57,42,.25);
}

/* layout breathing room for the consulting grid */
.consulting .phi-row { gap: 16px; }
.consulting .phi.card { padding: 18px; border-radius: 12px; }

/* mobile readability */
@media (max-width: 760px) {
  .speaking .lead { font-size: 15px; }
  .consulting .phi.card { padding: 16px; }
  .consulting .about-copy { font-size: 14px; line-height: 1.65; color: #2b4a3f; }
  .consulting .btn { width: 100%; }
}


  /* Hide the chef image from the About card on mobile so it doesn't clash */
  .about-band .chef { display:none; }
   .green-card-col { padding-bottom: 28px; }

  /* keep bottom-left hero image visible so the composition still works */
  .hero-left-img.bl { display:block; bottom:0; height:170px; }
          .about-card{top:0;}      /* keep card fully below */
          // .green-card{left:16px;right:16px;top:18px}
          .about-band{min-height:520px}

          .awards-row .award-card,
          .phi-row .phi.card{flex:1 1 100%;max-width:100%}
          .video-grid,.ig-grid{grid-template-columns:1fr}
          .masonry{column-count:1}
          .articles-grid{grid-template-columns:1fr}
          .contact-grid{grid-template-columns:1fr}
        }

        /* ===== Consulting readability (light skin) ===== */
.section.consulting { background: #f2ecdf; } /* subtle panel behind the cards */

.consulting .phi.card.phi--light {
  background: #ffffff !important;
  border: 1px solid rgba(30,57,42,.16) !important;
  color: #163026 !important;                 /* base text color */
  box-shadow: 0 8px 18px rgba(0,0,0,.06) !important;
}

.consulting .phi.card.phi--light h4 {
  color: #0f3a2e !important;                 /* strong heading */
  font-weight: 800;
  text-shadow: none !important;
}

.consulting .phi.card.phi--light p {
  color: #2b4a3f !important;                 /* comfortable body contrast */
  opacity: 1 !important;                     /* cancel any inherited dimming */
  text-shadow: none !important;
  line-height: 1.65;
}

/* spacing polish */
.consulting .phi-row { gap: 16px; }
.consulting .phi.card.phi--light { padding: 18px; border-radius: 12px; }
.consulting .about-copy { color: #2b4a3f; font-size: 14px; line-height: 1.65; }

/* mobile */
@media (max-width: 760px) {
  .consulting .phi.card.phi--light { padding: 16px; }
}
      `}</style>
    </div>
  );
}

/* ---------------- Gatsby <Head> for SEO ---------------- */
export const Head = () => {
  const title = SITE.title;
  const description = SITE.description;
  const url = SITE.url;
  const image = `${SITE.url}${SITE.ogImage}`;

  const graph = [jsonLd.person(), jsonLd.service(), jsonLd.faq()];

  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Chef Chalapathi Rao" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Preload hero image for faster LCP */}
      <link rel="preload" as="image" href={heroRight} fetchpriority="high" />

      {/* JSON-LD graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </>
  );
};

