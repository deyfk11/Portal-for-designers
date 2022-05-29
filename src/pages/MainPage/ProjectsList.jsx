import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => `
    display: grid;
    justify-content: center;
    grid-template-columns: minmax(auto, 300px);

    @media (min-width: ${theme.breakPoints.md}) {
      grid-template-columns: repeat(auto-fill, 310px);
      grid-column-gap: 30px;
    }
  `}
`;

const Container = styled.div`
  ${({ theme }) => `
    width: 100%;
    max-width: 310px;
    background-color: ${theme.colors.white};
    border-radius: 15px;
    margin: 20px 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  `}
`;
const ImageInner = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  border-radius: 15px 15px 0 0;
`;
const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
  z-index: 1;
`;
const Text = styled.div`
  ${({ theme }) => `
    font-size: 14px;
    font-weight: 100;
    margin: auto 15px 30px 15px;

    @media (min-width: ${theme.breakPoints.md}) {
      font-size: 16px;
    }
  `}
`;
const Title = styled.div`
  ${({ theme }) => `
    font-size: 16px;
    font-weight: 600;
    margin: 30px 15px 15px 15px;

    @media (min-width: ${theme.breakPoints.md}) {
      font-size: 18px;
    }
  `}
`;

const ProjectsList = ({ projects }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      {projects.map(((project) => (
        <Container key={project.id} onClick={() => navigate(`/project/${project.id}`)}>
          <ImageInner>
            <StyledImage src={project.images[0]} />
          </ImageInner>
          <Title>{project.title}</Title>
          <Text>{project.username}</Text>
        </Container>
      )))}
    </Wrapper>
  );
};

export default ProjectsList;

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};
