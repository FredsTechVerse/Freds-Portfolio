import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AboutWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div className={`${classNames} wrapper__container`}>
        <div id={idName} className={`app__container `}>
          <SocialMedia />
          <div className="app__wrapper app__flex">
            <Component />
            {/* <div className="copyright">
            <p className="p-text">@2022 ALFRED GITHINJI.</p>
            <p className="p-text">All rights reserved</p>
          </div> */}
          </div>
          <NavigationDots active={idName} />
        </div>
        <div class="custom-shape-divider-bottom-1663744527">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    );
  };

export default AboutWrap;
