import React from 'react';
import {useStaticQuery, graphql, Link} from 'gatsby';
import _ from 'lodash';
import FeaturePost from '../../components/feature-post/feature-post';
import {
  SidebarWrapper,
  SidebarWidget,
  WidgetTitle,
  TagItem,
} from './style';
import SocialAccounts from '../../components/social-accounts/social-accounts'
import {Vehicle} from '../../components/ads/vehicle';
import AdBlock from "../../components/ads/adsense_ad";

type SidebarProps = {};

const Sidebar: React.FunctionComponent<SidebarProps> = () => {

  const Data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 5
        filter: { frontmatter: { tags: { eq: "featured" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 300)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD [<span>] MMM [</span>]")
              title
              description
              tags
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    width: 90
                    height: 90
                  )
                }
              }
            }
          }
        }
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
        }
      }
      
    }
  `);

  const Posts = Data.allMdx.edges;
  const Tags = Data.allMdx.group;
  //const InstagramPhotos = Data.allInstaNode.edges;

  return (
    <SidebarWrapper>
      <SidebarWidget>
        <WidgetTitle>Try our Flutter App</WidgetTitle>
        <Vehicle/>
      </SidebarWidget>
      <SidebarWidget>
        <WidgetTitle>Featured Posts</WidgetTitle>
        {Posts.map(({node}: any) => {
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
            <FeaturePost
              key={node.fields.slug}
              title={title}
              image={
                node.frontmatter.image == null
                  ? null
                  : node.frontmatter.image.childImageSharp.gatsbyImageData
              }
              url={'/' + node.fields.slug}
              tags={node.frontmatter.tags}
              placeholderBG={setColor}
            />
          );
        })}
      </SidebarWidget>

      <SidebarWidget>
        <AdBlock client={'ca-pub-7943122633795545'} slot={'1910589993'} />
      </SidebarWidget>
      <SidebarWidget>
        <WidgetTitle>Tags</WidgetTitle>
        {Tags.map((tag: any) => (
          <TagItem key={tag.fieldValue}>
            <span>#</span>
            <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} <span>({tag.totalCount})</span>
            </Link>
          </TagItem>
        ))}
      </SidebarWidget>

      <SidebarWidget>
        <WidgetTitle>FOLLOW US</WidgetTitle>
        <div className={"fb-page"} data-href="https://www.facebook.com/LearnPainLess" data-tabs="" data-width=""
             data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
             data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/LearnPainLess" className={"fb-xfbml-parse-ignore"}><a
            href="https://www.facebook.com/LearnPainLess">Learn Pain Less</a></blockquote>
        </div>
      </SidebarWidget>
      <SidebarWidget>
        <a href="https://twitter.com/LearnPainLess?ref_src=twsrc%5Etfw" className={"twitter-follow-button"}
           data-show-count="false">Follow @LearnPainLess</a>
      </SidebarWidget>
      <SidebarWidget>
        <div className={"g-ytsubscribe"} data-channelid="UCglYchjdo11zTelZVY4QUjA" data-layout="full"
             data-count="default"></div>
      </SidebarWidget>

      <WidgetTitle>JOIN SOCIAL ACCOUNTS</WidgetTitle>
      <SocialAccounts/>
    </SidebarWrapper>
  );
};

export default Sidebar;
