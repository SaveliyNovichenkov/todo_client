import React, {useEffect, useMemo} from 'react';
import styles from './Layout.module.scss'
import {LayoutProps} from "./Layout.props";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {Sidebar} from "./sidebar/Sidebar";
import {ProjectsRequest} from "../../store/project/actionProjectCreator";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {LoginSuccess} from "../../store/auth/actionAuthCreator";

const Layout = ({title, children, accessToken, id}:LayoutProps) => {
    const {projects, isLoading, error } = useTypedSelector(state => state.projects)
    const dispatch = useDispatch()

        let data: any = {
            accessToken: accessToken,
            id: id
        }

        useMemo(() => {
            dispatch(ProjectsRequest(data))
            let autoLoginData = {values: {accessToken: accessToken, id: id}}
            dispatch(LoginSuccess(autoLoginData.values))
        }, [])
        return (
            <>
                <header>
                    <title className={styles.title}>{title}</title>
                </header>
                <main className={styles.main}>
                    <section className={styles.wrapper}>
                        <Header className={styles.header}/>
                        <Sidebar accessToken={accessToken} projects={projects} isLoading={isLoading} error={error} className={styles.sidebar}/>
                        <div className={styles.body}>
                            {children}
                        </div>
                        <Footer className={styles.footer}/>
                    </section>
                </main>
            </>
        );

}

export default Layout;