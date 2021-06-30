import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const BirdCard = props => {
  const { id, name, scientificName, imgUrl } = props;

  return (
    <Wrapper>
      <Link to={'/birds/' + id}>
        <img src={require('../bird-images/' + imgUrl).default} alt={name} />
        <NameWrapper>
          <h2>{name}</h2>
          <h4>({scientificName})</h4>
        </NameWrapper>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 500px;
  width: 300px;
  margin: 32px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 4px 8px 16px 4px rgba(0, 0, 0, 0.22);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    margin: auto;
  }

  a {
    color: inherit;
  }
`;
const NameWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  > * {
    text-align: center;
  }
`;

export default BirdCard;
