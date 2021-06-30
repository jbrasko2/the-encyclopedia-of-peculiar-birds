import React from 'react'
import BirdCard from '../components/BirdCard'
import SearchBar from '../components/SearchBar'
import styled from 'styled-components/macro'
import { FadeIn } from 'animate-css-styled-components'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'

const BirdCardContainer = () => {
    const birds = useSelector(state => state.birds.birds)
    const requesting = useSelector(state => state.birds.requesting)
    
    const renderPage = () => {
        return (
            <>
                <FadeIn delay=".25s" duration="2s">
                <SearchBar />
                <Wrapper>
                    {birds.map(bird => <BirdCard key={bird.id} {...bird} />)}
                </Wrapper>
                </FadeIn>
                <Footer />
            </>
        )
    }

    const renderSpinner = () => <div className="loader">Spinner</div>
    
    return (
        requesting ? renderSpinner() : renderPage()
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export default BirdCardContainer