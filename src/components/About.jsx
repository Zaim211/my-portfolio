import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] justify-evenly flex flex-col items-center"
        >
          <img 
            src={icon} 
            alt='icon' 
            className="w-20 h-20 object contain" 
          />
          <h3 className="text-white text-center
          font-bold text-[20px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>  
  );
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] 
        max-w-3xl leading-[30px]'
      >
        I am a skilled software developer with extensive experience in TypeScript and JavaScript.  Also using frameworks such as NextJS and VueJS for front-end development and Node.js & Python for back-end development.
        Additionally, I have expertise in Three.js for 3D graphics and visualization.
        As a quick learner, I collaborate closely with clients to create efficient, scalable, and user-friendly solutions that address real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");