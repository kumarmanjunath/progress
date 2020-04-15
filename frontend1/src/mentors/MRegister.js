import React, { Component } from "react";
import Signup from "../mentors/MSignup.css";

class Register extends Component {
  render() {
    return (
      <div>
        <header className='masthead bg-dark '>
          <div id='container-register'>
            <div id='title'>
              <i class='material-icons lock'>lock</i> Register
            </div>

            <form>
              <div class='input'>
                <div class='input-addon'>
                  <i class='material-icons'>email</i>
                </div>
                <input
                  id='email'
                  placeholder='Email'
                  type='email'
                  required
                  class='validate'
                  autocomplete='off'
                />
              </div>

              <div class='clearfix'></div>

              <div class='input'>
                <div class='input-addon'>
                  <i class='material-icons'>face</i>
                </div>
                <input
                  id='username'
                  placeholder='Username'
                  type='text'
                  required
                  class='validate'
                  autocomplete='off'
                />
              </div>

              <div class='clearfix'></div>

              <div class='input'>
                <div class='input-addon'>
                  <i class='material-icons'>vpn_key</i>
                </div>
                <input
                  id='password'
                  placeholder='Password'
                  type='password'
                  required
                  class='validate'
                  autocomplete='off'
                />
              </div>

              <div class='remember-me'>
                <input type='checkbox' />
                <span style={{ color: "#DDD" }}>
                  {" "}
                  I accept Terms of Service
                </span>
              </div>

              <input type='submit' value='Register' />
            </form>

            <div class='privacy'>
              <a href='#'>Privacy Policy</a>
            </div>

            <div class='register'>
              Do you already have an account?
              <a href='/login'>
                <button id='register-link'>Log In here</button>
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Register;
