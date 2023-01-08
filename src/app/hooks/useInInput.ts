import React, { useEffect, useRef, useState} from "react";

type TypeOut = {
    firstInputRef: any
    secondInputRef: any
    inInput: string
    inInputSecond: string
    handleClickOutside: (event: any) => void
    handleClickOutsideSecond: (event: any) => void
    setInInput: React.Dispatch<React.SetStateAction<string>>
    setInInputSecond: React.Dispatch<React.SetStateAction<string>>
    setDefaultValue: React.Dispatch<React.SetStateAction<string>>
    setDefaultValueSecond: React.Dispatch<React.SetStateAction<string>>
}

export const useInInput = ():TypeOut => {
    const [inInput, setInInput] = useState("")
    const [defaultValue, setDefaultValue] = useState("")

    const [inInputSecond, setInInputSecond] = useState("")
    const [defaultValueSecond, setDefaultValueSecond] = useState("")


    const firstInputRef = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>
    const secondInputRef = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>

    const handleClickOutsideSecond = (event: any) => {
        if (event.target && secondInputRef?.current?.contains(event.target)) {
            setInInputSecond("")
        }if (event.target && !secondInputRef?.current?.contains(event.target)) {
            setInInputSecond(defaultValueSecond)
        }
    }

    const handleClickOutside = (event: any) => {
        if (event.target && firstInputRef?.current?.contains(event.target)) {
            setInInput("")
        }if (event.target && !firstInputRef?.current?.contains(event.target)) {
            setInInput(defaultValue)
        }
    }
    useEffect(() => {
        addEventListener('click', handleClickOutside)
        addEventListener('click', handleClickOutsideSecond)
    })

    return {firstInputRef, secondInputRef,
        inInput, handleClickOutside,
        handleClickOutsideSecond,
        setInInput, setDefaultValue,
        inInputSecond,
        setDefaultValueSecond,
        setInInputSecond
    }
}