import React, { useState } from "react";
import { Container, CssBaseline } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SecondHeader from "../../components/SecondHeader/SecondHeader";
import "./About.css";
import AboutContact from "../../components/AboutContact/AboutContact";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();

  const aboutInfo = {
    title: t("about.title"),
    description: `${t("about.description1")}`,
    workExperience: [
      {
        companyName: t("work.reactDeveloperDescription"),
        companyLogo: "./logo/Sustainable.png",
        jobTitle: t("work.reactDeveloper"),
        companyLink: "https://sustainablestar.com.sa/",
      },
      {
        companyName: t("work.frontendDeveloperDescription"),
        companyLogo: "./logo/ptit.png",
        jobTitle: t("work.frontendDeveloper"),
        companyLink: "https://ptit.com.sa/ar/",
      },
      {
        companyName: t("work.frontendDeveloperDescription2"),
        companyLogo: "./logo/ema.png",
        jobTitle: t("work.frontendDeveloper"),
        companyLink: "https://example.com",
      },
      {
        companyName: t("work.softwareEngineerDescription"),
        companyLogo: "./logo/gedco.png",
        jobTitle: t("work.softwareEngineer"),
        companyLink: "https://www.gedco.ps/?lang=en",
      },
    ],
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showAllWork, setShowAllWork] = useState(false);

  const visibleWork = showAllWork
    ? aboutInfo.workExperience
    : aboutInfo.workExperience.slice(0, 3);

  const toggleShowAllWork = () => {
    setShowAllWork((prevShowAll) => !prevShowAll);
  };

  return (
    <div>
      <Container id="AboutContainer" maxWidth="sm">
        <CssBaseline />
        <SecondHeader />
   
        <section className="about-section">
          <h2>{aboutInfo.title}</h2>
        <br/>

          <p>{aboutInfo.description}</p>


          <br/>
          <Breadcrumbs id="Breadcrumbs" fullWidth>
          <Link to="/" className="opacity-60">
            {t('Home')}
          </Link>
          <Link to="/about" className="opacity-60">
            
            {t('About me')}
    
          </Link>
        </Breadcrumbs>
    
    
        <br/>


          <h2>{t("about.workExperience")}</h2>
          <ul className="work-experience-list">
            {visibleWork.map((experience, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`work-entry ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "fade"
                    : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href={experience.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-card"
                >
                  <div className="image-container">
                    <img
                      src={experience.companyLogo}
                      alt={`${experience.companyName} Logo`}
                    />
                  </div>
        <br/>

                  <div className="work-details">
                    <h3>{experience.jobTitle}</h3>
                    <p>{experience.companyName}</p>
                  </div>
                </a>
              </motion.li>
            ))}
          </ul>
          {aboutInfo.workExperience.length > 3 && (
            <div className="see-more-button">
              <a id="seeAll" onClick={toggleShowAllWork}>
                {showAllWork ? t("seeLess") : t("seeMore")}
              </a>
            </div>
          )}

          <div className="Education">
            <h2>{t("Education")}</h2>
        <br/>

            <a target="_blank" href="https://www.alazhar.edu.ps/eng/">
              <p>
                {t("EducationCollege")} <br />
                {t("EducationDescription")}
              </p>
            </a>
          </div>
        <br/>


          <div className="contact">
            <h2>{t("Contact")}</h2>

            <p>
            {t("contact with")} <a href="mailto:alsher.info@gmail.com"> {t("email")}</a>.
            </p>
        <br/>

            <AboutContact />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default About;
