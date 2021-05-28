import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { getBirds } from './redux/actionCreators'
import { connect } from 'react-redux'
import BirdCardContainer from './containers/BirdCardContainer'
import BirdPage from './containers/BirdPage'
import ListPage2 from './containers/ListPage'
import NavBar from './containers/Navbar'
import Footer from './containers/Footer'

class App extends Component {

  componentDidMount() {
    this.props.getBirds()
  }

  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={BirdCardContainer} />
          <Route exact path="/birds" component={BirdCardContainer} />
          <Route exact path="/birds/:id" component={BirdPage} />
          <Route exact path="/list" component={ListPage2} />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default connect(null, { getBirds })(App)
