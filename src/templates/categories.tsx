import React from 'react';
import _ from 'lodash';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card/post-card';
import SEO from '../components/seo';
import { TagPostsWrapper, TagPageHeading, TagName } from './templates.style';

const Categories = ({ pageContext, data }: any) => {
  const { category } = pageContext;
  const { edges, totalCount } = data.allMdx;
  let cat = _.capitalize(category.replace('/i', '').replace('/', ''))
  return (
    <Layout>
      <SEO title={cat} description={`A collection of ${totalCount} post related to ${cat}`} />

      <TagPostsWrapper>
        <TagPageHeading>
          <TagName>{cat}</TagName>
          {`A collection of ${totalCount} post`}
        </TagPageHeading>
        {edges.map(({ node }: any) => (
          <PostCard
            key={node.fields.slug}
            title={node.frontmatter.title}
            url={'/' + node.fields.slug}
            description={node.frontmatter.description || node.excerpt}
            date={node.frontmatter.date}
            tags={node.frontmatter.tags}
          />
        ))}
      </TagPostsWrapper>
    </Layout>
  );
};

export default Categories;

export const pageQuery = graphql`
  query($category: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { regex: $category } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD [<span>] MMMM [</span>]")
            title
            tags
            categories
            description
          }
        }
      }
    }
  }
`;
