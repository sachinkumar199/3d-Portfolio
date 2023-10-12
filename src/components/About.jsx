import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import jobit from '../assets/jobit.png'
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon}) =>{
  return(
     <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" 
      >
      
      <div options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
      </motion.div>
     </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 flex gap-20 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        
I'm Sachin Kumar, a recent MSc in Informatics graduate, excelling in C++, Python, React, and JavaScript. My strong portfolio showcases projects like "PetMe" and an RGB color game, reflecting my coding prowess and creativity. Specializing in the MERN Stack, I'm well-prepared for web development challenges. With a passion for pets and design, I bring a unique perspective to my work. My problem-solving skills, tech proficiency, and project management abilities make me a valuable asset for any innovative team. I'm actively seeking opportunities to contribute and you can reach me at sachinkumar2021@iic.ac.in. Let's connect and explore collaborations.

{/* <img src={jobit} alt="" lenght="220px" width={220}/> */}
      </motion.p>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About,"about")
