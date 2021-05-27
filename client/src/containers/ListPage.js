import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

class ListPage extends Component {
    render() {
        return (
            <ul>
                {this.props.birds.map(bird => {
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