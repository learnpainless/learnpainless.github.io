import React from 'react';
import { graphql, Link } from 'gatsby';
import _ from 'lodash';
import urljoin from 'url-join';
import { Disqus } from 'gatsby-plugin-disqus';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostCard from '../components/post-card/post-card';
import PostDetails from '../components/post-details/post-details';
import Sidebar from '../containers/sidebar';
import {
  BlogPostDetailsWrapper,
  RelatedPostWrapper,
  RelatedPostItems,
  RelatedPostTitle,
  RelatedPostItem,
  BlogPostFooter,
  PostShare,
  PostTags,
  BlogPostComment,
  BlogDetailsContent,
} from './templates.style';
import { Share } from '../containers/share/Share';

const BlogPostTemplate = (props: any) => {
  const post = props.data.mdx;
  const { edges } = props.data.allMdx;
  const title = post.frontmatter.title;
  const slug = post.fields.slug;
  const siteUrl = props.data.site.siteMetadata.siteUrl;
  const shareUrl = urljoin(siteUrl, slug);

  const disqusConfig = {
    url: `${urljoin(process.env.SITE_URL, slug)}`,
    title: title,
  };

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        postUrl={urljoin(process.env.SITE_URL, slug)}
        slug={slug}
        datePublished={post.frontmatter.date}
        dateModified={post.frontmatter.date}
        thumbnail={urljoin(siteUrl, post.frontmatter.image?.publicURL != null ? post.frontmatter.image.publicURL : '')}
      />
      <BlogPostDetailsWrapper>
        <BlogDetailsContent>
          <PostDetails
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            preview={
              post.frontmatter.image == null
                ? null
                : post.frontmatter.image.childImageSharp.gatsbyImageData
            }
            description={post.body}
            //authors={post.frontmatter.author}
            timeToRead={post.timeToRead}
            disqusConfig={disqusConfig}
          />

          <BlogPostFooter>
            {post.frontmatter.tags == null ? null : (
              <PostTags className="post_tags">
                {post.frontmatter.tags.map((tag: string, index: number) => (
                  <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                    {`#${tag}`}
                  </Link>
                ))}
              </PostTags>
            )}
            <PostShare>
              <span>Share This:</span>
              <Share url={shareUrl} title={title} image={urljoin(siteUrl, post.frontmatter.image?.publicURL != null ? post.frontmatter.image.publicURL : '')} />

            </PostShare>
          </BlogPostFooter>

          <BlogPostComment>
            <Disqus config={disqusConfig} />
          </BlogPostComment>
        </BlogDetailsContent>
        <Sidebar />
      </BlogPostDetailsWrapper>

      {edges.length !== 0 && (
        <RelatedPostWrapper>
          <RelatedPostTitle>Related Posts</RelatedPostTitle>
          <RelatedPostItems>
            {edges.map(({ node }: any) => {
              // Random Placeholder Color
              const placeholderColors = [
                '#55efc4',
                '#81ecec',
                '#74b9ff',
                '#a29bfe',
                '#ffeaa7',
                '#fab1a0',
                '#e17055',
                '#0984e3',
                '#badc58',
                '#c7ecee',
              ];
              const setColor =
                placeholderColors[
                  Math.floor(Math.random() * placeholderColors.length)
                ];
              return (
                <RelatedPostItem key={node.fields.slug}>
                  <PostCard
                    title={node.frontmatter.title || node.fields.slug}
                    url={'/' + node.fields.slug}
                    image={
                      node.frontmatter.image == null
                        ? null
                        : node.frontmatter.image.childImageSharp.gatsbyImageData
                    }
                    tags={node.frontmatter.tags}
                    placeholderBG={setColor}
                  />
                </RelatedPostItem>
              );
            })}
          </RelatedPostItems>
        </RelatedPostWrapper>
      )}
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $category: [String!]) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
        slug
      }
      timeToRead
      frontmatter {
        title
        date(formatString: "DD MMM, YYYY")
        description
        tags
        categories
        image {
          publicURL
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    allMdx(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { categories: { in: $category } }
        fields: { slug: { ne: $slug } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            tags
            categories
            image {
              publicURL
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;
