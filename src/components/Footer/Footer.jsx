import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import PolytechLogo from 'assets/polytech_logo.png';
import Logo from 'assets/white_logo.png';

const Wrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    padding: 0 0 40px 30px;
    background-color: #000000;
    height: auto;
    flex-direction: column;

    @media (min-width: ${theme.breakPoints.sm}) {
      padding: 0 15% 40px 5%;
      flex-direction: row;
    }
    @media (min-width: ${theme.breakPoints.lg}) {
      padding: 0 15% 40px 15%;
    }
  `}
`;
const StyledLogo = styled.img`
  width: 200px;
  cursor: pointer;
  margin-top: 30px;
`;
const Group = styled.div`
  ${({ theme, $leftGroup }) => `
    display: flex;
    flex-direction: column;
    margin-top: ${$leftGroup ? '25px' : '0'};
    margin-bottom: ${$leftGroup ? '25px' : '0'};

    @media (min-width: ${theme.breakPoints.sm}) {
      margin-bottom: 0;
    }
  `}
`;
const StyledLink = styled(Link)`
  ${({ theme }) => `
    font-size: 14px;
    color: ${theme.colors.white};
    display: inline-block;
    margin-top: 20px;

    @media (min-width: ${theme.breakPoints.md}) {
      font-size: 24px;
    }
  `}
`;

const Footer = () => {
  const { roleId, isLoggedIn } = useSelector((state) => state.authorization);

  return (
    <Wrapper>
      <Group $leftGroup>
        {isLoggedIn && <StyledLink to="/">Главная</StyledLink>}
        {isLoggedIn && roleId === 1 && <StyledLink to="/adminPanel">Пользователи</StyledLink>}
        {isLoggedIn && <StyledLink to="/profile">Профиль</StyledLink>}
        {!isLoggedIn && <StyledLink to="/registration">Регистрация</StyledLink>}
        {!isLoggedIn && <StyledLink $highlighted to="/login">Войти</StyledLink>}
      </Group>
      <Group>
        <StyledLogo alt="logo" src={Logo} />
        <StyledLogo alt="polytech logo" src={PolytechLogo} />
      </Group>
    </Wrapper>
  );
};

export default Footer;
