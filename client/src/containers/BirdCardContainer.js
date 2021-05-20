import React, { Component } from 'react'
import { connect } from 'react-redux'
import BirdCard from '../components/BirdCard'
import SearchBar from '../components/SearchBar'

class BirdCardContainer extends Component {
    
    renderPage = () => {
        return (
            <>
                <SearchBar />
                <div>
                    {this.props.birds.map(bird => <BirdCard key={bird.id} {...bird} />)}
                </div>
            </>
        )
    }

    renderSpinner = () => <div className="loader"></div>
    
    render() {
        return (
            this.props.requesting ? this.renderSpinner() : this.renderPage()
        )
    }
}

const mapStateToProps = state => ({
    birds: state.birds.birds,
    requesting: state.birds.requesting
})

export default connect(mapStateToProps)(BirdCardContainer)