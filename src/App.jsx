import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const clickEffect = () => {
      if (cursor) {
        cursor.style.backgroundColor = '#00ff88';
        setTimeout(() => {
          cursor.style.backgroundColor = 'transparent';
        }, 300);
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('click', clickEffect);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('click', clickEffect);
    };
  }, []);

  return (
    <div>
      {/* Cursor Element */}
      <div className="cursor"></div>

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
          <div id="demo" className="carousel slide" data-bs-ride="carousel">
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
          </div>
        </div>
      </div>
      <a id="backtotop" href="#top"><i className="fas fa-chevron-up" /></a>
    </div>
  );
}

export default App;
