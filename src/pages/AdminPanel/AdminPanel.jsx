import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import UserProfile from 'pages/AdminPanel/UserProfile';

import { getAllUsers } from 'store/actions/users';

const Wrapper = styled.div`
    ${({ theme }) => `
        display: flex;
        flex-direction: column;
    `}
`;

const Container = styled.div`
    ${({ theme }) => `
        display: flex;
        padding: 50px 5%;
        flex-wrap: wrap;
        background-color: gray;
        div:nth-child(odd) {
            margin-right: 10px;
        }
        
        @media (min-width: ${theme.breakPoints.lg}) {
            padding: 50px 15%;
            justify-content: space-between;
            div:nth-child(odd) {
                margin-right: 20px;
            }
        }
    `}
`;

const AdminPanel = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <Wrapper>
      <Container>
        {allUsers.length && allUsers.map((user) => (
          <UserProfile key={user.login} user={user} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default AdminPanel;
