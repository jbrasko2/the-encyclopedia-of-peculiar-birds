import React from 'react'
import styled from 'styled-components/macro'

const Title = () => {
    return (
        <SiteTitle>The Encyclopedia of Peculiar Birds</SiteTitle>
    )
}

const SiteTitle = styled.div`
    font-size: 2rem;
    display: inline-block;
    margin-left: 12px;
`

export default Title