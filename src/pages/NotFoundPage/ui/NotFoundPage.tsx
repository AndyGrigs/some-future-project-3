import React from 'react';
import { classNames } from 'shared/helpers/classNames/classNames';
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next';


export interface NotFoundPageProps {
    className?: string;
}


export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className ?? ''])}>
            <h1>{t('The page is not found!')}</h1>
        </div>
    )
};