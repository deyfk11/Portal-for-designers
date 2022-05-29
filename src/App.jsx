import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import AddProject from 'pages/AddProject/AddProject';
import AdminPanel from 'pages/AdminPanel/AdminPanel';
import EditProject from 'pages/EditProject/EditProject';
import Login from 'pages/Login/Login';
import MainPage from 'pages/MainPage/MainPage';
import Profile from 'pages/Profile/Profile';
import ProjectPage from 'pages/ProjectPage/ProjectPage';
import Registration from 'pages/Registration/Registration';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<Registration />} path="/registration" />
      <Route element={<PublicRoute />}>
        <Route element={<Profile />} path="/profile/:id" />
        <Route element={<AddProject />} path="/addProject" />
        <Route element={<MainPage />} path="/" />
        <Route element={<ProjectPage />} path="/project/:id" />
        <Route element={<EditProject />} path="/editProject/:id" />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route element={<AdminPanel />} path="/adminPanel" />
      </Route>
      <Route element={<MainPage />} path="*" />
    </Routes>
    <Footer />
  </Router>
);

export default App;
