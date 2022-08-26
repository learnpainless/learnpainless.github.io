import * as React from 'react';
import {
  JoinChannelWrapper,
  JoinChannelLink,
  JoinChannelSpan
} from './join-channel-style';

import {Telegram} from './telegram';

const JoinChannelButton = () => {
  return(
    <JoinChannelWrapper>
      <JoinChannelLink href={"https://t.me/joinchat/AAAAAFVJwAkg9nBsIAf8tg"}>
        <JoinChannelSpan>
          <Telegram />
          {"Join LearnPainLess on Telegram"}
        </JoinChannelSpan>
      </JoinChannelLink>
      
    </JoinChannelWrapper>
  );
}

export default JoinChannelButton;