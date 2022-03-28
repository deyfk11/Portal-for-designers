import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@mui/material';
import styled from 'styled-components';

import InputField from '../../components/InputField';
import useAuth from '../../components/useAuth';

const Container = styled.div`
    display: flex;
    height: 700px;
    justify-content: flex-end;
`;
const FormWrapper = styled.div`
    background-color: #F2F2F2;
    width: 30%;
    padding: 120px;
`;
const Title = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 25px;
`;
const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
const Text = styled.p`
    font-size: 18px;
    padding: 0 5px;
    text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
    cursor: ${(props) => (props.underline ? 'pointer' : 'default')};
`;
const StyledButton = styled(Button)`
    background-color: #000000 !important;
    padding: 15px !important;
`;

const Login = () => {
  const [values, setValues] = useState({
    login: '',
    password: '',
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch('http://localhost:8000/api/v1/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify({
        // eslint-disable-next-line camelcase
        password_hash: values.login,
        login: values.login,
      }),
    });

    login().then(() => {
      navigate('/');
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <Container>
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
