import React, {useCallback, useEffect, useRef} from 'react';
import {ProjectFromProps} from "./ProjectFrom.props";
import styles from "./ProjectForm.module.scss"
import {SubmitHandler} from "react-hook-form";
import {useDispatch} from "react-redux";
import {CreateProjectRequest} from "../../store/project/actionProjectCreator";
import {ProjectDto} from "../../store/project/projectTypes";
import {useInInput} from "../../hooks/useInInput";
import {useOutsideClickListener} from "../../hooks/useOutside";



export const ProjectForm = ({accessToken}: ProjectFromProps) => {
    const {ref, isShow, setIsShow} = useOutsideClickListener(false)
    const dispatch = useDispatch()
    const formRef = useRef<HTMLFormElement>(null)
        const {
            firstInputRef, secondInputRef,
            inInput, handleClickOutsideSecond, handleClickOutside,
            setInInput, setDefaultValue, setDefaultValueSecond, inInputSecond, setInInputSecond
        } = useInInput()

        useEffect(() => {
            setDefaultValue("Введите название проекта")
            setInInput("Введите название проекта")
            setDefaultValueSecond("Введите описание проекта")
            setInInputSecond("Введите описание проекта")
        }, [])


        const onSubmit: SubmitHandler<ProjectDto> =  useCallback((data) => {
            dispatch(CreateProjectRequest(data))
            formRef?.current?.reset()
        }, [formRef?.current, dispatch])


        const handleCreate = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            let data: any = {
                description: secondInputRef?.current?.value,
                name: firstInputRef?.current?.value,
                accessToken: accessToken
            }
            onSubmit(data)
        }
        return (
            <div className={styles.wrapper} ref={ref}>
                <button  className={styles.button__icon} onClick={() => setIsShow(!isShow)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 42 42" version="1.1">
                        <g id="surface1">
                            <path fill="#D3D3D3"  d="M 35.855469 35.855469 C 44.046875 27.664062 44.046875 14.335938 35.855469 6.144531 C 27.664062 -2.046875 14.335938 -2.046875 6.144531 6.144531 C -2.046875 14.335938 -2.046875 27.664062 6.144531 35.855469 C 14.335938 44.046875 27.664062 44.046875 35.855469 35.855469 Z M 7.625 7.625 C 15.003906 0.25 26.996094 0.25 34.375 7.625 C 41.75 15.003906 41.75 26.996094 34.375 34.375 C 26.996094 41.75 15.003906 41.75 7.625 34.375 C 0.25 26.996094 0.257812 15.003906 7.625 7.625 Z M 7.625 7.625 "/>
                            <path fill="#D3D3D3" d="M 21 28.867188 C 21.292969 28.867188 21.546875 28.746094 21.746094 28.558594 C 21.933594 28.367188 22.054688 28.101562 22.054688 27.8125 L 22.054688 22.046875 L 27.820312 22.046875 C 28.113281 22.046875 28.367188 21.925781 28.566406 21.738281 C 28.753906 21.546875 28.875 21.28125 28.875 20.992188 C 28.875 20.410156 28.402344 19.9375 27.828125 19.945312 L 22.0625 19.945312 L 22.0625 14.179688 C 22.0625 13.597656 21.589844 13.125 21.015625 13.132812 C 20.433594 13.132812 19.964844 13.605469 19.972656 14.179688 L 19.972656 19.945312 L 14.207031 19.945312 C 13.621094 19.945312 13.152344 20.417969 13.160156 20.992188 C 13.160156 21.574219 13.632812 22.046875 14.207031 22.035156 L 19.972656 22.035156 L 19.972656 27.804688 C 19.945312 28.394531 20.417969 28.867188 21 28.867188 Z M 21 28.867188 "/>
                        </g>
                    </svg>
                </button>
                {isShow && <form className={styles.form}
                      onSubmit={() => (onSubmit)}
                      ref={formRef}>
                    <input
                        className={styles.form__input}
                        type='text'
                        ref={firstInputRef}
                        onClick={() => handleClickOutside(event)}
                        placeholder={inInput}

                    />
                    <input
                        onClick={() => handleClickOutsideSecond(event)}
                        className={styles.form__input}
                        placeholder={inInputSecond}
                        type='text'
                        ref={secondInputRef}
                    />
                    <button

                        type={"submit"}
                        className={styles.form__button}
                        onClick={handleCreate}
                    >
                        Создать проект
                    </button>
                </form>}
            </div>
        );
    }


