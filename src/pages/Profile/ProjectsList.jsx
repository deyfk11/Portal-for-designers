import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

import DeleteProjectModal from 'pages/Profile/DeleteProjectModal';

import { deleteProject } from 'store/actions/projects';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  ${({ theme }) => `
    width: 30%;
    background-color: ${theme.colors.white};
    border-radius: 15px;
    padding-bottom: 45px;
    margin: 20px 15px;
    cursor: pointer;
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
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 0 15px;
`;
const Text = styled.div`
  font-size: 16px;
  font-weight: 100;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
`;
const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 5px;
  right: 8px;
  z-index: 2;
  color: #FFFFFF;
  width: 95%;
`;

const ProjectsList = ({ projects, isEditMode }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <Wrapper>
      {projects.map(((project) => (
        <Container>
          <ImageInner>
            {isEditMode && (
              <IconsWrapper>
                <IconButton color="inherit">
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  // onClick={() => dispatch(deleteProject(project.id))}
                  onClick={() => {
                    setActiveProject(project);
                    setOpenDeleteModal(true);
                  }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </IconsWrapper>
            )}
            <StyledImage src={project.images[0]} />
          </ImageInner>
          <TextWrapper>
            <Title>{project.title}</Title>
            <Text>{project.description}</Text>
          </TextWrapper>
        </Container>
      )))}
      <DeleteProjectModal
        activeProject={activeProject}
        open={openDeleteModal}
        setActiveProject={setActiveProject}
        setOpen={setOpenDeleteModal}
      />
    </Wrapper>
  );
};

export default ProjectsList;

ProjectsList.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};
