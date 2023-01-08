import {ReactNode} from "react";


export interface LayoutProps {
    accessToken: string
    id: string
    title: string
    children: ReactNode
}