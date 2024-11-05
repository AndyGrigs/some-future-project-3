import React from 'react';
import cls from './PromoBanner.module.scss'
import {classNames} from 'shared/helpers/classNames/classNames'
import {PROMO_TEXT} from 'shared/data/data'

export interface PromoBannerProps {
className?: string;
}

export const PromoBanner = ({className}:PromoBannerProps)=>  {
  return (
    <div className={classNames(cls.PromoBanner, {}, [className || ''])}>
      {PROMO_TEXT}
    </div>
  )
};