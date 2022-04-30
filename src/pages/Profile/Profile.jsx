import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import Shiba from 'assets/shiba.jpeg';
import { getAccountInfo } from 'store/actions/accounts';
import { getProjectsById } from 'store/actions/projects';

import ProjectsList from './ProjectsList';

const Wrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 50px 5%;
    background-color: ${theme.colors.circon};

    @media (min-width: ${theme.breakPoints.lg}) {
        padding: 50px 15%;
    }
  `}
`;
const Text = styled.div`
  font-size: ${(props) => (props.$title ? '24px' : '16px')};
  font-weight: ${(props) => (props.$title ? '600' : '100')};
  align-self: center;
  margin-bottom: 20px;
`;
const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  align-self: center;
  margin-bottom: 20px;
`;
const StyledButton = styled.button`
  border-radius: 15px;
  height: 45px;
  width: 350px;
  align-self: center;
  margin-bottom: 20px; 
  color: ${(props) => (props.$addProject ? 'white' : 'black')};
  background-color: ${(props) => (props.$addProject ? 'black' : '#F9FAFF')}; 
  font-weight: bold;
  cursor: pointer;
  border: 1px solid #000000;
`;

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.authorization);
  const { projectsById } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getProjectsById(userId));
    dispatch(getAccountInfo(userId));
  }, []);

  return (
    <Wrapper>
      <ProfileImage alt="Profile image" src={Shiba} />
      <Text $title>Шиба</Text>
      <Text>
        {projectsById.length}
        {' '}
        проектов
      </Text>
      <StyledButton $addProject onClick={() => navigate('/addProject')}>Добавить проект</StyledButton>
      <StyledButton onClick={() => setIsEditMode(!isEditMode)}>Редактировать профиль</StyledButton>
      <ProjectsList isEditMode={isEditMode} projects={projectsById} />
    </Wrapper>
  );
};

export default Profile;
