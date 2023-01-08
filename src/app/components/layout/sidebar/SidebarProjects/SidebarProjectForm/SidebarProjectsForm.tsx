import React, {memo} from 'react';
import styles from "../SidebarProjects.module.scss";
import {SidebarProjectFormProps} from "./SidebarProjectFormProps";

const SidebarProjectsFormInner = ({onSubmit, formRef, handleClick, inputName, name, description, inputDescription, updateAndReturnProject, setEdit, isEdit}:SidebarProjectFormProps) => {
    return (
        <form onSubmit={() => (onSubmit)} ref={formRef} className={styles.form}>
            <input
                className={styles.input__form__name}
                onClick={() => handleClick(inputName.current)}
                ref={inputName}
                placeholder={name}
            />
            <textarea
                className={styles.input__form_desc}
                onClick={() => handleClick(inputName.current)}
                ref={inputDescription}
                placeholder={description}
            />
            <button
                onClick={updateAndReturnProject}
                className={styles.button__form}>Изменить</button>
            <button
                onClick={() => setEdit(!isEdit)}
                className={styles.button__form__cancel}>Отменить</button>
        </form>
    )
};

export const SidebarProjectsForm = memo(SidebarProjectsFormInner)