import React, { useState } from "react";
import cls from "./Sidebar.module.scss"
import { classNames } from "shared/helpers/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher/LangSwitcher";

export interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={toggle}>toggle</button>
            <div className="switchers">
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
};