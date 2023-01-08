import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useDispatch} from "react-redux";
import {ProjectByIdRequest} from "../../app/store/project/actionProjectCreator";
import {toNumber} from "@vue/shared";
import {useTypedSelector} from "../../app/hooks/useTypedSelector";
import ProjectPage from './ProjectPage';
import { ProjectById } from 'app/store/project/projectTypes';

const ProjectPageContainer = () => {
    const {id} = useParams()
    const {project} = useTypedSelector(state => state.projects)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(ProjectByIdRequest(toNumber(id)))
    }, [dispatch])

  return (
      <ProjectPage project={project} />
  )
};

export default ProjectPageContainer;