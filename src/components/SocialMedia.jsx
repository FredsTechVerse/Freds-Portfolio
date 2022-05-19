import React from "react";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=254112615416"
        rel="noreferrer"
      >
        <BsWhatsapp />
      </a>
    </div>
    <div>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/alfred-gichia-605726205"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a target="_blank" href="https://github.com/FredzTech" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
