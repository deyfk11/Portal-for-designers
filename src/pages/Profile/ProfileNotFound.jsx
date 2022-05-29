import React from 'react';

import styled from 'styled-components';

import { device } from 'components/Theme';

const Wrapper = styled.div`
    text-align: center;
    font-size: 24px;
    margin-top: 100px;

    @media ${device.lg} {
      font-size: 30px;
    }
`;
const ProfileNotFound = () => (
  <Wrapper>
    Профиль не найден
  </Wrapper>
);

export default ProfileNotFound;
