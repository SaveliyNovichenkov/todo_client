import React from 'react';
import {TodoItemProps} from "./TodoItem.props";
import styles from './TodoItem.module.scss'

const TodoItem = ({todo}:TodoItemProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>{todo.name}</div>
            <div className={styles.description}>{todo.description}</div>
            <div className={styles.dateCompleted}>{todo.dateCompleted}</div>
            <div className={styles.priority}>{todo.priority} приоритет</div>
            <div className={styles.status}>{todo.status} статус</div>
        </div>
    );
};

export default TodoItem;