import React from 'react';
import styles from './Header.module.scss'
import cn from 'classnames';
import {HeaderProps} from "./Header.props";
import {Icons} from "./Icons/Icons";
import Search from "./Search/Search";

export const Header = ({className, ...props}:HeaderProps) => {
    return (
        <header className={cn(className, styles.header)} {...props}>
            <a className={styles.logo} href={"#"}>My Todo</a>
            <Search />
            <Icons />
        </header>
    );
};

