const path = require(`path`)
const _ = require('lodash')
const moment = require('moment')
const { createFilePath } = require(`gatsby-source-filesystem`)
const express = require(`express`)
const { google } = require('googleapis')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const key = process.env.PRIVATE_KEY.replace(new RegExp('\\\\n', '\g'), '\n')
//console.log(key)

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static(`public`))
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({ fromPath: '/archive.html', toPath: '/archive', isPermanent: true });
  createRedirect({ fromPath: '/page/about-us', toPath: '/about', isPermanent: true });
  createRedirect({ fromPath: '/page/contact-us', toPath: '/contact', isPermanent: true });
  createRedirect({ fromPath: '/page/privacy-policy', toPath: '/privacy-policy', isPermanent: true });
  createRedirect({ fromPath: '/android', toPath: '/categories/android/', isPermanent: true });
  createRedirect({ fromPath: '/java', toPath: '/categories/java/', isPermanent: true });
  createRedirect({ fromPath: '/php', toPath: '/categories/php/', isPermanent: true });

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const blogList = path.resolve(`./src/templates/blog-list.tsx`)
  const tagTemplate = path.resolve(`./src/templates/tags.tsx`)
  const categoryTemplate = path.resolve(`./src/templates/categories.tsx`)
  const archiveTemplate = path.resolve(`./src/templates/archive.tsx`)

  return graphql(
    `
      {
        allMdx(
          filter: {frontmatter: {draft: {ne: true}}}
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                date
                categories
                draft
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
          tag: post.node.frontmatter.tags,
        },
      })
    })

    // Create blog post list pages
    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/page/1` : `/page/${i + 1}`,
        component: blogList,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    // Create archive page
    //let reversePosts = archiveResult.data.allMarkdownRemark.edges;
    const mmap = posts.map(post => {
      return {
        date: moment(post.node.frontmatter.date).format('MMM DD, YYYY'),
        url: '/' + post.node.fields.slug,
        title: post.node.frontmatter.title,
      };
    })

    let gps = _.groupBy(mmap, data => moment(data.date, 'MMM DD, YYYY').year())
    let yearGroup = {};
    _.each(gps, (val, key) => {
      yearGroup[key] = _.groupBy(val, (data) => {
        return moment(data.date, 'MMM DD, YYYY').month()
      });
    })

    //console.log(yearGroup);
    createPage({
      path: `/archive/`,
      component: archiveTemplate,
      context: {
        yearGroup,
      }
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    //console.log(tags)

    // Make tag pages
    //console.log(tags)
    tags.forEach(value => {
      let tag = `/${value}/i`
      tag = tag.replaceAll('+', '\\+')
      createPage({
        path: `/tags/${_.kebabCase(value)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })

    // Category pages:
    let categories = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, 'node.frontmatter.categories')) {
        categories = categories.concat(edge.node.frontmatter.categories)
      }
    })
    // Eliminate duplicate tags
    categories = _.uniq(categories)

    // Make tag pages
    categories.forEach(value => {
      let category = `/${value}/i`
      category = category.replaceAll('+', '\\+')
      createPage({
        path: `/categories/${_.kebabCase(value)}/`,
        component: categoryTemplate,
        context: {
          category,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions


  if (node.internal.type === `Mdx`) {
    const { slug, categories } = node.frontmatter;

    if (typeof slug !== 'undefined') {
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      })
    } else {
      const { name } = getNode(node.parent);
      let catSlug = '';
      if (categories) {
        catSlug = _.join(categories.map(cat => cat.toLowerCase()), '/');
      }
      let newSlug = `${catSlug}/${name}/`;
      createNodeField({
        node,
        name: 'slug',
        value: newSlug,
      })
    }
  }
}

// for React-Hot-Loader: react-🔥-dom patch is not detected
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    }
  }
}
