import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import BasicModal from 'components/BasicModal';

import { deleteProject } from 'store/actions/projects';

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;
const Wrapper = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
const StyledButton = styled.button`
    border-radius: 15px;
    width: 160px;
    height: 35px;
    color: ${(props) => (props.$remove ? 'white' : 'black')};
    background-color: ${(props) => (props.$remove ? 'black' : '#F9FAFF')}; 
    font-weight: bold;
    border: 1px solid #000000;
    margin: 10px;
    cursor: pointer;
`;
const ButtonsContainer = styled.div`
    deisplay: flex;
    padding-top: 10px;
`;

const DeleteProjectModal = ({ open, setOpen, setActiveProject, activeProject }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {activeProject && (
        <BasicModal
          open={open}
          setOpen={setOpen}
          title="Удалить этот проект?"
        >
          <Wrapper>
            <Title>{activeProject.title}</Title>
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
      )}
    </div>
  );
};

export default DeleteProjectModal;
DeleteProjectModal.propTypes = {
  activeProject: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  open: PropTypes.bool.isRequired,
  setActiveProject: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
};
