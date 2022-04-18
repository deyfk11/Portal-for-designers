import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Header from 'components/Header/Header';
import PublicRoute from 'components/PublicRoute';
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
      <Route element={<Profile />} path="/profile" />
      <Route element={<PublicRoute />}>
        <Route element={<Home />} path="/" />
      </Route>
    </Routes>
  </Router>
);

export default App;
