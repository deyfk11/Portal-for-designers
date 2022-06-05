import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

import { device } from 'components/Theme';

import Logo from 'assets/logo.png';
import { logout } from 'store/actions/authorization';

const Wrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    margin: 0 30px;

    @media (min-width: ${theme.breakPoints.sm}) {
      margin: 0 5%;
    }
    @media (min-width: ${theme.breakPoints.lg}) {
      margin: 0 15%;
    }
  `}
`;
const StyledLink = styled(Link)`
  ${({ theme, $highlighted }) => `
    height: 35px;
    font-size: 16px;
    color: ${theme.colors.black};
    display: inline-block;
    line-height: 35px;
    margin-left: 60px;
    margin-bottom: 25px;

    @media (min-width: ${theme.breakPoints.xss}) {
      margin-left: 25px;
    }

    @media (min-width: ${theme.breakPoints.lg}) {
      margin-left: 0;
      margin-right: ${(!$highlighted && '20px') || '0'};
      margin-bottom: 0;

      ${$highlighted && `
        width: 160px;
        color: ${theme.colors.white};
        background-color: ${theme.colors.black};
        border-radius: 15px;
        text-align: center;
      `}
    }
  `}
`;
const StyledLogo = styled.img`
  width: 200px;
  cursor: pointer;
`;
const MobileNavBar = styled.div`
  ${({ theme, $openNavMenu }) => `
    background-color: #FFFFFF;
    max-width: 320px;
    width: 100vw;
    height: 100vh;
    display: ${$openNavMenu ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    right: 0;
    flex-direction: column;
    z-index: 3;

    @media (min-width: ${theme.breakPoints.xss}) {
      right: -40px;
      width: 270px;
    }
  `}
`;
const MobileContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    position: relative;

    @media (min-width: ${theme.breakPoints.lg}) {
      display: none;
    }
  `}
`;
const Container = styled.div`
  ${({ theme }) => `
    display: none;

    @media (min-width: ${theme.breakPoints.lg}) {
      display: flex;
    }
  `}
`;
const StyledCloseIcon = styled(CloseIcon)`
  margin-left: auto;
  padding: 40px 30px 40px 0px;
  @media ${device.xss} {
    margin: 0 auto;
    padding: 40px 0px 60px 75px;
  }
  cursor: pointer;
`;

const Header = () => {
  const drawerRef = useRef();
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const navigate = useNavigate();
  const { roleId, isLoggedIn, userId } = useSelector((state) => state.authorization);
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpenNavMenu(!openNavMenu);
  };

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler]);
  }

  const handler = useCallback(() => setOpenNavMenu(false), []);

  useOnClickOutside(drawerRef, handler);

  return (
    <Wrapper>
      <StyledLogo alt="logo" src={Logo} onClick={() => navigate('/')} />
      <MobileContainer>
        <IconButton
          aria-controls="menu-appbar"
          aria-haspopup="true"
          aria-label="account of current user"
          color="inherit"
          size="large"
          onClick={handleClick}
        >
          {openNavMenu ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <MobileNavBar $openNavMenu={openNavMenu} ref={drawerRef}>
          <StyledCloseIcon onClick={handleClick} />
          <StyledLink to="/">Главная</StyledLink>
          {!isLoggedIn && <StyledLink to="/registration">Регистрация</StyledLink>}
          {!isLoggedIn && <StyledLink $highlighted to="/login">Войти</StyledLink>}
          {isLoggedIn && roleId === 1 && <StyledLink to="/adminPanel">Пользователи</StyledLink>}
          {isLoggedIn && <StyledLink to={`/profile/${userId}`}>Профиль</StyledLink>}
          {isLoggedIn && <StyledLink $highlighted to="#" onClick={() => dispatch(logout(navigate))}>Выйти</StyledLink>}
        </MobileNavBar>
      </MobileContainer>
      <Container>
        <StyledLink to="/">Главная</StyledLink>
        {!isLoggedIn && <StyledLink to="/registration">Регистрация</StyledLink>}
        {!isLoggedIn && <StyledLink $highlighted to="/login">Войти</StyledLink>}
        {isLoggedIn && roleId === 1 && <StyledLink to="/adminPanel">Пользователи</StyledLink>}
        {isLoggedIn && <StyledLink to={`/profile/${userId}`}>Профиль</StyledLink>}
        {isLoggedIn && <StyledLink $highlighted to="#" onClick={() => dispatch(logout(navigate))}>Выйти</StyledLink>}
      </Container>
    </Wrapper>
  );
};

export default Header;
