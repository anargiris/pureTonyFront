import "react-slideshow-image/dist/styles.css";

import { Slide, Zoom } from "react-slideshow-image";

const slideImages = ["/back.jpg", "/main.jpg", "/masks.jpg"];
const MainShowcase = () => {
  return (
    // <div className="slide-container w-full">
    //   <Slide>
    //     <div className="each-slide">
    //       <div
    //         style={{ backgroundImage: `url(${slideImages[0]})` }}
    //         className="h-80 object-cover"
    //       ></div>
    //     </div>
    //     <div className="each-slide">
    //       <div
    //         style={{ backgroundImage: `url(${slideImages[1]})` }}
    //         className="h-80 object-cover"
    //       ></div>
    //     </div>
    //     <div className="each-slide">
    //       <div
    //         style={{ backgroundImage: `url(${slideImages[2]})` }}
    //         className="h-80 object-cover"
    //       ></div>
    //     </div>
    //   </Slide>
    // </div>
    <div className="slide-container">
      <Zoom scale={0.4}>
        {slideImages.map((each, index) => (
          <img key={index} className="w-full h-96 object-cover" src={each} />
        ))}
      </Zoom>
    </div>
  );
};

export default MainShowcase;
