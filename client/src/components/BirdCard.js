import React from 'react'
import styled from 'styled-components/macro'

const BirdCard = props => {
    const { name, scientificName, order, family, genus, species, conservation, description, imgUrl } = props

    return (
        <ul>
            <li>{name}</li>
            <li>{scientificName}</li>
            <li>{order}</li>
            <li>{family}</li>
            <li>{genus}</li>
            <li>{species}</li>
            <li>{conservation}</li>
            <li>{description}</li>
            <img src={imgUrl} />
        </ul>
    )
}

export default BirdCard