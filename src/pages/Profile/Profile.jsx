import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import plural from 'plural-ru';
import styled from 'styled-components';

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

const Profile = () => {
  const { id } = useParams();
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { projectsById } = useSelector((state) => state.projects);
  const { userById } = useSelector((state) => state.allUsers);
  const { roleId } = useSelector((state) => state.authorization);

  useEffect(() => {
    dispatch(getProjectsById(id));
    dispatch(getUserById(id));
  }, []);

  return (
    <Wrapper>
      {userById.id && userById.id !== 0 && (
        <>
          <ProfileImage alt="Profile image" src={userById.profile_image} />
          <Text $title>{userById.username}</Text>
          <Text>
            {projectsById.length}
            {' '}
            {plural(projectsById.length, 'проект', 'проекта', 'проектов')}
          </Text>
          {userById.id.toString() === id && <StyledButton $addProject onClick={() => navigate('/addProject')}>Добавить проект</StyledButton>}
          {(userById.id.toString() === id || roleId === 1)
          && <StyledButton onClick={() => setIsEditMode(!isEditMode)}>Редактировать профиль</StyledButton>}
          <ProjectsList isEditMode={isEditMode} projects={projectsById} userId={id} />
        </>
      )}
    </Wrapper>
  );
};

export default Profile;
