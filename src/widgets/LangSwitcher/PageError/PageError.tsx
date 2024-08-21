import React from 'react';
import cls from './PageError.module.scss'
import { classNames } from 'shared/helpers/classNames/classNames';

export interface PageErrorProps {
className?: string;
}

const handleReload =() =>{
    window.location.reload()
}

export const PageError = ({className}:PageErrorProps)=>  {
  return (
    <div className={classNames(cls.PageError, {}, [className || ''])}>
            <p>An error occurred. Please try again.</p>
            <button onClick={handleReload}>Reload Page</button>
    </div>
  )
};
