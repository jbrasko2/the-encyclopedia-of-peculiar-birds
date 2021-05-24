import React, { Component } from 'react'
import { connect } from 'react-redux'
import BirdCard from '../components/BirdCard'
import styled from 'styled-components/macro'

class BirdCardContainer extends Component {
    
    renderPage = () => {
        return (
            <>
                <Wrapper>
                    {this.props.birds.map(bird => <BirdCard key={bird.id} {...bird} />)}
                </Wrapper>
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
`

const mapStateToProps = state => ({
    birds: state.birds.birds,
    requesting: state.birds.requesting
})

export default connect(mapStateToProps)(BirdCardContainer)