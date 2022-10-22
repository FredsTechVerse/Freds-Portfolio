import React from "react";
import { BsGithub, BsWhatsapp, BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const ContactInfo = () => (
  <div className="app__social2">
    <div>
      <a href="https://api.whatsapp.com/send?phone=254112615416">
        <BsWhatsapp />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/alfred-gichia-605726205">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/AlfredGichia">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://github.com/FredzTech">
        <BsGithub />
      </a>
    </div>
  </div>
);

export default ContactInfo;
