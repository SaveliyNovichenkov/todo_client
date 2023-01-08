import React, {Ref, useRef} from "react";


export const useSort = () => {
    const wrapperRef = useRef<HTMLDivElement>(null) as any

    function insertAfter(elem: any, refElem: any ) {
        return refElem?.current?.parentNode?.insertBefore(elem, refElem?.current?.nextSibling)
    }

    function mySort(sortType: "status" | "priority" | null) {
        for (let i = 0; i < wrapperRef?.current?.children?.length; i++) {
            for (let j = i; j < wrapperRef?.current?.children?.length; j++) {
                if (+wrapperRef?.current?.children[i]?.getAttribute(sortType) > +wrapperRef?.current?.children[j]?.getAttribute(sortType)) {
                    let replaceNode = wrapperRef?.current?.replaceChild(wrapperRef?.current?.children[j], wrapperRef?.current?.children[i])
                    insertAfter(replaceNode, wrapperRef?.current?.children[i])
                }
            }
        }
    }

    return {
        wrapperRef,
        mySort
    }
}

