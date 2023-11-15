import React, {useRef, useEffect} from "react";
import anime from 'animejs';


const PreLoader = () => {
  const animationRef = useRef(null);
  useEffect(() => {
    animationRef.current =   anime({
      targets: "#brand #topB",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      duration: 2000,
      delay: 4000,
    });
    animationRef.current =   anime({
      targets: "#brand #bottomB",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      duration: 2000,
      delay: 6000,
    });
    animationRef.current =   anime({
      targets: "#brand #circle",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutExpo',
      duration: 2000,
    });
    animationRef.current =  anime({
      targets: "#brand #line3",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      duration: 2000,
      delay: 2000,
    });
    animationRef.current =  anime({
      targets: "#brand #line1",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      duration: 2000,
      delay: 4000,
    });
    animationRef.current =  anime({
      targets: "#brand #line2",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      duration: 2000,
      delay: 6000,
    }); 
  }, []);

  return (
    <div className="loader">
      <div className="svg-wrapper">
        <svg id="brand" width="509" height="500" viewBox="0 0 509 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="circle"
            d="M501.663 250C501.663 384.383 390.917 493.5 254.082 493.5C117.246 493.5 6.5 384.383 6.5 250C6.5 115.618 117.246 6.5 254.082 6.5C390.917 6.5 501.663 115.618 501.663 250Z"
            fill="#0E0E0E" stroke="#9EDDFF" stroke-width="13" />
          <path id="topB" d="M342.429 293.779C342.429 306.438 334.189 318.486 320.541 327.573C306.96 336.616 288.603 342.279 269.886 342.279C251.193 342.279 234.426 336.632 222.424 327.694C210.422 318.757 203.386 306.723 203.386 293.779C203.386 280.835 210.422 268.802 222.424 259.864C234.426 250.927 251.193 245.279 269.886 245.279C288.603 245.279 306.96 250.943 320.541 259.986C334.189 269.073 342.429 281.12 342.429 293.779Z" fill="#0E0E0E" stroke="#9EDDFF" stroke-width="8" />
          <rect x="155.743" y="241" width="106.086" height="111" fill="#0E0E0E" />
          <path id="bottomB" d="M313 202.779C313 229.156 287.219 251.279 260 251.279C233.214 251.279 211.5 229.565 211.5 202.779C211.5 175.993 233.214 154.279 260 154.279C287.219 154.279 313 176.403 313 202.779Z" fill="#0E0E0E" stroke="#9EDDFF" stroke-width="8" />
          <rect x="175" y="150" width="79" height="111" fill="#0E0E0E" />
          <line id="line1" x1="258" y1="155" x2="258" y2="346" stroke="#9EDDFF" stroke-width="8" />
          <line id="line2" x1="259.091" y1="341.745" x2="192.091" y2="270.745" stroke="#9EDDFF" stroke-width="8" />
          <line id="line3" x1="151.51" y1="344.045" x2="258.51" y2="153.045" stroke="#9EDDFF" stroke-width="8" />
        </svg>
      </div>
    </div>
  );
};


export default PreLoader;