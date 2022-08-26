import React from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import ScrollToTop from 'react-scroll-up';
import Navbar from './navbar/navbar';
import Newsletter from './newsletter/newsletter';
import Footer from './footer/footer';
import ScrollUpButton from './scroll-up-button/scroll-up-button';
import ResetCss from './reset-css';
import { theme } from '../theme';
//import InstagramShowcase from '../containers/instagram-showcase';
import JoinChannelButton from './telegram/join-channel';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetCss />
        
        <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
          <Navbar />
        </Sticky>

        {children}

        <JoinChannelButton />

        {/*<InstagramShowcase />*/}
        <Newsletter />
        <Footer />
        <ScrollToTop
          showUnder={300}
          duration={700}
          easing="easeInOutCubic"
          style={{ bottom: 30, right: 'auto', left: 20 }}
        >
          <ScrollUpButton />
        </ScrollToTop>
        
      </>
    </ThemeProvider>
  );
};

export default Layout;
