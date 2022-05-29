import PropTypes from 'prop-types';
import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';

const Title = styled.p`
  ${({ theme }) => `
    font-size: 20px;
    font-weight: bold;

    @media (min-width: ${theme.breakPoints.lg}) {
      font-size: 24px;
    }
  `}
`;
const Wrapper = styled.div`
  ${({ theme }) => `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: auto;
    background-color: #FFFFFF;
    outline: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #000000;
    border-radius: 20px;

    @media (min-width: ${theme.breakPoints.sm}) {
      width: 60%;
    }

    @media (min-width: ${theme.breakPoints.lg}) {
      width: 40%;
    }
  `}
`;
const StyledIconButton = styled(IconButton)`
  align-self: flex-end;
  margin: 5px 5px 0 0 !important;
`;

const BasicModal = ({ open, setOpen, title, children }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Wrapper>
        <StyledIconButton color="inherit" onClick={() => handleClose()}>
          <CloseIcon style={{ fontSize: 30 }} />
        </StyledIconButton>
        {title && <Title>{title}</Title>}
        {children}
      </Wrapper>
    </Modal>
  );
};

export default BasicModal;
BasicModal.defaultProps = {
  children: undefined,
  title: '',
};
BasicModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  children: PropTypes.element,
  title: PropTypes.string,
};
