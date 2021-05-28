import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedBird, unsetBird } from '../redux/actionCreators'
import styled from 'styled-components/macro'
import { FadeInUp, FadeIn } from 'animate-css-styled-components'
import Footer from '../components/Footer'

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
                <FadeInUp>
                    <Name>{name}</Name>
                </FadeInUp>
                <FadeInUp delay="0.25s">
                    <Scientific>{scientificName}</Scientific>
                </FadeInUp>
                <FadeIn delay="0.5s" duration="2s">
                    <BirdImage src={require('../bird-images/' + imgUrl).default} />
                </FadeIn>
                <FadeInUp delay="1s">
                    <p>Order: {order}</p>
                    <p>Family: {family}</p>
                    <p>Genus: <i>{genus}</i></p>
                    <p>Species: <i>{species}</i></p>
                </FadeInUp>
                <FadeInUp delay="1.25s">
                    <Description>{description}</Description>
                </FadeInUp>
                <Footer />
            </Wrapper>
        )
    }

    renderSpinner = () => <div className="loader"></div>

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
    text-align: center;
    max-width: 1000px;
    font-size: 1.25rem;
    margin: 12px;
`

const mapStateToProps = state => ({
    ...state.birds.selectedBird
})

export default connect(mapStateToProps, { setSelectedBird, unsetBird})(BirdPage)
