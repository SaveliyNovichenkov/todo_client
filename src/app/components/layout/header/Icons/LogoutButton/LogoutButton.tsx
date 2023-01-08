import React from 'react';
import {logout} from "../../../../../store/services/auth/auth.service";
import styles from './LogoutButton.module.scss'
import {dispatch} from "jest-circus/build/state";
import {useDispatch} from "react-redux";
import {Logout} from "../../../../../store/auth/actionAuthCreator";

const LogoutButton = () => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(Logout())
        logout()
    }
    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={handleLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="38px" viewBox="0 0 42 42" version="1.1">
                    <g id="surface1">
                        <path fill="#D3D3D3" d="M 19.6875 39.375 L 2.625 39.375 L 2.625 2.625 L 19.6875 2.625 C 20.410156 2.625 21 2.035156 21 1.3125 C 21 0.589844 20.410156 0 19.6875 0 L 1.3125 0 C 0.589844 0 0 0.589844 0 1.3125 L 0 40.6875 C 0 41.410156 0.589844 42 1.3125 42 L 19.6875 42 C 20.410156 42 21 41.410156 21 40.6875 C 21 39.964844 20.410156 39.375 19.6875 39.375 Z M 19.6875 39.375 "/>
                        <path fill="#D3D3D3" d="M 41.621094 20.082031 L 32.5625 10.898438 C 32.050781 10.378906 31.21875 10.378906 30.707031 10.898438 C 30.195312 11.414062 30.195312 12.253906 30.707031 12.773438 L 37.53125 19.695312 L 10.503906 19.695312 C 9.78125 19.695312 9.191406 20.289062 9.191406 21.019531 C 9.191406 21.753906 9.78125 22.347656 10.503906 22.347656 L 37.53125 22.347656 L 30.707031 29.269531 C 30.195312 29.789062 30.195312 30.628906 30.707031 31.144531 C 31.21875 31.664062 32.050781 31.664062 32.5625 31.144531 L 41.617188 21.957031 C 42.125 21.449219 42.128906 20.59375 41.621094 20.082031 Z M 41.621094 20.082031 "/>
                    </g>
                </svg>

            </button>
        </div>
    );
};

export default LogoutButton;