import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a>
        <BsTwitter />
      </a>
    </div>
    <div>
      <a>
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a>
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
