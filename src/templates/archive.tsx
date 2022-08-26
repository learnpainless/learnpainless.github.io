import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import momemt from 'moment';
import _ from 'lodash';
import { TagPostsWrapper, TagPageHeading, TagName, Heading2, Heading3 } from './templates.style';

const Archive = (props: { pageContext: { yearGroup: any; }; }) => {
  const yearGroup = props.pageContext.yearGroup ? props.pageContext.yearGroup : {};
  const elements: JSX.Element[] = [];

  _.each(yearGroup, (val, key) => {
    elements.push(<Heading2>{key.toString()}</Heading2>)
    _.each(val, (cVal, cKey) => {
      elements.push(<Heading3>{momemt().month(cKey).format('MMMM')}</Heading3>)
      let lis = cVal.map((element: { [x: string]: React.ReactNode; }) => (<li><span>{element['date']}</span> » <a href={element['url']}>{element['title']}</a></li>))

      elements.push(<ul>{lis}</ul>)
    })
  })

  return (
    <Layout>
      <SEO title={'Archive'} description={`Yearly list of all posts in this site.`} slug={`archive`} />

      <TagPostsWrapper>
        <TagPageHeading>
          <TagName>{'Archive'}</TagName>
          {`Yearly list of all posts in this site.`}
        </TagPageHeading>
        <div >
            {
              elements.map(item => (
                item
              ))
            }
          </div>
      </TagPostsWrapper>
    </Layout>
  );
};

export default Archive;

