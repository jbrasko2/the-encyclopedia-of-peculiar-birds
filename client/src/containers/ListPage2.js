import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

class ListPage2 extends Component {
    render() {
        return (
            alphabet.map(letter => {
                return (
                    <Wrapper>
                        {this.props.birds.map(bird => {
                            if (bird.name.startsWith(letter)) {
                                return (
                                    <h1>{letter}</h1>
                                )
                            } else {
                                return
                            }
                        })}
                        <ul>
                            {this.props.birds.map(bird => {
                                if (bird.name.startsWith(letter)) {
                                    return (
                                        <li>{bird.name}</li>
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