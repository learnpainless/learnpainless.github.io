import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Button from '../../../components/button/button';
import PostCardModern from '../../../components/post-card-modern/post-card-modern';
import BlogPostsWrapper, { PostRow, PostGrid, SeeMore } from './style';

type PostsProps = {};

const Posts: React.FunctionComponent<PostsProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {frontmatter: {draft: {ne: true}}}
        limit: 6
      ) {
        totalCount
        edges {
          node {
            excerpt(pruneLength: 200)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD [<span>] MMM [</span>]")
              title
              description
              tags
              draft
              image {
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
  `);

  const Posts = Data.allMdx.edges;

  return (
    <BlogPostsWrapper>
      <PostRow>
        {Posts.map(({ node }: any) => {
          const title = node.frontmatter.title || node.fields.slug;
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
            <PostGrid key={node.fields.slug}>
              <PostCardModern
                key={node.fields.slug}
                title={title}
                image={
                  node.frontmatter.image == null
                    ? null
                    : node.frontmatter.image.childImageSharp.gatsbyImageData
                }
                url={'/' + node.fields.slug}
                description={node.excerpt}
                date={node.frontmatter.date}
                tags={node.frontmatter.tags}
                placeholderBG={setColor}
              />
            </PostGrid>
          );
        })}
      </PostRow>
      <SeeMore>
        <Link to="page/1">
          <Button title="See more" type="submit" />
        </Link>
      </SeeMore>
    </BlogPostsWrapper>
  );
};

export default Posts;
