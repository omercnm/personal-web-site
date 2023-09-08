import React from "react";
import Image from "../assets/webPp.jpg";
import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Ömer <span>Canım</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Full-Stack Developer", 2000]}
                speed={40}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-max mx-auto lg:mx-0"
            >
              Hi, I'm Ömer. I'm a full-stack developer. If you are looking for a
              Developer who to craft solid and scrable frontend product with
              great user experiences. Let's shake hands with me
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button
                className="btn btn-lg"
                onClick={() =>
                  (window.location.href = "mailto:omercnm23@gmail.com")
                }
              >
                Contact Me
              </button>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto
            lg:mx-0"
            >
              <a href="https://github.com/omercnm">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/%C3%B6mer-can%C4%B1m-195641267/">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/omercnm61">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/omercanim/">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:maw-w-[482px]"
          >
            <img className="rounded-full" src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
