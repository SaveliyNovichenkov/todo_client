import React from 'react';
import {ProjectItemProps} from "./ProjectItem.props";
import styles from './ProjectItem.module.scss'


const ProjectItem = ({name, description}:ProjectItemProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>{name}</div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};

export default ProjectItem;