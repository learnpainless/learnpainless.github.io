import React, { useState } from 'react';
import { Link } from 'gatsby';
import { IoIosSearch, IoIosClose } from 'react-icons/io';
import { DrawerProvider } from '../drawer/drawer-context';
import Menu from './menu';
import MobileMenu from './mobile-menu';
import SearchContainer from '../../containers/search/search';
import HeaderWrapper, {
  NavbarWrapper,
  Logo,
  MenuWrapper,
  NavSearchButton,
  NavSearchWrapper,
  SearchCloseButton,
  NavSearchFromWrapper,
} from './navbar.style';
import { SiteNavLogo } from './SiteNavLogo';

type NavbarProps = {
  className?: string;
};

const MenuItems = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Android',
    url: '/categories/android/',
  },
  {
    label: 'Java',
    url: '/categories/java/',
  },
  {
    label: 'PHP',
    url: '/categories/php/',
  },
  {
    label: 'Flutter',
    url: '/categories/flutter/',
  },
  {
    label: 'Archive',
    url: '/archive/',
  },
];

const Navbar: React.FunctionComponent<NavbarProps> = ({
  className,
  ...props
}) => {
  const [state, setState] = useState({
    toggle: false,
    search: '',
  });

  const toggleHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    });
  };

  // Add all classs to an array
  const addAllClasses = ['header'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <HeaderWrapper className={addAllClasses.join(' ')} {...props}>
      <NavbarWrapper className="navbar">
        <DrawerProvider>
          <MobileMenu items={MenuItems} />
        </DrawerProvider>
        <Logo>
          <SiteNavLogo />
        </Logo>
        <MenuWrapper>
          <Menu items={MenuItems} />
        </MenuWrapper>
        <NavSearchButton
          type="button"
          aria-label="search"
          onClick={toggleHandle}
        >
          <IoIosSearch size="23px" />
        </NavSearchButton>
      </NavbarWrapper>

      <NavSearchWrapper className={state.toggle === true ? 'expand' : ''}>
        <NavSearchFromWrapper>
          <SearchContainer />
          <SearchCloseButton
            type="submit"
            aria-label="close"
            onClick={toggleHandle}
          >
            <IoIosClose />
          </SearchCloseButton>
        </NavSearchFromWrapper>
      </NavSearchWrapper>
    </HeaderWrapper>
  );
};

export default Navbar;
