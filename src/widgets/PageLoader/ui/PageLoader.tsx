import React from 'react';
import cls from './PageLoader.module.scss'
import { classNames } from 'shared/helpers/classNames/classNames';

export interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    console.log(cls.PageLoader)
    return (
        <div className={classNames(cls.PageLoader, {}, [className ?? ''])}>

        </div>
    )
};