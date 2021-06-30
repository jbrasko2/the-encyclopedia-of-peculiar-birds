import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ListPage = () => {
  const birds = useSelector(state => state.birds.birds);
  const birdLetters = birds.map(bird => bird.name[0]);
  const uniqueLetters = [...new Set(birdLetters)];

  return (
    <Wrapper>
      {uniqueLetters.map(letter => {
        return (
          <LetterWrapper>
            <h1>{letter}</h1>
            <ul>
              {birds.map(bird => {
                if (bird.name.startsWith(letter)) {
                  return (
                    <BirdName>
                      <Link
                        to={'/birds/' + bird.id}
                        style={{ textDecoration: 'none' }}
                      >
                        {bird.name}
                      </Link>
                    </BirdName>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </LetterWrapper>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const LetterWrapper = styled.div`
  width: 25%;
  margin-left: 16px;
`;

const BirdName = styled.li`
  margin-left: -16px;

  a {
    color: black;
    transition: 0.5s;

    &:hover {
      color: deeppink;
    }
  }
`;

export default ListPage;
