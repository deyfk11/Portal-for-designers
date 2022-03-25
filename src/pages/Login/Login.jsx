import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, TextField, Button } from '@mui/material';
import styled from 'styled-components';

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
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = () => {
    login().then(() => {
      navigate('/');
    });
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Вход</Title>
        <Box noValidate component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            fullWidth
            required
            autoComplete="email"
            id="email"
            label="Почта"
            margin="normal"
            name="email"
          />
          <TextField
            fullWidth
            required
            autoComplete="current-password"
            id="password"
            label="Пароль"
            margin="normal"
            name="password"
            type="password"
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
