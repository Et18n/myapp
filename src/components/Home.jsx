import Calendar from 'react-calendar';
import { Link } from 'react-router-dom'

let ValuePiece = Date | null;

let Value = ValuePiece | [ValuePiece, ValuePiece];
function Home(){
    

    return(
        <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
  />
  <title>Home - Brand</title>
  <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic&display=swap"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Cabin:700&display=swap"
  />
  <link rel="stylesheet" href="/assets/fonts/font-awesome.min.css" />
  <nav className="navbar navbar-expand-md fixed-top navbar-light" id="mainNav">
    <div className="container">
      <a className="navbar-brand" href="#">
        Logo
      </a>
      <button
        data-bs-toggle="collapse"
        className="navbar-toggler navbar-toggler-right"
        data-bs-target="#navbarResponsive"
        type="button"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        value="Menu"
      >
        <i className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item nav-link" />
          <li className="nav-item nav-link">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item nav-link">
            <a className="nav-link" href="/signup">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <header
    className="masthead"
    style={{ backgroundImage: 'url("/assets/img/intro-bg.jpg")' }}
  >
    <div className="intro-body">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="brand-heading" style={{ fontSize: 50 }}>
              De-addiction
            </h1>
            <p className="intro-text" />
            <a className="btn btn-link btn-circle" role="button" href="#about">
              <i className="fa fa-angle-double-down animated" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section className="text-center content-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2>About Drug-Addiction</h2>
          <p>
          Drug addiction, also called substance use disorder, is a disease that affects a person's brain and behavior and leads to an inability to control the use of a legal or illegal drug or medicine. Substances such as alcohol, marijuana and nicotine also are considered drugs. When you're addicted, you may continue using the drug despite the harm it causes.

Drug addiction can start with experimental use of a recreational drug in social situations, and, for some people, the drug use becomes more frequent. For others, particularly with opioids, drug addiction begins when they take prescribed medicines or receive them from others who have prescriptions.
          </p>
          <p>
            For more information on such issues visit :<Link to="https://www.mayoclinic.org/diseases-conditions/drug-addiction/symptoms-causes/syc-20365112">Mayoclinic//Drug//Deaddiction</Link>
          </p>
          
        </div>
      </div>
    </div>
  </section>
  
  
  {/* Start: Map Clean */}
  
  {/* End: Map Clean */}
  <footer>
   
  </footer>
</>
    );
}


export default Home