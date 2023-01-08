import styles from "./Icons.module.scss"
import TasksIcon from "../TasksIcon/TasksIcon";
import React from "react";
import {ProjectForm} from "../../../ProjectForm/ProjectForm";
import LogoutButton from "./LogoutButton/LogoutButton";
import {AuthForm} from "../AuthForm/AuthForm";


export const Icons = () => {
    const accessToken = localStorage.getItem('accessToken');
    if(accessToken ) return <div className={styles.icons}><TasksIcon /> <ProjectForm accessToken={accessToken} /> <LogoutButton /> </div>
    if(!accessToken ) return <div className={styles.icons}> <AuthForm /> </div>
    return <></>
};

