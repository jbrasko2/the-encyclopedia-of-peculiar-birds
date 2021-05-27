import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const BirdCard = props => {
    const { id, name, scientificName, imgUrl } = props

    return (
        <Link to={'/birds/' + id}>
            <Wrapper>
                <img src={require('../bird-images/' + imgUrl).default} />
                <NameWrapper>
                    <h2>{name}</h2>
                    <h4>({scientificName})</h4>
                </NameWrapper>
            </Wrapper>
        </Link>
    )
}

const Wrapper = styled.div`
    position: relative;
    height: 500px;
    width: 300px;
    margin: 32px;
    padding: 16px;
    color: black;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;    
    
    img {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        margin: auto;
    }
`
const NameWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    
    > * {
        text-align: center;
    }
`

export default BirdCard