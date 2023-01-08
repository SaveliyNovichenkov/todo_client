import React, {useMemo, useState} from 'react';
import TodoItem from "./TodoItem/TodoItem";
import { ProjectPageProps} from "./Project.props";
import ProjectItem from "./ProjectItem/ProjectItem";
import styles from './ProjectPage.module.scss'
import CreateTodoButton from "./CreateTodoButton/CreateTodoButton";
import SortButton from "./SortButton/SortButton";
import {sortTodosByPriorityFunction, sortTodosByStatusFunction} from "../../app/helpers/sortTransfrom";


const ProjectPage = ({project}:ProjectPageProps) => {
    const [isSort, setSort] = useState<"status" | "priority" | null>(null)

    let copyData = project.todos

    useMemo(() => {
        if(isSort == "status") {
            let sortTodosStatus = sortTodosByStatusFunction([...copyData])
            copyData = sortTodosStatus
        }
        if(isSort == "priority") {
            let sortTodosPriority = sortTodosByPriorityFunction([...copyData])
            copyData = sortTodosPriority
        }
        return
    }, [isSort])



    return (
        <div className={styles.wrapper}>
            <div className={styles.item__wrapper}>
                <ProjectItem name={project?.name} description={project?.description} />
                <CreateTodoButton projectId={project.id} />
                <SortButton setSort={setSort}/>
                <div className={styles.todos}>
                    {copyData.map(todo => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;

