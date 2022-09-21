import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "../../axios";
import { AboutWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  console.log(abouts);

  useEffect(() => {
    const fetchAboutUs = async () => {
      let aboutUsFindings = await axios.get("./aboutUs");
      let data = await aboutUsFindings.data;
      setAbouts(data);
    };
    fetchAboutUs();
  }, []);

  return (
    <>
      <h2 className="head-text">
        My <span>Services</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imageUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AboutWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
