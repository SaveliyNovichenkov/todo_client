import {ChangeEvent, useState} from "react"
import { useDebounce } from "./useDebounce"



export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const debounceSearch = useDebounce(searchTerm, 500)

    const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }
    {/*
     const {data, isSuccess} = projectApi.useGetVideoBySearchTermQuery(debounceSearch, {
        skip: !debounceSearch,
        selectFromResult: ({data, ...props}) => ({
            data: data?.slice(0.6),
            ...props
        })
    })

    return {
        handleSearch, data, isSuccess, searchTerm
    }

    */}



}