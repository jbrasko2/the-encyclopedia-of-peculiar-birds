import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedBird, unsetBird } from '../redux/actionCreators'
import styled from 'styled-components/macro'

class BirdPage extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.setSelectedBird(id)
    }

    componentWillUnmount() {
        this.props.unsetBird()
    }

    renderPage = () => {
        const { id, name, scientificName, order, family, genus, species, conservation, description, imgUrl } = this.props
        return (
            <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{scientificName}</li>
                <li>{order}</li>
                <li>{family}</li>
                <li>{genus}</li>
                <li>{species}</li>
                <li>{conservation}</li>
                <li>{description}</li>
                <img src={require('../bird-images/' + imgUrl).default} />
            </ul>
        )
    }

    renderSpinner = () => <div className="loader">Spinner</div>

    render() {
        return (
            this.props.id ? this.renderPage() : this.renderSpinner()
        )
    }
}

const mapStateToProps = state => ({
    ...state.birds.selectedBird
})

export default connect(mapStateToProps, { setSelectedBird, unsetBird})(BirdPage)