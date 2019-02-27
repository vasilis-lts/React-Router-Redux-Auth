import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { changeLoggedIn } from './reduxStore/actions';

class Login extends Component {

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });

  }

  handleSubmit = (event) => {
    this.props.setUserAuthStatus('loggedIn')
    event.preventDefault();
  }


  render() {

    if (this.props.loggedIn) {
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      return <Redirect to={from} />
    }
    return (
      <div className='login-form'>
        <h1 className='text-center'>Login</h1>
        <form className='flex-column' onSubmit={this.handleSubmit}>
          <label>
            Username
          </label>
          <input name="username" type="text" onChange={this.handleInputChange} />
          <label>
            Password
          </label>
          <input name="password" type="password" onChange={this.handleInputChange} />
          <button onClick={() => { this.props.changeLoggedIn(true) }}>Login</button>
        </form>
      </div>
    )
  }

}

export default connect(
  state => ({
    loggedIn: state.loggedIn
  }),
  {
    changeLoggedIn,
  }
)(Login);