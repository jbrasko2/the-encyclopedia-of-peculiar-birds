import React from 'react'
import styled from 'styled-components/macro'

const BirdCard = props => {
    const { name, scientificName, imgUrl } = props

    return (
        <Wrapper>
            <NameWrapper>
                <h2>{name}</h2>
                <h4>({scientificName})</h4>
            </NameWrapper>
            <img src={imgUrl} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 600px;
    width: 400px;
    background: hsl(45, 35%, 90%);
    margin: 16px;
    padding: 16px;
    border-radius: 8px;

    img {
        display: block;
        width: 75%;
        margin: auto;
    }
`
const NameWrapper = styled.div`
    text-align: center;
    
    > * {
        margin: 8px;
    }
`

export default BirdCard