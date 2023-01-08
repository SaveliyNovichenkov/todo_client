import {ReactElement} from "react";

export type TypeRoles = {
    isOnlyUser?: boolean
}

export type PageAuth<T = {}> = ReactElement<T> & TypeRoles

export type TypeComponentAuthFields = { Component: TypeRoles }