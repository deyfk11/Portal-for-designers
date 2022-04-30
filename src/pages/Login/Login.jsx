import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@mui/material';
import styled from 'styled-components';

import InputField from 'components/InputField';

import { login } from 'store/actions/authorization';

const Container = styled.div`
    display: flex;
    height: 700px;
    justify-content: flex-end;
`;
const FormWrapper = styled.div`
    background-color: #f9faff;
    width: 30%;
    padding: 120px 15% 120px 120px;
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
    font-size: 16px;
    padding: 0 5px;
    text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
    cursor: ${(props) => (props.underline ? 'pointer' : 'default')};
`;
const StyledButton = styled(Button)`
  &&& {
    background-color: #000000;
    padding: 15px;
    border-radius: 15px;
  }
`;

const Login = () => {
  const [values, setValues] = useState({
    login: 'add',
    password: 'add',
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
