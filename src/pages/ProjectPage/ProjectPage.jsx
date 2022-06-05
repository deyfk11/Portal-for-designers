import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import PageNotFound from 'pages/PageNotFound';

import { getProject } from 'store/actions/projects';

import ImageList from './ImageList';
import ProjectNotFound from './ProjectNotFound';
import UserInfo from './UserInfo';

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

const ProjectPage = () => {
  const dispatch = useDispatch();
  const { project } = useSelector((state) => state.projects);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProject(id));
  }, []);

  return (
    <Wrapper>
      {project && project.images
        ? (
          <div>
            <UserInfo
              profileImage={project.profile_image}
              title={project.title}
              userId={project.user_id}
              userName={project.username}
            />
            <ImageList images={project.images} />
          </div>
        )
        : <PageNotFound />}
    </Wrapper>
  );
};

export default ProjectPage;
