import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'
import { searchBirds } from '../redux/actionCreators'

class SearchBar extends Component {
    state = {
        query: ""
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.searchBirds(this.state.query)
    }

    render () {
        return (
            <Wrapper>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})} />
                    <Submit type="submit" value="Search"/>
                </form>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    text-align: center;
`

const Submit = styled.input`

`

export default connect(null, { searchBirds })(SearchBar)