// gatsby-config.js
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.chefchalapathirao.com", // TODO: update to your final domain
    title:
      "Chef Chalapathi Rao — TEDx Speaker, MasterChef India – Telugu Judge & South Indian Cuisine Expert",
    description:
      "Official portfolio of Chef Chalapathi Rao: TEDx speaker, MasterChef India – Telugu judge, South Indian cuisine expert. Menu consulting, masterclasses, collaborations, and media.",
    twitter: "@chefchalapathirao",
    image: "/share/chalapathi.png"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sitemap",
      options: { output: "/" }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Chef Chalapathi Rao — Portfolio",
        short_name: "ChefCR",
        start_url: "/",
        background_color: "#0F3A2E",
        theme_color: "#A94D2C",
        display: "standalone",
        icon: "src/assets/logoChef.png"
      }
    }
  ]
};
