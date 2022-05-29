import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { device } from 'components/Theme';

import { getAllProjects } from 'store/actions/projects';

import ProjectsList from './ProjectsList';

const Wrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${theme.colors.circon};
    padding: 50px 30px;

    @media ${device.sm} {
      padding: 50px 5%;
    }

    @media ${device.lg} {
      padding: 50px 15%;
    }
  `}
`;

const MainPage = () => {
  const dispatch = useDispatch();
  const { allProjects } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getAllProjects(0, 0));
  }, []);

  return (
    <Wrapper>
      <ProjectsList projects={allProjects} />
    </Wrapper>
  );
};

export default MainPage;
