import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'

class ListPage extends Component {
    render() {
        return (
            <ul>
                {this.props.birds.map(bird => {
                     return <li key={bird.id}>{bird.name} ({bird.scientificName})</li>
                })}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    birds: state.birds.birds
})

export default connect(mapStateToProps)(ListPage)