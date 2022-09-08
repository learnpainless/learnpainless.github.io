require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const { themeGet } = require('@styled-system/theme-get');
const urljoin = require('url-join');

module.exports = {
  siteMetadata: {
    title: `${process.env.TITLE}`,
    author: `pawneshwer`,
    about: `Software Developer and Web Developer`,
    tagLine: `${process.env.TAG_LINE}`,
    description: `${process.env.DESCRIPTION}`,
    siteUrl: `${process.env.SITE_URL}`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },

    {
      //resolve: `gatsby-transformer-remark`,
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        //plugins: [
          gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
              withWebp: true,
            },
          },
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
          {
            resolve: `gatsby-remark-mermaid`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
          
        ],
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    /* {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GOOGLE_ANALYTICS}`,
      },
    }, */
    {
      resolve: 'gatsby-plugin-feed-generator',
      options: {
        generator: `GatsbyJS`,
        rss: true, // Set to true to enable rss generation
        json: true, // Set to true to enable json feed generation
        siteQuery: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                author
              }
            }
          }
        `,
        feeds: [
          {
            name: 'rss',
            query: `
            {
              allMdx(
                sort: {order: DESC, fields: [frontmatter___date]},
                limit: 100,
                ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      date
                      title
                      description
                    }
                  }
                }
              }
            }
            `,
            normalize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return {
                  title: edge.node.frontmatter.title,
                  date: edge.node.frontmatter.date,
                  url: urljoin(site.siteMetadata.siteUrl, edge.node.fields.slug),
                  html: edge.node.html,
                  description: edge.node.frontmatter.description ? edge.node.frontmatter.description : edge.node.excerpt
                }
              })
            },
          },
        ],
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${process.env.TITLE}`,
        short_name: `LPL`,
        description: `${process.env.TAG_LINE}`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#378ad2`,
        display: `standalone`,
        icon: `content/assets/logo.png`,
        crossOrigin: `use-credentials`
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-typescript`,
    },
    {
      resolve: `gatsby-plugin-lodash`,
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: `${process.env.MAILCHIMP}`, // add your MC list endpoint here
      },
    },
    /*{
      resolve: `gatsby-source-instagram`,
      options: {
        username: `${process.env.INSTAGRAM}}`,
        access_token: 'EAADfLtnQYDoBAN76NENEBm5fOCVQisn97LljS3JbTBlofwmvagaEzZBCU9v1VjwbaEZAdOZCXk6YxD8Ciour2nEu7ah9NPhqN187ZB362l9ZB1pE45mjYWkjZBBZCOCsEcdgIM2ShbhCZCn9b5LStOsrfbyNZCCTBnpDHDLb3HfsaZBAZDZD',
        instagram_id: '3561788743',
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `3561788743`,
      },
    },*/
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:300,400,500,600,700`,
          `Fira Sans\:100,300,400,500,600`,
          
        ],
        display: 'swap'
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `${process.env.DISQUS_NAME}`
      }
    },
    {
      resolve: `gatsby-plugin-facebook-customer-chat`,
      options: {
        sdk: {
          appId: `${process.env.FACEBOOK_APP_ID}`,
          version: 'v7.0',
          xfbml: true
        },
        chat: {
          pageId: '483848361801521',
          loggedInGreeting: 'Hi! How can I help you?',
          loggedOutGreeting: 'Hi! How can I help you?',
        }
      },
    },
    /* {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `${process.env.ADSENSE_PUBLISHER}`
      },
    }, */
    /* `gatsby-plugin-client-side-redirect`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    }, */
    /* {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array */
  ],
};
