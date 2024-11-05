import React from 'react';

import cl from './Navbar.module.scss';

import { classNames } from 'shared/helpers/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { PromoBanner } from 'shared/ui/PromoBanner/PromoBanner';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cl.Navbar, {}, [className ?? ''])}>
      <PromoBanner />
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        About
      </AppLink>
      <AppLink theme={AppLinkTheme.PRIMARY} to="/">
        Home
      </AppLink>
    </div>
  );
};
