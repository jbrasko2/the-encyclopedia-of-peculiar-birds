import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

class ListPage2 extends Component {
    render() {

        const birdLetters = this.props.birds.map(bird => bird.name[0])
        const uniqueLetters = [...new Set(birdLetters)]

        return (
            uniqueLetters.map(letter => {
                return (
                    <Wrapper>
                        <h1>{letter}</h1>
                        <ul>
                            {this.props.birds.map(bird => {
                                if (bird.name.startsWith(letter)) {
                                    return (
                                        <Link to={"/birds/" + bird.id}>
                                            <li>{bird.name}</li>
                                        </Link>
                                    )
                                } else {
                                    return
                                }
                            })}
                        </ul>
                    </Wrapper>
                )
            })
        )
    }
}

const Wrapper = styled.div`

`

const mapStateToProps = state => ({
    birds: state.birds.birds
})

export default connect(mapStateToProps)(ListPage2)