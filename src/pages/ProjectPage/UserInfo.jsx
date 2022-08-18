import PropTypes from 'prop-types';
import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { device } from 'components/Theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.lg} {
    flex-direction: row;
  }
`;
const UserPhoto = styled.img`
  width: 160px;
  heigth: 160px;
  border-radius: 50%;
  order: 2;
  align-self: center;
  margin-top: 20px;

  @media ${device.lg} {
    order 1;
    align-self: flex-start;
    margin-top: 0px;
  }
`;
const RightGroup = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  order 3;
  align-self: center;
  margin-top: 30px;

  @media ${device.lg} {
    margin-top: 0px;
    order 1;
    align-self: flex-start;
    margin-left: 30px;
  }
`;
const UserName = styled.p`
  border-bottom: 1px solid #000000;
  font-weight: bold;
  font-size: 18px;
  width: fit-content;
  cursor: pointer;
  align-self: center;

  @media ${device.lg} {
    align-self: flex-start;
  }
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 24px;
  padding-top: 40px;
  align-self: center;

  @media ${device.lg} {
    align-self: flex-start;
  }
`;
const StyledLink = styled(Link)`
  ${({ theme }) => `
    font-size: 16px;
    color: ${theme.colors.black};
    display: inline-block;
    border-bottom: 1px solid #000000;
    align-self: flex-start;
    margin-left: auto;
    order: 0;

    @media ${device.lg} {
      order 2;
    }
  `}
`;

const UserInfo = ({ userName, profileImage, title, userId }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const lastPageName = state === `/profile/${userId}` ? 'К профилю' : 'К главной странице';

  return (
    <Wrapper>
      <UserPhoto alt="User photo" src={profileImage} />
      <RightGroup>
        <UserName onClick={() => navigate(`/profile/${userId}`)}>{userName}</UserName>
        <Title>{title}</Title>
      </RightGroup>
      <StyledLink to={state || '/'}>{lastPageName}</StyledLink>
    </Wrapper>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  profileImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
