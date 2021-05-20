import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { getBirds } from './redux/actionCreators'
import { connect } from 'react-redux'
import BirdCardContainer from './containers/BirdCardContainer';

class App extends Component {

  componentDidMount() {
    this.props.getBirds()
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={BirdCardContainer} />
        </Switch>
      </>
    )
  }
}

export default connect(null, { getBirds })(App)
