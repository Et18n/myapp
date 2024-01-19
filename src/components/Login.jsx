function Login() {
  return (
    <>
      <div className="main_Login">
        <div className="box">
          <h1>Login</h1>
          <div className="input">
            <div className="username">
              
              <input id="user" type="text" placeholder="Username" />
            </div>
            <div className="password">
              
              <input id="pass" type="text" placeholder="Password" />
            </div>
          </div>
          <div id="btn_Submit">
            <button id="Submit_login">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
