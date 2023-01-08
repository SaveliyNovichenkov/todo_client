import React, {FC, PropsWithChildren, ReactNode} from 'react';
import {useAuth} from "../hooks/useAuth";
import {Navigate, useLocation, useRevalidator} from "react-router-dom"
import { Loader } from 'app/components/ui-components/Loader/Loader';


export interface CheckRoleProps {
    children: ReactNode
    isOnlyUser: boolean
}

const CheckRole = ({children, isOnlyUser}:CheckRoleProps) => {
    const {isLoading} = useAuth()
    const location = useLocation()

      const accessToken = localStorage.getItem('accessToken');
        if(isLoading) return  <Loader />

        if(accessToken) return <>{children}</>

        if(isOnlyUser) location.pathname !== '/' && <Navigate to="/" />

        return null
    };

export default CheckRole