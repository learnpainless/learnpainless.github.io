import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import GatsbyImage from '../gatsby-image';
import {
  FeaturedPostWrapper,
  PostPreview,
  PostDetails,
  PostTitle,
  PostMeta,
  PostTags,
} from './feature-post.style';

interface FeaturedPostProps {
  image?: any;
  title: string;
  url: string;
  tags?: [];
  className?: string;
  placeholderBG?: string;
}

const FeaturedPost: React.FunctionComponent<FeaturedPostProps> = ({
  image,
  title,
  url,
  tags,
  className,
  placeholderBG,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['featured_post'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <FeaturedPostWrapper className={addAllClasses.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
            <GatsbyImage src={image} alt="post preview" backgroundColor={placeholderBG}/>
          </Link>
        </PostPreview>
      )}

      <PostDetails>
        <PostTitle className="post_title">
          <Link to={url}>{title}</Link>
        </PostTitle>
        <PostMeta>
          {tags == null ? null : (
            <PostTags className="post_tags">
              {tags.slice(0, 2).map((tag: string, index: number) => (
                <Link
                  key={index}
                  to={`/tags/${_.kebabCase(tag)}/`}
                >{`#${tag}`}</Link>
              ))}
            </PostTags>
          )}
        </PostMeta>
      </PostDetails>
    </FeaturedPostWrapper>
  );
};

export default FeaturedPost;
