import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

import { deleteProject } from 'store/actions/projects';

const Wrapper = styled.div`
  ${({ theme }) => `
    width: 30%;
    background-color: ${theme.colors.white};
    border-radius: 15px;
    padding-bottom: 45px;
    margin: 20px 15px;
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
  color:#FFFFFF;
  width: 95%;
`;

const Project = ({ project }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper />
  );
};

export default Project;

Project.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
