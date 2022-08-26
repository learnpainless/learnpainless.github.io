import * as React from 'react';
import GatsbyImage from '../gatsby-image';
import {
  InstagramGridWrapper,
  PostImage,
  PostMeta,
  Overlay,
  MetaItem,
  MetaIcon,
  MetaText,
} from './instagram-grid.style';
import { IoIosHeart, IoIosChatbubbles } from 'react-icons/io';

type InstagramGridProps = {
  image: string;
  alt?: string;
  like: string;
  comment: string;
  url: string;
};

const InstagramGrid: React.FunctionComponent<InstagramGridProps> = ({
  image,
  alt,
  like,
  comment,
  url,
}) => {
  return (
    <InstagramGridWrapper>
      <a href={url} target={'_blank'}>
        <Overlay />
        <PostImage>
          <GatsbyImage src={image} alt={alt || 'instagram-image'} />
        </PostImage>
        <PostMeta>
          <MetaItem>
            <MetaIcon>
              <IoIosHeart size="23px" />
            </MetaIcon>
            <MetaText>{like}</MetaText>
          </MetaItem>

          <MetaItem>
            <MetaIcon>
              <IoIosChatbubbles size="23px" />
            </MetaIcon>
            <MetaText>{comment}</MetaText>
          </MetaItem>
        </PostMeta>
      </a>
    </InstagramGridWrapper>
  );
};

export default InstagramGrid;
