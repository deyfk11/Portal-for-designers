import React from 'react';

import styled from 'styled-components';

import { device } from 'components/Theme';

import Error404 from 'assets/error404.png';

const Wrapper = styled.div`
  background-color: #FFFFFF;
  padding: 60px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
`;
const Text = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  padding: 0 10px;

  @media ${device.md} {
    font-size: 16px;
    padding: 0px;
  }
`;
const Title = styled.p`
  font-size: 16px;
  font-weight: bold;

  @media ${device.lg} {
    font-size: 24px;
  }
`;
const Image = styled.img`
  display: none;

  @media ${device.lg} {
    display: block;
    margin-top: 40px;
  }
`;

const PageNotFound = () => (
  <Wrapper>
    <Title>Страница не найдена :(</Title>
    <Text>Наш сервер не может найти данные по этому запросу.</Text>
    <Text>Попробуйте перезагрузить страницу или перейти на главную.</Text>
    <Image alt="Error 404" src={Error404} />
  </Wrapper>
);

export default PageNotFound;
