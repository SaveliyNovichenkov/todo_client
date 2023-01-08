import {useDispatch} from "react-redux";
import React, {memo, useCallback, useRef, useState} from "react";
import {DeleteProject, UpdateProject} from "../../../../../store/project/actionProjectCreator";
import {SidebarProject} from "../SidebarProjects";
import {ContainerProps} from "./ContainerProps";
import {SidebarProjectsForm} from "../SidebarProjectForm/SidebarProjectsForm";


const SidebarProjectsContainerInner = ({project, accessToken}: ContainerProps) => {
    const dispatch = useDispatch()
    const formRef = useRef<HTMLFormElement>(null)
    const inputName = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>
    const inputDescription = useRef<HTMLTextAreaElement>(null) as React.MutableRefObject<HTMLTextAreaElement>
    const [isEdit, setEdit] = useState<boolean>(false)
    const [name, setName] = useState<string>(project.name)
    const [description, setDescription] = useState<string>(project.description)
    const callback = (data:any) => {
        console.log("Inside callback after fetchIdProject")
    }
    let data: any = {
        id: project.id,
        callback
    }

    let dataForDelete: any = {
        id: project.id,
        accessToken: accessToken
    }
    const handleDelete = useCallback(() => {
        dispatch(DeleteProject(dataForDelete))
    }, [dataForDelete, dispatch])
    if (isEdit) {
        const onSubmit = (data: any) => {
             dispatch(UpdateProject(data))
             formRef?.current?.reset()
        }

        const handleUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            let data = {
                name: inputName.current.value,
                description: inputDescription.current.value,
                id: project.id,
                accessToken: accessToken
            }
            setName(inputName.current.value)
            setDescription(inputDescription.current.value)
            onSubmit(data)
        }

        const handleClick = (event: any) => {
            if (event.target && inputName?.current?.contains(event.target)) {
                setName(" ")
            }if (event.target && !inputDescription?.current?.contains(event.target)) {
                setDescription(" ")
            }
        }
        const updateAndReturnProject = (event: React.MouseEvent<HTMLButtonElement>) => {
            handleUpdate(event)
            setEdit(!isEdit)
        }
        return <SidebarProjectsForm isEdit={isEdit} onSubmit={onSubmit} setEdit={setEdit} description={description} name={name}
                                    inputDescription={inputDescription} formRef={formRef} inputName={inputName} handleClick={handleClick} updateAndReturnProject={updateAndReturnProject}/>
 }

    return  <SidebarProject id={project.id} name={name} setEdit={setEdit} description={description} isEdit={isEdit} handleDelete={handleDelete} />
}

export const SidebarProjectsContainer = memo(SidebarProjectsContainerInner)