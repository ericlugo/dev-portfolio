module.exports = {
  siteMetadata: {
    title: `Eric SarragaLugo`,
    description: `Hi, I'm Eric! Are you looking for a team member you can count on? I love to delve into complex topics and thrive when working to overcome challenges. Check out my portfolio and send me a message!`,
    author: `Eric SarragaLugo`,
    // avatar: ``,
    siteUrl: `https://www.ericlugo.dev/`,
    // twitter: ``,
    // codepen: ``,
    // github: ``,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.ericlugo.dev/",
        sitemap: "https://www.ericlugo.dev/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images/`,
    //   },
    // },
  ],
}
