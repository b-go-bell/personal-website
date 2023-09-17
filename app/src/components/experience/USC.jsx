import { useState } from 'react'
import Carousel from 'react-multi-carousel'
import { motion, AnimateSharedLayout } from 'framer-motion'
import "react-multi-carousel/lib/styles.css";

import './../../resources/styles/components/experience/Experience.scss';

import oneofour from './../../resources/media/experience/oneofour.png';
import ctc from './../../resources/media/experience/ctc.JPEG';
import heatmap from './../../resources/media/experience/heatmap.png';
import viterbi from './../../resources/media/experience/viterbi.png';
import swe from './../../resources/media/experience/swe.jpg';
import sco from './../../resources/media/experience/sco.png';

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
    name: 'CSCI 104',
    title: 'Head Course Producer',
    time: 'January 2023 - current',
    desc1: "• Schedule and oversee all course producer / teaching assistant activities including office hours, labs, proctoring, and review sessions for the Data Structures & Object Oriented Design class.",
    desc2: "• Create, prepare, and review all homework and lab materials for the class in conjunction with the professor, acting as students' key point of contact for administrative issues.",
    desc3: "• Hold office hours and teach lab sections for over 300+ 104 students as a regular course producer does.",
    skills: 'C++, GitHub, Data structures & OOP, leadership, conflict resolution',
    img: oneofour,
  },
  {
    name: 'Code the Change',
    title: 'President',
    time: 'April 2023 - current',
    desc1: "• Guide Code the Change's mission of promoting social change by building software for nonprofits; have already created a new VP of DEI position and cofounded a Tech4Good consortium.",
    desc2: "• Was VP of Community Outreach my sophomore year, where I boosted our volunteering evens and attendance by 300%.",
    desc3: "• Originally joined CTC as a developer when I was a freshman, and have contributed to 3 web development projects since then.",
    skills: 'ReactJS, NodeJS, HTML/CSS, leadership',
    img: ctc,
  },
  {
    name: 'ICAROS Lab',
    title: "Research Assistant",
    time: 'January - May 2022',
    desc1: "• Recreated the Covariance Matrix Adaptation MAP-Elites algorithm based on the official pyribs documentation.",
    skills: 'Python',
    img: heatmap,
  },
  {
    name: 'CSCI 103',
    title: "Course Producer",
    time: 'September - May 2022',
    desc1: "• Served as a course producer for the Introduction to Programming course where I helped 300+ students in office hours and lab sections.",
    desc2: "• Organized and led a final review session both semesters I was a CP, attending by roughly >50% the class.",
    skills: 'C++, Debugging',
    img: viterbi,
  },
  {
    name: 'SCO',
    title: "Guide",
    time: 'March 2022 - current',
    desc1: "• Trip guide for SC Outfitters, the student-run outdoors club at USC, where I take fellow students outdoors, specializing in backpacking trips.",
    skills: 'Wilderness survival, leadership, conflict resolution',
    img: sco,
  },
  {
    name: 'SWE',
    title: "Ambassador",
    time: 'August 2020 - May 2021',
    desc1: "• Selected as a Society of Women Engineers ambassador my freshman year, where I served on the events committee, planning social events for all SWE members.",
    skills: 'Organization',
    img: swe,
  }
]

const USC = () => {

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

export default USC
