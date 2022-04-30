import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Header from 'components/Header/Header';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import AddProject from 'pages/AddProject/AddProject';
import AdminPanel from 'pages/AdminPanel/AdminPanel';
import Home from 'pages/Home';
import Login from 'pages/Login/Login';
import Profile from 'pages/Profile/Profile';
import Registration from 'pages/Registration/Registration';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<Registration />} path="/registration" />
      <Route element={<PublicRoute />}>
        <Route element={<Home />} path="/" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<AddProject />} path="/addProject" />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route element={<AdminPanel />} path="/adminPanel" />
      </Route>
    </Routes>
  </Router>
);

export default App;
