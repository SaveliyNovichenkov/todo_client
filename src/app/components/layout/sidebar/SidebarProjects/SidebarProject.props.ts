import {ProjectInterface} from "../../../../interfaces/project.interface";


export interface SidebarProjectProps {
   id: number
   name: string
   description: string
   handleDelete: () => void
   setEdit:  React.Dispatch<React.SetStateAction<boolean>>
   isEdit: boolean

}