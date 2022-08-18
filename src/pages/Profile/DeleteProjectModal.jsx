import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import BasicModal from 'components/BasicModal';

import { deleteProject } from 'store/actions/projects';

const Title = styled.p`
  ${({ theme }) => `
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: center;

    @media (min-width: ${theme.breakPoints.lg}) {
      font-size: 18px;
    }
  `}
`;
const Text = styled.p`
  ${({ theme }) => `
    font-size: 14px;
    text-align: center;

    @media (min-width: ${theme.breakPoints.lg}) {
      font-size: 16px;
    }
  `}
`;
const Wrapper = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 30px 20px 20px 20px;
  `}
`;
const StyledButton = styled.button`
  ${({ theme, $remove }) => `
    border-radius: 15px;
    width: 100%;
    height: 35px;
    color: ${$remove ? 'white' : 'black'};
    background-color: ${$remove ? 'black' : '#FFFFFF'}; 
    font-weight: bold;
    border: 1px solid #000000;
    margin: 10px 0;
    cursor: pointer;

    @media (min-width: ${theme.breakPoints.lg}) {
      width: 160px;
      margin: 10px;
    }
  `}
`;
const ButtonsContainer = styled.div`
  ${({ theme }) => `
    display: flex;
    padding-top: 40px;
    margin-bottom: 30px;
    flex-direction: column;
    width: 100%;
    
    @media (min-width: ${theme.breakPoints.lg}) {
      flex-direction: row;
    }
  `}
`;

const DeleteProjectModal = ({ open, setOpen, setActiveProject, activeProject }) => {
  const dispatch = useDispatch();

  return (
    <BasicModal
      open={open}
      setOpen={setOpen}
      title="Удалить этот проект?"
    >
      <Wrapper>
        <Title>{activeProject.title}</Title>
        <Text>{activeProject.description}</Text>
        <ButtonsContainer>
          <StyledButton onClick={() => setOpen(false)}>Назад</StyledButton>
          <StyledButton
            $remove
            onClick={() => {
              dispatch(deleteProject(activeProject.id));
              setOpen(false);
              setActiveProject(null);
            }}
          >
            Удалить

          </StyledButton>
        </ButtonsContainer>
      </Wrapper>
    </BasicModal>
  );
};

export default DeleteProjectModal;
DeleteProjectModal.propTypes = {
  activeProject: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  open: PropTypes.bool.isRequired,
  setActiveProject: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
};
