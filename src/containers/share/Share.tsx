import React from 'react';
import {
  EmailIcon,
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  TwitterShareButton,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  TelegramShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TumblrShareButton,
  TumblrShareCount,
  TwitterIcon,
  ViberIcon,
  PinterestShareButton,
  PinterestShareCount,
  WhatsappIcon,
  RedditShareButton,
  RedditShareCount,
  EmailShareButton,
  ViberShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton
} from "react-share";
import './Share.css';

export interface ShareProps {
  url: string;
  title: string;
  image?: string;
  excerpt?: string;
}

export const Share: React.FC<ShareProps> = ({title, url, image, excerpt}) => {
  
  return (
    <div className="Share__container">
      <div className="Share__some-network">
        <FacebookShareButton
          url={url}
          quote={excerpt}
          className="Share__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <div>
          <FacebookShareCount url={url} className="Share__some-network__share-count">
            {count => count}
          </FacebookShareCount>
        </div>
      </div>

      <div className="Share__some-network">
        <FacebookMessengerShareButton
          url={url}
          appId="521270401588372"
          className="Share__some-network__share-button"
        >
          <FacebookMessengerIcon size={32} round />
        </FacebookMessengerShareButton>
      </div>

      <div className="Share__some-network">
        <TwitterShareButton
          url={url}
          title={title}
          className="Share__some-network__share-button"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <div className="Share__some-network__share-count">&nbsp;</div>
      </div>

      <div className="Share__some-network">
        <TelegramShareButton
          url={url}
          title={title}
          className="Share__some-network__share-button"
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>

        <div className="Share__some-network__share-count">&nbsp;</div>
      </div>

      <div className="Share__some-network">
        <WhatsappShareButton
          url={url}
          title={title}
          separator=":: "
          className="Share__some-network__share-button"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <div className="Share__some-network__share-count">&nbsp;</div>
      </div>

      <div className="Share__some-network">
        <LinkedinShareButton url={url} className="Share__some-network__share-button">
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>

      <div className="Share__some-network">
        <PinterestShareButton
          url={url}
          media={`${image}`}
          className="Share__some-network__share-button"
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>

        <div>
          <PinterestShareCount url={url} className="Share__some-network__share-count" />
        </div>
      </div>

      <div className="Share__some-network">
        <RedditShareButton
          url={url}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className="Share__some-network__share-button"
        >
          <RedditIcon size={32} round />
        </RedditShareButton>

        <div>
          <RedditShareCount url={url} className="Share__some-network__share-count" />
        </div>
      </div>

      <div className="Share__some-network">
        <TumblrShareButton
          url={url}
          title={title}
          className="Share__some-network__share-button"
        >
          <TumblrIcon size={32} round />
        </TumblrShareButton>

        <div>
          <TumblrShareCount url={url} className="Share__some-network__share-count" />
        </div>
      </div>

      <div className="Share__some-network">
        <EmailShareButton
          url={url}
          subject={title}
          body="body"
          className="Share__some-network__share-button"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
      <div className="Share__some-network">
        <ViberShareButton
          url={url}
          title={title}
          className="Share__some-network__share-button"
        >
          <ViberIcon size={32} round />
        </ViberShareButton>
      </div>

      <div className="Share__some-network">
        <LineShareButton
          url={url}
          title={title}
          className="Share__some-network__share-button"
        >
          <LineIcon size={32} round />
        </LineShareButton>
      </div>

      <div className="Share__some-network">
        <PocketShareButton
          url={url}
          title={title}
          className="Share__some-network__share-button"
        >
          <PocketIcon size={32} round />
        </PocketShareButton>
      </div>

      <div className="Share__some-network">
        <InstapaperShareButton
          url={url}
          title={title}
          className="Share__some-network__share-button"
        >
          <InstapaperIcon size={32} round />
        </InstapaperShareButton>
      </div>
    </div>
  );
}