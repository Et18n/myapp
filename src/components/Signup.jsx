import { useNavigate } from "react-router-dom";





function Signup() {
  
    const v=useNavigate()
    
    const handle=async(e)=>{
      v("/")
    }
  
  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>Login1</title>
      <link
        rel="stylesheet"
        href="/assets/bootstrap/css/bootstrap.min.css?h=896192cc65e20f1fcc6d792b5b9a4626"
      />
      <link
        rel="stylesheet"
        href="/assets/css/Login-with-overlay-image.css?h=22499ec702aa86f2b223837233dc4445"
      />
      {/* Start: Login with overlay image */}
      <div id="main-wrapper" className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0">
              <div className="card-body p-0">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="mb-5">
                        <h3 className="h4 font-weight-bold text-theme">
                          Sign Up
                        </h3>
                      </div>
                      <h6 className="h5 mb-0">Hello New User</h6>
                      <p className="text-muted mt-2 mb-5">
                        Enter your Username and password
                      </p>
                      <form>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Username</label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                          />
                        </div>
                        <div className="form-group mb-5">
                          <label htmlFor="exampleInputPassword1">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                        <a href="/signup">
                          <button type="submit" className="btn btn-theme" onClick={handle}>
                            Sign up
                          </button>
                        </a>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-inline-block">
                    <div className="account-block rounded-right">
                      <div className="overlay rounded-right" />
                      <div className="account-testimonial">
                        <h4 className="text-white mb-4">
                        </h4>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card-body */}
            </div>
            {/* end card */}
            <p className="text-muted text-center mt-3 mb-0">
             
            </p>
            {/* end row */}
          </div>
          {/* end col */}
        </div>
        {/* Row */}
      </div>
      {/* End: Login with overlay image */}
    </>
  );
}

export default Signup;
