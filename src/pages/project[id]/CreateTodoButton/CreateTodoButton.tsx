import React, {useState} from 'react';
import {CreateTodoButtonProps} from "./CreateTodoButton.props";
import styles from './CreateTodoButton.module.scss'
import {useOutsideClickListener} from "../../../app/hooks/useOutside";
import TodoForm from 'app/components/TodoForm/TodoForm';

const CreateTodoButton = ({projectId,}:CreateTodoButtonProps) => {
    const {ref, isShow, setIsShow} = useOutsideClickListener(false)
    return (
        <div ref={ref}>
            <button onClick={() => setIsShow(prevState => !prevState)} className={styles.button}>+ Добавит задачу</button>
            <div className={styles.form}>{isShow && <TodoForm projectId={projectId}/>}</div>
        </div>
    );
};

export default CreateTodoButton;