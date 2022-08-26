import React, { useContext } from 'react';
import Drawer from '../drawer/drawer';
import { DrawerContext } from '../drawer/drawer-context';
import Menu from './menu';
import {
  MobileMenuWrapper,
  DrawerContentWrapper,
  DrawerHead,
  DrawerLogo,
  DrawerClose,
  HamburgerIcon,
} from './navbar.style';
import { FiX } from 'react-icons/fi';
import { SiteNavLogo } from './SiteNavLogo';

type MobileMenuProps = {
  items: any;
};

const MobileMenu: React.FunctionComponent<MobileMenuProps> = ({
  items,
  ...props
}) => {
  const { state, dispatch }: any = useContext(DrawerContext);

  // Toggle drawer
  const toggleDrawer = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <MobileMenuWrapper {...props}>
      <Drawer
        width="285px"
        placement="left"
        drawerHandler={
          <HamburgerIcon>
            <span />
            <span />
            <span />
          </HamburgerIcon>
        }
        open={state.isOpen}
        toggleHandler={toggleDrawer}
      >
        <DrawerContentWrapper>
          <DrawerHead>
            <DrawerLogo>
              <SiteNavLogo />
            </DrawerLogo>
            <DrawerClose onClick={toggleDrawer}>
              <FiX />
            </DrawerClose>
          </DrawerHead>
          <Menu items={items} className="mobile-menu" />
        </DrawerContentWrapper>
      </Drawer>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
