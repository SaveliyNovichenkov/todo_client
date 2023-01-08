import React from 'react';
import Layout from "../Layout";
import {Outlet} from "react-router-dom";
import {Header} from "../header/Header";

const WithLayout = () => {
    const accessToken = localStorage.getItem('accessToken');
    const id = localStorage.getItem('id');
    if (accessToken && id) {

        return (
            <Layout id={id} accessToken={accessToken} title={"Главная"}>
                <Outlet />
            </Layout>
        )
    }
    if(!accessToken) {
        return <Header />
        //Redirect
    }
    return <></>
}

export default WithLayout;