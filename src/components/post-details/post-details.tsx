import * as React from 'react';
import GatsbyImage from '../gatsby-image';
import { Link } from 'gatsby';
import _ from 'lodash';
import { format } from 'date-fns';
import { MDXRenderer } from "gatsby-plugin-mdx"
import {
  PostDetailsWrapper,
  PostTitle,
  PostDate,
  PostPreview,
  PostDescriptionWrapper,
  PostDescription,
  PostTags,
} from './post-details.style';
import { CommentCount } from 'gatsby-plugin-disqus';

type PostDetailsProps = {
  title: string;
  date?: string;
  preview?: any;
  description: any;
  tags?: [];
  className?: string;
  imagePosition?: 'left' | 'top';
  authors?: [];
  timeToRead?: string;
  disqusConfig: any
};

const PostDetails: React.FunctionComponent<PostDetailsProps> = ({
  title,
  date,
  preview,
  description,
  tags,
  className,
  imagePosition,
  authors,
  timeToRead,
  disqusConfig,
  ...props
}) => {
  const addClass: string[] = ['post_details'];
  const fDate = new Date(date);
  // 2018-08-20
  const datetime = format(fDate, 'yyyy-MM-dd');
  // 20 AUG 2018
  const displayDatetime = format(fDate, 'dd LLL yyyy');

  if (imagePosition == 'left') {
    addClass.push('image_left');
  }

  if (className) {
    addClass.push(className);
  }

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
    placeholderColors[Math.floor(Math.random() * placeholderColors.length)];

  return (
    <PostDetailsWrapper {...props} className={addClass.join(' ')}>
      {imagePosition == 'left' ? (
        <>
          {preview == null ? null : (
            <PostPreview className="post_preview">
              <GatsbyImage src={preview} alt={title} backgroundColor={setColor} />
            </PostPreview>
          )}
        </>
      ) : (
        ''
      )}

      {imagePosition == 'top' ? (
        <>
          <PostTitle>{title}</PostTitle>

          <span className="post-card-byline-date">
            {/*<PostDate>{date}</PostDate>*/}
            <time dateTime={datetime}>{displayDatetime}</time>{' '}
            <span className="bull">&bull;</span> {timeToRead} min read
            </span>
          <CommentCount config={disqusConfig} placeholder={'Fetching Comments ...'} />
        </>
      ) : (
        ''
      )}

      {imagePosition == 'top' ? (
        <>
          {preview == null ? null : (
            <PostPreview className="post_preview">
              <GatsbyImage src={preview} alt={title} backgroundColor={setColor}/>
            </PostPreview>
          )}
        </>
      ) : (
        ''
      )}
      <PostDescriptionWrapper className="post_des_wrapper">
        {imagePosition == 'left' ? (
          <>
            <PostTitle>{title}</PostTitle>
            <PostDate>{date}</PostDate>
          </>
        ) : (
            ''
          )}
        <PostDescription className="post_des">
          <MDXRenderer>{description}</MDXRenderer>
        </PostDescription>
        <script type='text/javascript' src='https://storage.ko-fi.com/cdn/widget/Widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Buy Me a Coffee', '#29abe0', 'H2H0FYBSF');kofiwidget2.draw();</script> 
        {tags == null ? null : (
          <PostTags>
            {tags.map((tag, index) => (
              <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                {`#${tag}`}
              </Link>
            ))}
          </PostTags>
        )}
      </PostDescriptionWrapper>
    </PostDetailsWrapper>
  );
};

PostDetails.defaultProps = {
  imagePosition: 'top',
};

export default PostDetails;
