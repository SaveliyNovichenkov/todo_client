import { ProjectByToken } from 'app/store/project/projectTypes';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    projects:  ProjectByToken[]
    isLoading: boolean
    error: null | string
    accessToken: string
}