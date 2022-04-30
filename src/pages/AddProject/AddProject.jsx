import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@mui/material';
import styled from 'styled-components';

import InputField from 'components/InputField';

import { addProject } from 'store/actions/projects';

const Container = styled.div`
  display: flex;
  height: 700px;
  justify-content: center;
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
const StyledButton = styled(Button)`
  &&& {
    background-color: #000000;
    padding: 15px;
    border-radius: 15px;
  }
`;

const AddProject = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: 'Дизайн мобильного приложения',
    description: 'Используемые технологии',
    files: [],
  });
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formdata = new FormData();

    for (let i = 0; i < values.files.length; i++) {
      formdata.append('Files', values.files[i]);
    }

    formdata.append('PostInfo', `{\n  "description": "${values.description}",\n  "title": "${values.title}"\n}`);
    dispatch(addProject(formdata, navigate));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const handleFileChange = (event) => {
    setValues({ ...values, files: [...values.files, ...event.target.files] });
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Добавить проект</Title>
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <input multiple type="file" onChange={handleFileChange} />
          <InputField
            fullWidth
            label="Название"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
          <InputField
            fullWidth
            required
            label="Описание"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
          <StyledButton
            fullWidth
            sx={{ mt: 3, mb: 3 }}
            type="submit"
            variant="contained"
          >
            Сохранить
          </StyledButton>
        </Box>
      </FormWrapper>
    </Container>
  );
};

export default AddProject;
