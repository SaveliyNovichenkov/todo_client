import React, {useRef} from 'react';
import styles from './TodoForm.module.scss'
import {SubmitHandler} from "react-hook-form";
import {useDispatch} from "react-redux";
import {TodoDto} from "../../store/todo/todoTypes";
import {TodoFormProps} from "./TodoForm.props";
import {CreateTodoRequest} from "../../store/project/actionProjectCreator";


const TodoForm = ({ projectId}:TodoFormProps) => {
    const accessToken = localStorage.getItem('accessToken');
    const dispatch = useDispatch()
    const formRef = useRef<HTMLFormElement>(null)
    const nameInputRef = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>
    const descriptionInputRef = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>
    const titleInputRef = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>
    const dateCompletedInputRef = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>
    const numericInputRef = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>
    const filePathInputRef = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>
    const statusSelectRef = useRef<HTMLSelectElement>(null)  as React.MutableRefObject<HTMLSelectElement>
    const prioritySelectRef = useRef<HTMLSelectElement>(null) as React.MutableRefObject<HTMLSelectElement>
    

    const onSubmit: SubmitHandler<TodoDto> = async (data) => {
        await dispatch(CreateTodoRequest(data))
        await formRef?.current?.reset()
    }

    const handleCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        let todoData: any = {
            description: descriptionInputRef?.current?.value,
            name: nameInputRef?.current?.value,
            accessToken: accessToken,
            projectId: projectId,
            title: titleInputRef?.current?.value,
            status: statusSelectRef?.current?.value,
            priority: prioritySelectRef?.current?.value,
            dateCompleted: Number(dateCompletedInputRef?.current?.value),
            numeric: Number(numericInputRef?.current?.value),
            filePath: filePathInputRef?.current?.value,
        }
        onSubmit(todoData)
    }

    return (
        <div>
            <form className={styles.form}
                  onSubmit={() => (onSubmit)}
                  ref={formRef}>
                <div className={styles.form__item}>
                    <label className={styles.form__label}>Поле ввода названия задачи</label>
                    <input
                        alt="Поле ввода названия задачи"
                        className={styles.form__input}
                        type='text'
                        ref={nameInputRef}
                    />
                </div>
                <div className={styles.form__item}>
                    <label className={styles.form__label}>Поле ввода описания задачи</label>
                    <input
                        alt="Поле ввода описания задачи"
                        className={styles.form__input}
                        type='text'
                        ref={descriptionInputRef}
                    />
                </div>
                <div className={styles.form__item}>
                    <label className={styles.form__label}>Поле ввода даты завершения задачи</label>
                    <input
                        className={styles.form__input}
                        alt="Поле ввода даты завершения задачи"
                        type="number"
                        ref={dateCompletedInputRef}
                    />
                </div>
                <div className={styles.form__item}>
                    <label className={styles.form__label}>Поле ввода заголовка задачи</label>
                    <input
                        className={styles.form__input}
                        alt="Поле ввода заголовка задачи"
                        type="text"
                        ref={titleInputRef}
                    />
                </div>
                <div className={styles.form__item}>
                    <label className={styles.form__label}>Поле ввода номера задачи</label>
                    <input
                        className={styles.form__input}
                        alt="Поле ввода номера задачи"
                        type="number"
                        ref={numericInputRef}
                    />
                </div>
                <div className={styles.form__item}>
                    <label className={styles.form__label}>Поле ввода названия файла</label>
                    <input
                        className={styles.form__input}
                        alt="Поле ввода названия файла"
                        type="text"
                        ref={filePathInputRef}
                    />
                </div>
                <div className={styles.form__item}>
                    <label className={styles.form__label}>Статус разработки</label>
                    <select ref={statusSelectRef}>
                        <option disabled>Выбирите статус разработки</option>
                        <option value={'queue'}>в очереди</option>
                        <option value={'development'}>в работе</option>
                        <option value={'done'}>выполнено</option>
                    </select>
                </div>
                <div className={styles.form__item}>
                    <label className={styles.form__label}>Приоритет разработки</label>
                    <select ref={prioritySelectRef}>
                        <option disabled>Выбирите приоритет разработки</option>
                        <option value={'low'}>маленький</option>
                        <option value={'medium'}>средний</option>
                        <option value={'maximum'}>высокий</option>
                    </select>
                </div>
                <button
                    type={"submit"}
                    className={styles.form__button}
                    onClick={handleCreate}
                >
                    Создать задачу
                </button>
            </form>
        </div>
    );
};


export default TodoForm;