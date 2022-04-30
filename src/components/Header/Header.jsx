import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import styled, { css } from 'styled-components';

import Logo from 'assets/logo.png';
import { logout } from 'store/actions/authorization';

const Wrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    height: 100px;
    align-items: center;

    @media (min-width: ${theme.breakPoints.xs}) {
      margin: 0;
    }
    @media (min-width: ${theme.breakPoints.md}) {
      margin: 0 5%;
      justify-content: space-between;
    }
    @media (min-width: ${theme.breakPoints.lg}) {
      margin: 0 15%;
      justify-content: space-between;
    }
  `}
`;
const StyledLink = styled(Link)`
  height: 35px;
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.black};
  display: inline-block;
  line-height: 35px;
  margin-right: ${(props) => !props.$highlighted && '20px'};

  ${({ theme: { colors }, $highlighted }) => $highlighted && css`
    width: 160px;
    color: ${colors.white};
    background-color: ${colors.black};
    border-radius: 15px;
    text-align: center;
  `}
`;
const StyledLogo = styled.img`
  width: 200px;
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();
  const { roleId, isLoggedIn } = useSelector((state) => state.authorization);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <StyledLogo alt="logo" src={Logo} onClick={() => navigate('/')} />
      <div>
        {!isLoggedIn && <StyledLink to="/registration">Регистрация</StyledLink>}
        {!isLoggedIn && <StyledLink $highlighted to="/login">Войти</StyledLink>}
        {isLoggedIn && roleId === 1 && <StyledLink to="/adminPanel">Пользователи</StyledLink>}
        {isLoggedIn && <StyledLink to="/profile">Профиль</StyledLink>}
        {isLoggedIn && <StyledLink $highlighted to="#" onClick={() => dispatch(logout(navigate))}>Выйти</StyledLink>}
      </div>
    </Wrapper>
  );
};

export default Header;
