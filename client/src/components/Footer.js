import React from 'react';
import styled from 'styled-components/macro';
import { FadeIn } from 'animate-css-styled-components';

const Footer = () => {
  return (
    <FadeIn delay='2s'>
      <Wrapper>
        <ImageCredit>
          Images Courtesy of the John James Audubon Center at Mill Grove,
          Montgomery County Audubon Collection, and Zebra Publishing
        </ImageCredit>
      </Wrapper>
    </FadeIn>
  );
};

const Wrapper = styled.div`
  border-top: 1px solid black;
`;
const ImageCredit = styled.div`
  padding: 24px;
  text-align: center;
`;

export default Footer;
