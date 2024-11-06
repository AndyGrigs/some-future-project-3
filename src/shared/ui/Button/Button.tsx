import React, { type ButtonHTMLAttributes, type FC } from 'react';
import cls from './Button.module.scss';
import { classNames } from 'shared/helpers/classNames/classNames';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = "outline",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={
        classNames(cls.Button, {}, [
          className ?? '',
          theme ? cls[theme] : '',
        ]) || ''
      }
      {...otherProps}
    >
      {children}
    </button>
  );
};
