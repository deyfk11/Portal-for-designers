import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';

import { device } from 'components/Theme';

const Wrapper = styled.div`
  display: flex;
  margin-top: 60px;
  border-radius: 20px;
  flex-direction: column;

  @media ${device.lg} {
    background-color: #FFFFFF;
    padding: 0 30px 30px 30px;
  }
  @media ${device.lg} {
    padding: 0 60px 60px 60px;
  }
`;
const UserPhoto = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  margin-bottom: 30px;

  @media ${device.sm} {
    margin-top: 60px;
  }
`;
const ImageList = ({ images }) => (
  <Wrapper>
    {images && images.map((image) => (
      <UserPhoto alt="User photo" key={image} src={image} />
    ))}
  </Wrapper>
);

export default ImageList;

ImageList.defaultProps = {
  images: [],
};
ImageList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};
