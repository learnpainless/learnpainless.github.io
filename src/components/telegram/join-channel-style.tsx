import styled from 'styled-components';

export const JoinChannelWrapper = styled.div`
  text-align: center;
  float: none;
  margin-top: 62px;
`;

export const JoinChannelLink = styled.a`
  color: #ffffff;
  background-color: #0088cc;
  border-color: #006da4;
  border-radius: 45px;
  border-width: 4px;
  display: inline-block!important;
  text-align: center;
  text-decoration: none!important;
  box-sizing: content-box!important;
  transition: all .1s;
  word-break: break-word;
  touch-action: manipulation;
  float: none;
  margin: 10px 0 10px 0;

  path {
    fill: #ffffff;
    transition: all .1s;
  }

  &:hover {
    color: #0088cc;
    background-color: #EFEFEF;
    border-color: #006da4;

    path {
      fill: #0088cc;
    }
  }

  
`;

export const JoinChannelSpan = styled.span`
  padding: 9px 28px;
  font-size: 21px;
  line-height: 32px;
  position: relative;
  display: block!important;
  text-decoration: none!important;
  box-sizing: content-box!important;

  svg {
    margin: 0 .5em 0 0!important;
  }
`;