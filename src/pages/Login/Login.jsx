import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@mui/material';
import styled from 'styled-components';

import InputField from 'components/InputField';
import { device } from 'components/Theme';

import AuthLogo from 'assets/auth_logo.svg';
import { login } from 'store/actions/authorization';

const Container = styled.div`
  display: flex;
`;
const FormWrapper = styled.div`
  background-color: #f9faff;
  width: 100%;
  padding: 60px 30px;

  @media ${device.sm} {
    padding: 80px 26%;
  }

  @media ${device.lg} {
    width: 40%;
    padding: 120px 15% 80px 120px;
  }

  @media ${device.xl} {
    width: 30%;
  }
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 25px;

  @media ${device.lg} {
    font-size: 24px;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Text = styled.p`
  font-size: 14px;
  padding: 0 5px;
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  cursor: ${(props) => (props.underline ? 'pointer' : 'default')};
  font-weight: ${(props) => (props.underline ? '600' : '400')};
  margin-bottom: 10px;

  @media ${device.lg} {
    font-size: 16px;
  }
`;
const StyledButton = styled(Button)`
  &&& {
    background-color: #000000;
    padding: 15px;
    border-radius: 15px;
    font-size: 14px;
    
    @media ${device.lg} {
      font-size: 16px;
    }
  }
`;
const StyledImage = styled.div`
  display: none;

  @media ${device.lg} {
    display: block;
    background: url(${AuthLogo}) no-repeat;
    background-size: cover;
    width: 50%;
  }
`;

const Login = () => {
  const [values, setValues] = useState({
    login: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.authorization);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(login(values));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <Container>
      <StyledImage />
      <FormWrapper>
        <Title>Вход</Title>
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <InputField
            fullWidth
            required
            label="Логин"
            name="login"
            value={values.login}
            onChange={handleChange}
          />
          <InputField
            fullWidth
            required
            autoComplete="current-password"
            label="Пароль"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
          />
          <StyledButton
            fullWidth
            sx={{ mt: 3, mb: 3 }}
            type="submit"
            variant="contained"
          >
            Войти
          </StyledButton>
        </Box>
        <TextWrapper>
          <Text>Нет аккаунта?</Text>
          <Text underline onClick={() => navigate('/registration')}>Зарегистрироваться</Text>
        </TextWrapper>
      </FormWrapper>
    </Container>
  );
};

export default Login;
