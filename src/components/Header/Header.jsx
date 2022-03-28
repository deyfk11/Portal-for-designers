import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import useAuth from '../useAuth';

const Wrapper = styled.div`
  display: flex;
  height: 40px;
  justify-content: flex-end;
  margin: 20px 0;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin-right: 20px;
  height: 20px;
  color: #000;
`;

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Wrapper>
      <StyledLink to="/">Главная</StyledLink>
      <StyledLink to="/registration">Регистрация</StyledLink>
      {/* {!isAuthenticated && <StyledLink to="/login">Авторизация</StyledLink>} */}
      <StyledLink to="/login">Авторизация</StyledLink>
    </Wrapper>
  );
};

export default Header;
