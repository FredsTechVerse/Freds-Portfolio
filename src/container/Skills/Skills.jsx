import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { SkillsWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import axios from "../../axios";

const Skills = () => {
  const [Wexperiences, setWExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperienceData = async () => {
      let experienceData = await axios.get("./experiences");
      let eData = await experienceData.data;
      setExperiences(eData);
    };
    const fetchWExperienceData = async () => {
      let WexperienceData = await axios.get("./workExperiences");
      let eData = await WexperienceData.data;
      setWExperiences(eData);
    };

    const fetchSkillsData = async () => {
      let skillsData = await axios.get("./skills");
      let sData = await skillsData.data;
      setSkills(sData);
    };

    fetchExperienceData();
    fetchWExperienceData();
    fetchSkillsData();
  }, []);

  return (
    <>
      <h2 className="head-text">
        Skills <span>& Experiences</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {Wexperiences.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.description}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
