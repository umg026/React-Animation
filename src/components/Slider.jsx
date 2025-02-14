import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const slides = [
    { title: 'First item', description: 'Lorem ipsum', path:"/assets/images/demo1.jpg"},
    { title: 'Second item', description: 'Lorem ipsum',path:"/assets/images/demo2.jpg" },
    { title: 'Second item', description: 'Lorem ipsum',path:"/assets/images/demo3.jpg" }

  ];


export default function Sliders() {
  return (
        <Slider 
        autoplay={2000}
        duration={1000}
        infinite={true}
        >
            {slides.map((slide, index) => <div key={index}>
                <h2>{slide.title}</h2>
                <div>{slide.description}</div>

                <img src={slide.path} alt={slide.title} className="d-block" style={{ width: '100%' }} />
            </div>)}
        </Slider>
  )
}
