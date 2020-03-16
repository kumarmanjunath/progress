import React, { Component } from "react";

class login extends Component {
  render() {
    return (
      <div>
        <header className='masthead bg-dark '>
          <div id='container-login'>
            <div id='title'>
              <i className='material-icons lock'>lock</i> Login
            </div>

            <form action='/nextpage'>
              <div className='input'>
                <div className='input-addon'>
                  <i className='material-icons'>face</i>
                </div>
                <input
                  id='username'
                  placeholder='Username'
                  type='text'
                  required
                  className='validate'
                  autocomplete='off'
                />
              </div>

              <div className='clearfix'></div>

              <div className='input'>
                <div className='input-addon'>
                  <i className='material-icons'>vpn_key</i>
                </div>
                <input
                  id='password'
                  placeholder='Password'
                  type='password'
                  required
                  className='validate'
                  autocomplete='off'
                />
              </div>

              <div className='remember-me'>
                <input type='checkbox' />
                <span style={{ color: "#DDD" }}>Remember Me</span>
              </div>

              <input type='submit' value='Log In' />
            </form>

            <div className='forgot-password'>
              <a href='#'>Forgot your password?</a>
            </div>
            <div className='privacy'>
              <a href='#'>Privacy Policy</a>
            </div>

            <div className='register'>
              Don't have an account yet?
              <a href='/register'>
                <button id='register-link'>Register here</button>
              </a>
            </div>
          </div>{" "}
          ;
        </header>
      </div>
    );
  }
}

export default login;
