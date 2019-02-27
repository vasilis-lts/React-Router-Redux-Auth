import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLoggedIn } from './reduxStore/actions';

const Nav = () => (
  <ul>
    {/* <Link to="/"><li>Home</li></Link> */}
    <Link to="/screen1/"><li>Screen1</li></Link>
    <Link to="/screen2/"><li>Screen2</li></Link>
  </ul>
)


const Screen1 = () => <h1>Screen1</h1>
const Screen2 = () => <h1>Screen2</h1>


const App = (props) => (
  <div>
    <Nav />
    <button onClick={() => { props.changeLoggedIn(false) }}>Logout</button>
    <Switch>
      <Redirect exact from="/" to="/screen1/" />
      <Route path="/screen1/" component={Screen1} />
      <Route path="/screen2/" component={Screen2} />
    </Switch>
  </div>
)


export default connect(
  state => ({
    loggedIn: state.loggedIn,
  }),
  {
    changeLoggedIn
  }
)(App);