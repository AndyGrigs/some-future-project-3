import React from 'react';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider/ui/theme/useTheme';
import { Theme } from 'app/providers/ThemeProvider/ui/theme/ThemeContext';
import { classNames } from 'shared/helpers/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import LightIcon from 'shared/assets/icons/sun _.svg';
import DarkIcon from 'shared/assets/icons/moon_.svg';

export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toogleTheme } = useTheme();
  return (
    <>
      <Button
        theme={ThemeButton.CLEAR}
        className={classNames(cls.ThemeSwitcher, {}, [className ?? ''])}
        onClick={toogleTheme}
      >
        {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
      </Button>
    </>
  );
}