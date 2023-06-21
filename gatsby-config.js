module.exports = {
  siteMetadata: {
    title: "Mina Hussain Portfolio",
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`, // location of project content files
      },
    },
    {
      resolve: "@mkitio/gatsby-theme-password-protect",
      options: {
        partialMatching: true,
        pagePaths: ["/resume"],
        password: "aNtQV9?Pyh", // delete or `undefined` to disable password protection
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
};
