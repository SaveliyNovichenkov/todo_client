import React from 'react';
import './global.scss';
import Layout from "./app/components/layout/Layout";
import {Routes, Route, Link, Navigate} from "react-router-dom"
import Main from "./pages/Main";
import NotFoundPage from "./pages/404";
import dayjs from "dayjs";
import CheckRole from "./app/providers/CheckRole";
import WithLayout from "./app/components/layout/withLayout/withLayout";
import ProjectPageContainer from "./pages/project[id]/ProjectPageContainer";
require('dayjs/locale/ru')

function App() {
    dayjs.locale('ru')
  return (
          <div className="wrapper">
                  <Routes>
                      <Route path="/" element={<WithLayout />}>
                          <Route path="/my-projects" element={
                              <CheckRole isOnlyUser={true}>
                                  <Main />
                              </ CheckRole>}/>
                          <Route path={"/my-projects/:id"} element={<ProjectPageContainer />}/>
                      </Route>
                      <Route path={"*"} element={<NotFoundPage />} />
                  </Routes>
          </div>


  );
}

export default App;
