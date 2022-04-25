import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="www.google.com">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="www.google.com">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="www.google.com">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
