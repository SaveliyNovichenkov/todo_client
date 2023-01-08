export interface SidebarProjectFormProps {
    onSubmit: (data: any) => void
    formRef:  React.RefObject<HTMLFormElement>
    handleClick: (event: any) => void
    inputName:  React.MutableRefObject<HTMLInputElement>
    inputDescription:  React.MutableRefObject<HTMLTextAreaElement>
    name: string
    description: string
    updateAndReturnProject: (event: React.MouseEvent<HTMLButtonElement>) => void
    setEdit:  React.Dispatch<React.SetStateAction<boolean>>
    isEdit: boolean

}