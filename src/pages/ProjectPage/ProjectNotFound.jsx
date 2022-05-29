import React from 'react';

import styled from 'styled-components';

import { device } from 'components/Theme';

const Wrapper = styled.div`
    margin: 0 auto;
    font-size: 24px;
    margin-top: 100px;

    @media ${device.lg} {
        font-size: 30px;
    }
`;
const ProjectNotFound = () => (
  <Wrapper>
    Проект не найден
  </Wrapper>
);

export default ProjectNotFound;
