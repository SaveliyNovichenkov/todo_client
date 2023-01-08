import React, {useState} from 'react';
import styles from './SortButton.module.scss'
import {useOutsideClickListener} from "../../../app/hooks/useOutside";
import {SortButtonProps} from "./SortButton.props";

const SortButton = ({setSort}: SortButtonProps) => {

    const {ref, isShow, setIsShow} = useOutsideClickListener(false)

    return (
        <div className={styles.wrapper}>
            <button onClick={() => setIsShow(!isShow)} className={styles.sort__button}>
                <svg fill="#D3D3D3" height="32px" width="32px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.00 490.00" >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_iconCarrier"> <g> <polygon points="85.877,154.014 85.877,428.309 131.706,428.309 131.706,154.014 180.497,221.213 217.584,194.27 108.792,44.46 0,194.27 37.087,221.213 "/> <polygon points="404.13,335.988 404.13,61.691 358.301,61.691 358.301,335.99 309.503,268.787 272.416,295.73 381.216,445.54 490,295.715 452.913,268.802 "/> </g> </g>
                </svg>
                {!isShow && <span className={styles.sort__span}>Сортировать</span>}
            </button>
            {isShow &&
                <div ref={ref} className={styles.buttons_wrapper}>
                    <button onClick={() => setSort("priority")} className={styles.popup__button}>По приоритету</button>
                    <button onClick={() => setSort("status")} className={styles.popup__button}>По статусу</button>
                </div>
            }
        </div>
    );
};

export default SortButton;