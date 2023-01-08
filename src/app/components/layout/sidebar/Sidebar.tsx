import React, {memo} from 'react';
import styles from './Sidebar.module.scss'
import { SidebarProps } from './Sidebar.props';
import cn from "classnames";
import {Menu} from "./Menu/Menu";
import {Loader} from "../../ui-components/Loader/Loader";
import {SidebarProjectsContainer} from "./SidebarProjects/SidebarProjectFormСontainer/SidebarProjectsContainer";


const SidebarInner = ({projects, isLoading, error, className, accessToken, ...props}:SidebarProps) => {
    return (
        <>
            {isLoading && <Loader></Loader>}
            <div className={cn(styles.sidebar, className)} {...props}>
                {error && <>error</>}
                <Menu />
                {projects ? (
                    projects.map(project => (
                        <SidebarProjectsContainer accessToken={accessToken} project={project} key={project.id} />
                    ))
                ) : <>Create project</>}

            </div>
        </>

    );
}

export const Sidebar = memo(SidebarInner)