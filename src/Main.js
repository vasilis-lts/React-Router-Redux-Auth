import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginRequiredRoute from './LoginRequiredRoute';
import Loading from './Loading';
import Login from './Login';
import App from './App';
import { changeLoggedIn } from './reduxStore/actions';


class Main extends Component {
  componentDidMount() {
    const that = this;
    setTimeout(() => { that.props.changeLoggedIn(false) }, 1000);
  }

  render() {
    if (this.props.loggedIn === null) {
      return <Loading />
    }

    return (
      <Switch>
        <Route path="/login/" component={Login} />
        <LoginRequiredRoute component={App} />
      </Switch>
    )
  }
}


export default withRouter(connect(
  state => ({
    loggedIn: state.loggedIn,
  }), {
    changeLoggedIn,
  }
)(Main));