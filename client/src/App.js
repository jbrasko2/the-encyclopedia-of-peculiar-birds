import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { getBirds } from './redux/actionCreators'
import { connect } from 'react-redux'
import BirdCardContainer from './containers/BirdCardContainer'
import BirdPage from './containers/BirdPage'

class App extends Component {

  componentDidMount() {
    this.props.getBirds()
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={BirdCardContainer} />
          <Route exact path="/birds" component={BirdCardContainer} />
          <Route exact path="/birds/:id" component={BirdPage} />
        </Switch>
      </>
    )
  }
}

export default connect(null, { getBirds })(App)
