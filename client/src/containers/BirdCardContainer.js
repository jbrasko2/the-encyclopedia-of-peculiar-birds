import React, { Component } from 'react'
import { connect } from 'react-redux'
import BirdCard from '../components/BirdCard'
import SearchBar from '../components/SearchBar'
import styled from 'styled-components/macro'
import { FadeIn } from 'animate-css-styled-components'
import Footer from '../components/Footer'

class BirdCardContainer extends Component {
    
    renderPage = () => {
        return (
            <>
                <FadeIn delay=".25s" duration="2s">
                <SearchBar />
                <Wrapper>
                    {this.props.birds.map(bird => <BirdCard key={bird.id} {...bird} />)}
                </Wrapper>
                </FadeIn>
                <Footer />
            </>
        )
    }

    renderSpinner = () => <div className="loader">Spinner</div>
    
    render() {
        return (
            this.props.requesting ? this.renderSpinner() : this.renderPage()
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const mapStateToProps = state => ({
    birds: state.birds.birds,
    requesting: state.birds.requesting
})

export default connect(mapStateToProps)(BirdCardContainer)