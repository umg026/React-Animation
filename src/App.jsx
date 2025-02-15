import AnimatedCursor from "react-animated-cursor"
import './App.css';
import Sliders from "./components/Slider";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const wrapper = document.querySelector(".words");
    const words = wrapper.querySelectorAll("span");
    const CURRENT_CLASS = "current";
    const NEXT_CLASS = "next";

    if (!wrapper || words.length === 0) return;

    // Set initial width properties
    const wordsWidths = Array.from(words).map((word) => word.offsetWidth);
    const maxWordsWidth = Math.max(...wordsWidths);
    const currentWord = wrapper.querySelector("span.current");

    wrapper.style.setProperty("--width", `${currentWord.offsetWidth}px`);
    wrapper.style.setProperty("--width-mobile", `${maxWordsWidth}px`);

    // Function to cycle words
    const changeWords = () => {
      const currentWord = wrapper.querySelector("span.current");
      const nextWord = wrapper.querySelector("span.next");
      const nextNextWord = nextWord.nextElementSibling
        ? nextWord.nextElementSibling
        : wrapper.firstElementChild;

      currentWord.classList.remove(CURRENT_CLASS);
      nextWord.classList.remove(NEXT_CLASS);
      nextWord.classList.add(CURRENT_CLASS);
      nextNextWord.classList.add(NEXT_CLASS);

      wrapper.style.setProperty("--color", nextWord.dataset.color);
      wrapper.style.setProperty("--color-bg", nextWord.dataset.bgColor);
      wrapper.style.setProperty("--width", `${nextWord.offsetWidth}px`);
    };

    // Run the function every 1.5 seconds
    const interval = setInterval(changeWords, 1500);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);

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
        innerStyle={{
          zIndex: 1100,
        }}
      /> s
      <Navbar />
      <div className="overlay">
        <Sliders />
      </div>
      <div className="home-layer">
        <div className="content-layers container">
          <div className="circle-text">
            <svg viewBox="0 0 200 200">
              <path id="circlePath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" fill="none" />
              <text>
                <textPath href="#circlePath" startOffset="0">
                  Your art is secured for life, thats our promise!
                </textPath>
              </text>
            </svg>
          </div>

          <h1 className="words-wrapper">
            Your <span className="css">Tattoo</span> is <br /> about Your
            <span className="words">
              <span className="current" data-bg-color="#fff" data-color="#000">Story</span>
              <span className="next" data-bg-color="#fff" data-color="#000">Values</span>
              <span data-bg-color="#fff" data-color="#000">Style</span>
              <span data-bg-color="#fff" data-color="#000">LifeStyle</span>
              <span data-bg-color="#fff" data-color="#000">Belief</span>
              <span data-bg-color="#fff" data-color="#000">Personalities</span>
            </span>
          </h1>
          <p className="text-white">
            We are a team of award-winning tattoo artists here to help you get the perfect creative custom tattoo which is uniquely designed based on your ideas, values and beliefs. Aliens Tattoo is the brand people trust, we are recognised as one of the best tattoo studios in Mumbai / India.
          </p>
        </div>
      </div>
      <div className="d-flex flex-column fixed-bottom">
        <div className="bg-white">
          <img style={{ height: "40px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWg7X0YYzUCU5m8BA_sH_ti92q4X0lCz5h_w&s" alt="" />
          <p>
            Goggle
            <br />
            review
          </p>
          <p>4.2</p>
        </div>

        <div className="bg-white">
          <img style={{ height: "40px" }} src="https://yt3.googleusercontent.com/ytc/AIdro_mb80wB3lW1R92ute2k_XUYeYehXzItE0QCBRawOraA6S0=s900-c-k-c0x00ffffff-no-rj" alt="" />
          <p>
            Instagram
            <br />
            Followers
          </p>
          <p>121K</p>
        </div>
      </div>
    </div>
  );
}

export default App;
