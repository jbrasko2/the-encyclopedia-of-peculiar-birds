import React from 'react';
import { setSelectedBird, unsetBird } from '../redux/actionCreators';
import styled from 'styled-components/macro';
import { FadeInUp, FadeIn } from 'animate-css-styled-components';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const BirdPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const bird = useSelector(state => state.birds.selectedBird);

  useEffect(() => {
    dispatch(setSelectedBird(id));
    return () => {
      unsetBird(id);
    };
  }, [id, dispatch]);

  const renderPage = () => {
    const {
      name,
      scientificName,
      order,
      family,
      genus,
      species,
      conservation,
      description,
      imgUrl,
    } = bird;

    return (
      <Wrapper>
        <FadeInUp>
          <Name>{name}</Name>
        </FadeInUp>
        <FadeInUp delay='0.25s'>
          <Scientific>{scientificName}</Scientific>
        </FadeInUp>
        <FadeIn delay='0.5s' duration='2s'>
          <BirdImage
            src={`${process.env.PUBLIC_URL}/assets/bird-images/${imgUrl}`}
            alt={name}
          />
        </FadeIn>
        <FadeInUp delay='1s'>
          <p>Order: {order}</p>
          <p>Family: {family}</p>
          <p>
            Genus: <i>{genus}</i>
          </p>
          <p>
            Species: <i>{species}</i>
          </p>
          <p>Conservation: {conservation}</p>
        </FadeInUp>
        <FadeInUp delay='1.25s'>
          <Description>{description}</Description>
        </FadeInUp>
        <Footer />
      </Wrapper>
    );
  };

  const renderSpinner = () => <div className='loader'></div>;

  return id ? renderPage() : renderSpinner();
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
  }
`;

const Name = styled.div`
  font-size: 2rem;
  margin: 24px;
`;

const Scientific = styled.div`
  font-size: 1.5rem;
  font-style: italic;
`;

const BirdImage = styled.img`
  height: 600px;
  width: 450px;
  margin: 24px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
`;

const Description = styled.div`
  text-align: center;
  max-width: 1000px;
  font-size: 1.25rem;
  margin: 12px;
`;

export default BirdPage;
