import { useState } from 'react'
import Carousel from 'react-multi-carousel'
import { motion, AnimateSharedLayout } from 'framer-motion'
import "react-multi-carousel/lib/styles.css";

import './../../resources/styles/components/experience/Experience.scss';

import intel from './../../resources/media/experience/intel_new_logo.jpg';
import ia from './../../resources/media/experience/ia.JPG';
import anark from './../../resources/media/experience/AnarkLogo.jpg';


const single = {
  single: {
    breakpoint: { max: 5000, min: 0 },
    items: 1,
  },
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}


const experiences = [
  {
    name: 'Intel Corporation, 2023',
    title: 'Software Application Intern @ Intel',
    time: 'May - August 2023',
    desc2: "• Led the GitHub Actions development for the modernization project started by my first internship, ultimately releasing my design in production.",
    desc3: "• Created a dashboard to track data archival rates using ReactJS, Python, and SQL, as well as researched regression testing possibilities, ultimately building a unit test structure that is being built on.",
    skills: 'Git & GitHub Actions, C#, ReactJS, Python, SQL, PowerShell & Bash',
    img: intel,
  },
  {
    name: 'Intel Corporation, 2022',
    title: 'Software Engineer Intern @ Intel',
    time: 'June - August 2022',
    desc1: "• Created a CI/CD proof of concept with GitHub Actions using multiple interal APIs in a novel way, catalyzing an inter-team modernization effort.",
    skills: 'Git & GitHub Actions, C#, PowerShell & Bash, Visual Basic',
    img: intel,
  },
  {
    name: 'Internet Archive',
    title: "Software Engineer Intern @ Internet Archive",
    time: 'April - October 2021',
    desc1: "• Quickly archived tens of millions of web pages using Python into The Wayback Machine using Python.",
    desc2: "• Presented on the history of web archiving at the Internet Archive's 25th Anniversary event, viewed by thousands globally.",
    skills: 'Python, public speaking',
    img: ia,
  },
  {
    name: 'Anark Corporation',
    title: "Quality Engineer Intern @ Anark",
    time: 'June - August 2020',
    desc1: "• Thoroughly tested the Anark Core Workstation, a CAD product with automated and manual tests.",
    desc2: "• Logged detailed bug reports and instructions for software engineers to recreate and easily solve issues.",
    skills: 'Bash, Jira, quality assurance',
    img: anark,
  }
]

const NonUSC = () => {
  const [ind, setInd] = useState(0);

  const SegmentedControl = ({ goToSlide }) => {
    const [activeItem, setActiveitem] = useState(0)
    return (
      <AnimateSharedLayout>
        <ol className="experiences-list">
          {experiences.map(({ name }, index) => {
            const isActive = index === activeItem

            return (
              <motion.li
                className="experiences-item"
                whileTap={isActive ? { scale: 0.95 } : { opacity: 0.6 }}
                key={name}
              >
                <button
                  onClick={() => {
                    goToSlide(index)
                    setActiveitem(index)
                    console.log(index)
                  }}
                  type="button"
                  className="experiences-button"
                >
                  {isActive && (
                    <motion.div
                      layoutId="SegmentedControlActive"
                      className="experience-active"
                    />
                  )}
                  <span className="experience-label">{name}</span>
                </button>
              </motion.li>
            )
          })}
        </ol>
      </AnimateSharedLayout>
    )
  }

  return (
    <>
      <div className="exp-carousel-container">
        <Carousel
          swipeable={false}
          draggable={false}
          arrows={false}
          responsive={single}
          renderButtonGroupOutside={true}
          customButtonGroup={<SegmentedControl goToSlide />}
          keyBoardControl={true}
          transitionDuration={0}
          focusOnSelect={true}
          className="exp-carousel"
        >

          {experiences.map(({ name, title, desc1, desc2, desc3, skills, img, time }) => {

            return (
              <div className="panel">
                <div>
                  <img src={img} className="panel-image" alt={name}/>
                </div>
                <div className="experience-text">
                  <div className="experience-title">{title}</div>
                  <div className="experience-subtitle">{time}</div>
                  <p className="experience-desc">{desc1}</p>
                  <p className="experience-desc">{desc2}</p>
                  <p className="experience-desc">{desc3}</p>
                  <p className="experience-subdesc">{skills}</p>
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>
    </>
  )
}

export default NonUSC
