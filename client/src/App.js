import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import BirdCard from './components/BirdCard'
import { getBirds } from './redux/actionCreators'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.getBirds()
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={BirdCard} />
        </Switch>
      </>
    )
  }
}

export default connect(null, { getBirds })(App)
