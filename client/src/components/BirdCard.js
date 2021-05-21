import React from 'react'
import styled from 'styled-components/macro'

const BirdCard = props => {
    const { name, scientificName, imgUrl } = props

    return (
        <ul>
            <li>{name}</li>
            <li>{scientificName}</li>
            <img src={imgUrl} />
        </ul>
    )
}

export default BirdCard