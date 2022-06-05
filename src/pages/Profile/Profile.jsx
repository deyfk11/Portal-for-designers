import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import plural from 'plural-ru';
import styled from 'styled-components';

import EditAvatarModal from 'pages/Profile/EditAvatarModal';

import { getProjectsById } from 'store/actions/projects';
import { getUserById } from 'store/actions/users';

import ProjectsList from './ProjectsList';

const Wrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${theme.colors.circon};
    padding: 50px 30px;

    @media (min-width: ${theme.breakPoints.sm}) {
      padding: 50px 5%;
    }
    @media (min-width: ${theme.breakPoints.lg}) {
      padding: 50px 15%;
    }
  `}
`;
const Text = styled.div`
  ${({ theme, $title }) => `
    font-size: ${$title ? '20px' : '14px'};
    font-weight: ${$title ? '600' : '100'};
    align-self: center;
    margin-bottom: 20px;

    @media (min-width: ${theme.breakPoints.md}) {
      font-size: ${$title ? '24px' : '16px'};
    }
  `}
`;
const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  align-self: center;
  margin-bottom: 20px;
`;
const StyledButton = styled.button`
  ${({ theme, $addProject }) => `
    border-radius: 15px;
    height: 45px;
    width: 100%;
    max-width: 300px;
    align-self: center;
    margin-bottom: 20px; 
    color: ${$addProject ? 'white' : 'black'};
    background-color: ${$addProject ? 'black' : '#F9FAFF'}; 
    font-weight: bold;
    cursor: pointer;
    border: 1px solid #000000;

    @media (min-width: ${theme.breakPoints.md}) {
      max-width: 350px;
    }
  `}
`;
const StyledPhotoIcon = styled(AddAPhotoIcon)`
  width: 80px !important;
  height: 80px !important;
  border-radius: 50%;
  align-self: center;
`;
const IconWrapper = styled.div`
  width: 160px;
  height: 160px;
  align-self: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  background-color: #FFFFFF;
  cursor: pointer;
`;

const Profile = () => {
  const { id } = useParams();
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { projectsById } = useSelector((state) => state.projects);
  const { userById } = useSelector((state) => state.allUsers);
  const { roleId, userId } = useSelector((state) => state.authorization);
  const [openEditAvatarModal, setOpenditAvatarModal] = useState(false);

  useEffect(() => {
    dispatch(getProjectsById(id));
    dispatch(getUserById(id));
  }, [id]);

  return (
    <Wrapper>
      {userById.id && userById.id !== 0 && (
        <>
          {isEditMode
            ? (
              <IconWrapper onClick={() => setOpenditAvatarModal(true)}>
                <StyledPhotoIcon />
              </IconWrapper>
            )
            : <ProfileImage alt="Profile image" src={userById.profile_image} />}
          <Text $title>{userById.username}</Text>
          <Text>
            {projectsById.length}
            {' '}
            {plural(projectsById.length, 'проект', 'проекта', 'проектов')}
          </Text>
          {userId.toString() === id && <StyledButton $addProject onClick={() => navigate('/addProject')}>Добавить проект</StyledButton>}
          {(userId.toString() === id || roleId === 1)
          && <StyledButton onClick={() => setIsEditMode(!isEditMode)}>Редактировать профиль</StyledButton>}
          <ProjectsList isEditMode={isEditMode} projects={projectsById} userId={id} />
          {isEditMode && (
            <EditAvatarModal
              id={id}
              open={openEditAvatarModal}
              setIsEditMode={setIsEditMode}
              setOpen={setOpenditAvatarModal}
            />
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Profile;
