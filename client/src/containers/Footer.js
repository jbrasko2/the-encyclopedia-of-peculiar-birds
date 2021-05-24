import React from 'react'
import styled from 'styled-components/macro'

const Footer = () => {
    return (
        <Wrapper>
            <ImageCredit>
                Images Courtesy of the John James Audubon Center at Mill Grove, Montgomery County Audubon Collection, and Zebra Publishing
            </ImageCredit>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border-top: 1px solid black;
`
const ImageCredit = styled.div`
    padding: 24px;
    font-size: 1.25rem;
    text-align: center;
`

export default Footer