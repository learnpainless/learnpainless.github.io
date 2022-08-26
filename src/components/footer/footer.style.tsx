import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const inner = css`
  margin: 0 auto;
  width: 100%;
  @media (min-width: 990px) {
    max-width: 900px;
  }
  @media (min-width: 1100px) {
    max-width: 1050px;
  }
  @media (min-width: 1250px) {
    max-width: 1170px;
  }
`;

export const FooterWrapper = styled.footer`
  position: relative;
  overflow: hidden;
  color: ${themeGet('colors.textColor', '#292929')};
  font-size: ${themeGet('fontSizes.3', '15')}px;
  padding: 30px 15px;
  text-align: center;
  border-top: 1px solid #f3f3f3;
  @media (max-width: 575px) {
    padding: 22px 15px;
  }

  a {
    color: ${themeGet('colors.textColor', '#292929')};
    font-size: ${themeGet('fontSizes.3', '15')}px;
    transition: 0.15s ease-in-out;
    &:hover {
      color: ${themeGet('colors.primary', '#D10068')};
    }
  }
`;

export const SiteFooterNav = styled.nav`
  display: flex;
  ul {
    list-style-position: inside;
    font-weight: 400;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    float: left;
    display: inline-block;
    height: 34px;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  a {
    position: relative;
    font-weight: 600;
    display: block;
    line-height: 34px;
    padding: 0 5px;
    margin: 0 0 0 10px;
    transition: color .17s ease;
  }

  a:before {
    content: '';
    position: absolute;
    top: 11px;
    left: -11px;
    display: block;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 100%;
  }
  
  a:first-of-type:before {
    display: none;
  }
  @media (max-width: 650px) {
    margin-top: 16px;
    a:first-of-type {
      margin-left: 0;
    }
    a {
      line-height: inherit;
    }
    ul {
      text-align: center;
    }
    ul li {
      float: none;
      height: auto;
    }
  }
`;

export const SiteFooterContent = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: ${themeGet('colors.textColor', '#292929')};
  a {
    font-weight: 600;
    transition: color .17s ease;
    color: ${themeGet('colors.textColor', '#292929')};
  }
  a:hover {
    color: ${themeGet('colors.primary', '#e44d26')};
    text-decoration: none;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;