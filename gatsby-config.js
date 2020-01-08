module.exports = {
  siteMetadata: {
    title: `Eric SarragaLugo`,
    description: `Hi, I'm Eric! Are you looking for a team member you can count on? I love to delve into complex topics and thrive when working to overcome challenges. Check out my portfolio and send me a message!`,
    author: `Eric SarragaLugo`,
    // avatar: ``,
    siteUrl: `https://ericlugo.me/`,
    // twitter: ``,
    // codepen: ``,
    // github: ``,
  },
  plugins: [
    // `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    // "gatsby-plugin-robots-txt",
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: "gatsby-plugin-robots-txt",
    //   options: {
    //     host: "https://ericlugo.me/",
    //     sitemap: "https://ericlugo.me/sitemap.xml",
    //     policy: [{ userAgent: "*", allow: "/" }],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
