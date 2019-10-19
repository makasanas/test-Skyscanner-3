import React from "react";
import "./login.scss";

class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      statesignUpClass: "active-dx",
      statesignInClass: "inactive-sx",
      wrongPassCount: 0
    }
  };

  signUpClick = () => {
    this.setState({
      statesignUpClass: "active-sx",
      statesignInClass: "inactive-dx"
    });
  };

  signInClick = () => {
    this.setState({
      statesignUpClass: "inactive-sx",
      statesignInClass: "active-dx"
    });
  };

  formSubmit = form => e => {
    e.preventDefault();

    if(form === "login")
    this.setState({wrongPassCount: this.state.wrongPassCount+1})
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  openPolicy = () => {
    window.open(`${window.location.origin}/policy`, '_blank');
  }

  render() {
    console.log("dfdfd");
    return (
      <div>
        <section className="loginPage">
          <div className="container">
            <div id="formWrap">
              <div id="signupDiv" className={this.state.statesignUpClass}>
                <form className="signUp form-lr" onSubmit={this.formSubmit("signin")} >
                  <h1 >SIGN UP</h1>
                  <input
                    name="signName"
                    type="text"
                    placeholder="Name"
                    required={true}
                    value={this.state.signName}
                    onChange={this.handleChange}
                    />
                  <input
                    name="signMail"
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    required={true}
                    value={this.state.signMail}
                    onChange={this.handleChange}

                  />
                  <input
                    name="signPass"
                    type="password"
                    placeholder="Password"
                    required={true}
                    value={this.state.signPass}
                    onChange={this.handleChange}

                  />
                  <input
                    name="signRepass"
                    type="password"
                    placeholder="Retype password"
                    required={true}
                    value={this.state.signRepass}
                    onChange={this.handleChange}
                  />
                  <p>
                    By register I Accept the <span onClick={this.openPolicy}>Terms and Policy</span>
                  </p>
                  <button className="form-btn sign-up"  onClick={this.formSubmit("signin")} >Register</button>
                  <h2>
                    Already have an account ? <span onClick={this.signInClick}>Login</span>
                  </h2>
                </form>
              </div>

              <div id="signinDiv" className={this.state.statesignInClass}>
                <form className="signInForm form-lr" onSubmit={this.formSubmit("login")}>
                  <h1 className="signinHeader">SIGN IN</h1>
                  <input
                    name="logName"
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    required
                    value={this.state.logName}
                    onChange={this.handleChange}

                  />
                  <input
                    name="logPass"
                    type="password"
                    placeholder="Password"
                    required
                    value={this.state.logPass}
                    onChange={this.handleChange}
                  />
                  <p>
                  {
                    this.state.wrongPassCount
                    ? <span>Forgot password?</span>
                    : null
                  }
                  </p>
                  <button className="form-btn login" onClick={this.formSubmit("login")} >Login</button>
                  <h2>
                    Don't have an account? <span onClick={this.signUpClick}>Sign Up</span>
                  </h2>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;