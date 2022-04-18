import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  ${({ theme }) => `
    width: 315px;
    background-color: ${theme.colors.white};
    border-radius: 15px;
    padding-bottom: 45px;
    margin: 20px 15px;
  `}
`;
const ImageInner = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  border-radius: 15px 15px 0 0;
`;
const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 0 15px;
`;
const Text = styled.div`
  font-size: 16px;
  font-weight: 100;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Project = ({ project }) => {
  console.log();

  return (
    <Wrapper>
      <ImageInner>
        <StyledImage src={project.img} />
      </ImageInner>
      <TextWrapper>
        <Title>{project.title}</Title>
        <Text>{project.desc}</Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default Project;

Project.propTypes = {
  project: PropTypes.shape({
    desc: PropTypes.string.isRequired,
    img: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,

};
