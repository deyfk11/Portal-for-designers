import PropTypes from 'prop-types';
import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 300px;
  background-color: #FFFFFF;
  outline: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 20px;
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
  title: '',
};
BasicModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  title: PropTypes.string,
};
