import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

class ListPage2 extends Component {
    render() {

        const birdLetters = this.props.birds.map(bird => bird.name[0])
        const uniqueLetters = [...new Set(birdLetters)]

        return (
            <Wrapper>
                {uniqueLetters.map(letter => {
                    return (
                        <LetterWrapper>
                            <h1>{letter}</h1>
                            <ul>
                                {this.props.birds.map(bird => {
                                    if (bird.name.startsWith(letter)) {
                                        return (
                                            <BirdName>
                                                <Link to={"/birds/" + bird.id} style={{ textDecoration: 'none' }}>{bird.name}</Link>
                                            </BirdName>
                                        )
                                    } else {
                                        return
                                    }
                                })}
                            </ul>
                        </LetterWrapper>
                    )
                })}
                </Wrapper>
        )
    }
}

const Wrapper = styled.div`
`

const LetterWrapper = styled.div`
    display: inline-block;
    text-align: center;
    width: 25%;
    margin-left: 16px;
`

const BirdName = styled.li`
    margin-left: -16px;
    list-style-type: none;

    a {
        color: black;

        &:hover {
            color: red;
        }
    }
`

const mapStateToProps = state => ({
    birds: state.birds.birds
})

export default connect(mapStateToProps)(ListPage2)