/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ImageUploading from 'react-images-uploading';
import styled from 'styled-components';

import InputField from 'components/InputField';
import { device } from 'components/Theme';

import { addProject } from 'store/actions/projects';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f9faff;
  padding: 60px 30px;
  flex-direction: column;

  @media ${device.sm} {
    padding: 80px 26%;
  }
  @media ${device.lg} {
    padding: 120px 15% 80px 120px;
  }
`;
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  @media ${device.lg} {
    flex-direction: row;
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
const StyledButton = styled(Button)`
  &&& {
    background-color: #000000;
    padding: 15px;
    border-radius: 15px;
    margin-bottom: 0;
    font-size: 14px;

    @media ${device.lg} {
      font-size: 16px;
    }
  }
`;
const RightGroup = styled.div`
  @media ${device.lg} {
    margin-left: 30px;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 20px;
  border-radius: 15px;

  @media ${device.lg} {
    width: 100px;
    height: 100px;
  }
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: black;

  @media ${device.lg} {
    width: 100px;
    height: 100px;
  }
`;
const IconWrapper = styled(IconButton)`
  position: absolute !important;
  top: 13%;
  left: 13%;
  color: #FFFFFF !important;

  @media ${device.lg} {
    top: 30%;
    left: 30%;
  }
`;
const UploadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  cursor: pointer;
  flex-wrap: wrap;
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 10px 0;
  margin-bottom: 20px;
  height: 200px;

  @media ${device.lg} {
    width: 50%;
    margin-bottom: 0;
    height: auto;
  }
`;
const Text = styled.p`
  font-size: 16px;
  width: 100%;
  position: absolute;
  top: 45%;
  text-align: center;

  @media ${device.lg} {
    font-size: 18px;
  }
`;
const ImageList = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  overflow-x: scroll;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;
  &&::-webkit-scrollbar {
    display: none;
  }

  @media ${device.lg} {
    height: 100px;
  }
`;

const AddProject = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: '',
    description: '',
    files: [],
  });
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formdata = new FormData();

    for (let i = 0; i < values.files.length; i++) {
      if (values.files[i].data_url) {
        formdata.append('Files', values.files[i].file);
      } else {
        formdata.append('Files', values.files[i]);
      }
    }

    formdata.append('PostInfo', `{\n  "description": "${values.description}",\n  "title": "${values.title}"\n}`);
    dispatch(addProject(formdata, navigate));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const handleFileChange = (imageList) => {
    setValues({ ...values, files: imageList });
  };

  return (
    <Container>
      <Title>Редактировать проект</Title>
      <FormWrapper onSubmit={handleSubmit}>
        <ImageUploading
          multiple
          dataURLKey="data_url"
          maxNumber={20}
          value={values.files}
          onChange={handleFileChange}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemove,
            dragProps,
          }) => (
            <UploadWrapper onClick={onImageUpload} {...dragProps}>
              <Text>Выберите или перетащите фото</Text>
              <ImageList>
                {imageList.map((image, index) => (
                  <ImageWrapper key={index}>
                    <Image alt="" src={image.data_url} width="100" />
                    <IconWrapper>
                      <DeleteOutlineIcon onClick={(event) => {
                        event.stopPropagation();
                        onImageRemove(index);
                      }}
                      />
                    </IconWrapper>
                  </ImageWrapper>
                ))}
              </ImageList>
            </UploadWrapper>
          )}
        </ImageUploading>
        <RightGroup>
          <InputField
            fullWidth
            multiline
            label="Название"
            name="title"
            rows={3}
            value={values.title}
            onChange={handleChange}
          />
          <InputField
            fullWidth
            multiline
            required
            label="Описание"
            name="description"
            rows={3}
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
        </RightGroup>
      </FormWrapper>
    </Container>
  );
};

export default AddProject;
