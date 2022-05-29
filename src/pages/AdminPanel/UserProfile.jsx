import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';

import { deleteUser } from 'store/actions/users';

const Wrapper = styled.div`
    ${({ theme }) => `
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${theme.colors.white};
        padding: 15px;
        box-sizing: border-box;
        border-radius: 10px;
        height: 90px;
        width: 47%;
        margin: 20px 0;
    `}
`;
const Avatar = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
const IconWrapper = styled.button`
  cursor: pointer;
`;
const Text = styled.p`
  font-size: 20px;
  cursor: pointer;
`;
const LeftGroup = styled.div`
  display: flex;
  align-items: center;
`;

const UserProfile = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <LeftGroup>
        <ProfileImage src={user.profile_image} />
        <Text onClick={() => navigate(`/profile/${user.id}`)}>{user.login}</Text>
      </LeftGroup>
      <IconWrapper onClick={() => dispatch(deleteUser(user.id))}>
        <DeleteIcon />
      </IconWrapper>
    </Wrapper>
  );
};

export default UserProfile;

UserProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    profile_image: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};
