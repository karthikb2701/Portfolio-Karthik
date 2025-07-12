"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import GraphemeSplitter from 'grapheme-splitter';
const splitter = new GraphemeSplitter();


const handleDownloadResume = () => {
  try {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.setAttribute("download", "Karthik_Bangera_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {}
};


const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h3 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Karthik Bangera",
                1000,
                "React Developer",
                1000,
                "Full Stack Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </h3>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Innovative software developer almost 3 years of hands-on experience designing and testing 
applications with the technologies like React js, Node js. Well-versed in agile methodologies and coding 
languages. Dedicated to developing creative solutions to meet business goals and requirements. 

            <br></br>

          </p>
          
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2" onClick={handleDownloadResume}>
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
         
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
