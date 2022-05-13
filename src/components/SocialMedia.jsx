import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        target="_blank"
        href="https://stackoverflow.com/questions/42914666/react-router-external-link"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        target="_blank"
        href="https://stackoverflow.com/questions/42914666/react-router-external-link"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a
        target="_blank"
        href="https://stackoverflow.com/questions/42914666/react-router-external-link"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
