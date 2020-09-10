import React, { Component } from 'react';
import './SignUpPage.css';

class SignUpPage extends Component {
  render() {
    return (
      <div className="SignUpPage">
        <div className="SignUpPage__heading">
          <h1>Sign Up Now!</h1>
        </div>
        <div className="SignUpPage__controls">
        <form>
            <label>
                First Name:
            <input type="text" name="first_name" />
            </label>
            <label>
                Last Name:
            <input type="text" name="last_name" />
            </label>
            <label>
                Username:
            <input type="text" name="username" />
            </label>
            <label>
                Password:
            <input type="text" name="password" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    );
  }
}

export default SignUpPage;