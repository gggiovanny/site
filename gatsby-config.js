/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Giovanny Baltazar',
    siteUrl: 'https://gggiovanny.github.io/site',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Giovanny Baltazar Site',
        short_name: 'Gio Site',
        start_url: '/',
        icon: 'src/images/favicon.png',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
