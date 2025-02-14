import AnimatedCursor from "react-animated-cursor"
import './App.css';
import Sliders from "./components/Slider";

function App() {
  
  return (
    <div>
      <AnimatedCursor 
      color="255, 255, 255"
      innerSize={10}
      outerSize={30}
      outerScale={1.5} 
      outerAlpha={1}
      outerStyle={{
        border: "1px solid rgba(255, 255, 255, 1)",
      }}
      />

      <div className="bgded">
        <div className="wrapper row1">
          <header id="header" className="hoc clear">
            <div id="logo" className="fl_left">
              <h1>
                <a href="/" className="logo-title">
                  TattoWale
                </a>
              </h1>
            </div>
            <nav id="mainav" className="fl_right">
              <ul className="clear">
                <li className="active"><a href="/">Home</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Why us</a></li>
                <li><a href="#">Gallery</a></li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="overlay">
          <Sliders />
          {/* <div id="demo" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="1000">
                <img src="/assets/images/demo1.jpg" alt="Los Angeles" className="d-block" style={{ width: '100%' }} />
              </div>
              <div className="carousel-item" data-bs-interval="1000">
                <img src="/assets/images/demo2.jpg" alt="Chicago" className="d-block" style={{ width: '100%' }} />
              </div>
              <div className="carousel-item" data-bs-interval="1000">
                <img src="/assets/images/demo3.jpg" alt="New York" className="d-block" style={{ width: '100%' }} />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <a id="backtotop" href="#top"><i className="fas fa-chevron-up" /></a>
    </div>
  );
}

export default App;
