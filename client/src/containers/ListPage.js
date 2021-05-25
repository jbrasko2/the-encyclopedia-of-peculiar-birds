import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

class ListPage extends Component {
    render() {
        const sortedBirds = this.props.birds.sort((a, b) => (a.name > b.name) ? 1 : -1)

        return (
            <ul>
                {sortedBirds.map(bird => {
                     return (
                         <Link to={"/birds/" + bird.id}>
                            <li key={bird.id}>{bird.name} ({bird.scientificName})</li>
                         </Link>
                     )
                })}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    birds: state.birds.birds
})

export default connect(mapStateToProps)(ListPage)