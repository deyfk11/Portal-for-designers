/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import ImageUploading from 'react-images-uploading';
import styled from 'styled-components';

import BasicModal from 'components/BasicModal';
import { device } from 'components/Theme';

import { updateProfile } from 'store/actions/users';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 0 30px;
  width: 100%;
  margin-top: 10px;
`;
const StyledButton = styled.button`
  ${({ $remove }) => `
    border-radius: 15px;
    width: 100%;
    height: 45px;
    color: ${$remove ? 'white' : 'black'};
    background-color: ${$remove ? 'black' : '#FFFFFF'}; 
    font-weight: bold;
    border: 1px solid #000000;
    margin: 10px 0;
    cursor: pointer;

  `}
`;
const ButtonsContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
  width: 100%;
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
  justify-content: center;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 20px;
  border-radius: 15px;

`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: black;
`;
const IconWrapper = styled(IconButton)`
  position: absolute !important;
  top: 13%;
  left: 13%;
  color: #FFFFFF !important;
`;

const EditAvatarModal = ({ open, setOpen, id, setIsEditMode }) => {
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState([]);

  const handleFileChange = (image) => {
    setAvatar(image);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData();

    formdata.append('File', avatar[0].file);
    dispatch(updateProfile(formdata, setOpen, id, setIsEditMode));
  };

  return (
    <BasicModal
      open={open}
      setOpen={setOpen}
    >
      <FormWrapper onSubmit={handleSubmit}>
        <ImageUploading
          dataURLKey="data_url"
          maxNumber={20}
          value={avatar}
          onChange={handleFileChange}
        >
          {({
            onImageUpload,
            onImageRemove,
            dragProps,
          }) => (
            <UploadWrapper onClick={onImageUpload} {...dragProps}>
              <Text>Выберите или перетащите фото</Text>
              {!!avatar.length && (
                <ImageList>
                  <ImageWrapper>
                    <Image alt="" src={avatar[0].data_url} width="100" />
                    <IconWrapper onClick={(event) => {
                      event.stopPropagation();
                      onImageRemove(0);
                    }}
                    >
                      <DeleteOutlineIcon />
                    </IconWrapper>
                  </ImageWrapper>
                </ImageList>
              )}
            </UploadWrapper>
          )}
        </ImageUploading>
        <ButtonsContainer>
          <StyledButton
            $remove
            type="submit"
          >
            Сохранить
          </StyledButton>
          <StyledButton onClick={() => setOpen(false)}>Отмена</StyledButton>
        </ButtonsContainer>
      </FormWrapper>
    </BasicModal>
  );
};

export default EditAvatarModal;
EditAvatarModal.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setIsEditMode: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
};
