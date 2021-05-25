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
            <Wrapper>
                <Name>{name}</Name>
                <Scientific>{scientificName}</Scientific>
                <BirdImage src={require('../bird-images/' + imgUrl).default} />
                <p>Order: {order}</p>
                <p>Family: {family}</p>
                <p>Genus: {genus}</p>
                <p>Species: {species}</p>
                <Description>{description}</Description>
            </Wrapper>
        )
    }

    renderSpinner = () => <div className="loader">Spinner</div>

    render() {
        return (
            this.props.id ? this.renderPage() : this.renderSpinner()
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin: 0;
    }
`

const Name = styled.div`
    font-size: 2rem;
    margin: 24px;
`

const Scientific = styled.div`
    font-size: 1.5rem;
    font-style: italic;
`

const BirdImage = styled.img`
    height: 600px;
    width: 450px;
    margin: 24px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
`

const Description = styled.div`
    max-width: 800px;
    font-size: 1.25rem;
    margin: 12px;
`

const mapStateToProps = state => ({
    ...state.birds.selectedBird
})

export default connect(mapStateToProps, { setSelectedBird, unsetBird})(BirdPage)
