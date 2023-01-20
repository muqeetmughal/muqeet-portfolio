import { useState, useEffect } from "react";
import { useCountUp } from "react-countup";

const Preloader = ({ loaded }) => {
  const [isloaded, setIsLoaded] = useState(false);
  const { countUp } = useCountUp({ end: 100, suffix: "%", delay: 0.5 });

  const animation = () => {
    document.querySelectorAll("path.meter1").forEach((path) => {
      let length = path.getTotalLength();
      let value = parseInt(path.parentNode.getAttribute("data-value"));
      let to = length * (value / 100);
      path.getBoundingClientRect();
      path.style.strokeDashoffset = Math.max(0, to);
    });
  };

  useEffect(() => {
    loaded &&
      setTimeout(() => {
        setIsLoaded(true);
        document.body.classList.add("no-loader");
      }, 1500);
    loaded && setTimeout(animation, 500);
  }, [loaded]);

  return (
    <>
      {!isloaded && (
        <div className="preloader">
          <div className="preloader-content">
            <h4>muqeetmughal</h4>
            <div id="preloader" className="preloader-load">
              <div className="preloader-load-first">
                {" "}
                <svg
                  viewBox="0 0 100 1.7"
                  preserveAspectRatio="none"
                  data-value="100"
                >
                  <path
                    d="M 0,0.85 L 100,0.85"
                    stroke="#ffc107"
                    strokeWidth="1.7"
                    fillOpacity="0"
                  ></path>
                  <path
                    d="M 0,0.85 L 100,0.85"
                    stroke="#555"
                    strokeDasharray="100, 100"
                    strokeDashoffset={200}
                    strokeWidth="1.7"
                    fillOpacity="0"
                    className="meter1"
                  ></path>
                </svg>
                <div className="progressbar-text proNum">
                  {loaded && countUp}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
