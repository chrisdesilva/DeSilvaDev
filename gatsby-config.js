require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.desilvadev.com",
    title: "DeSilvaDev",
    description:
      "Videos and blog posts aimed at helping developers with a focus on the front end.",
    author: "@desilvadev",
    siteLanguage: "en",
    logo: "src/images/favicon.png",
    favicon: "src/images/favicon.png",
    keywords:
      "tutorials, software development, front end development, react, css, javascript, blog posts, videos",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: [`UCsqk14rHyDlGnn5SrP8bN3A`],
        apiKey: process.env.YOUTUBE_KEY,
        maxVideos: 24,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-root-import",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`outfit`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DeSilvaDev`,
        short_name: `DeSilvaDev`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/favicon_invert.png`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
