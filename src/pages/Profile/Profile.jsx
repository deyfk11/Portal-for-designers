import React from 'react';

import Shiba from 'assets/shiba.jpeg';
import styled from 'styled-components';

import ProjectsList from './ProjectsList';

const Wrapper = styled.div`
    ${({ theme }) => `
        display: flex;
        flex-direction: column;
        padding: 50px 5%;
        background-color: ${theme.colors.circon};

        @media (min-width: ${theme.breakPoints.lg}) {
            padding: 50px 15%;
        }
    `}
`;
const Text = styled.div`
    font-size: ${(props) => (props.title ? '24px' : '16px')};
    font-weight: ${(props) => (props.title ? '600' : '100')};
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

const Profile = () => {
  console.log();

  return (
    <Wrapper>
      <ProfileImage alt="Profile image" src={Shiba} />
      <Text title>Шиба</Text>
      <Text>12 проектов</Text>
      <ProjectsList />
    </Wrapper>
  );
};

export default Profile;
