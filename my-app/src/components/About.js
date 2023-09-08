import React from "react";

import CountUp from "react-countup";
import Image from "../assets/about.png";
import { useInView } from "react-intersection-observer";
import { inView, motion } from "framer-motion";
import { fadeIn } from "../variant";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20
        lg:gap-y-0 h-screen"
        >
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top "
          >
            <img className="rounded-full w-[80%]" src={Image} />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Full-Stack Developer with over 1 years of experience.
            </h3>
            <p className="mb-6">
              Hello, my name is Ömer. I was born on September 18, 1998 in
              Trabzon, Turkey. I studied at the Department of Mathematics at
              Karadeniz Technical University. Due to my interest in software, I
              received 960 hours of training by participating in a total of 60
              projects in the 6-month Full Stack program at Workintech. My
              creativity has developed, I trust my research and
              solution-oriented working competencies.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={60} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Project <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={8} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Program <br />
                  Language
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button
                onClick={() =>
                  (window.location.href = "mailto:omercnm23@gmail.com")
                }
                className="btn btn-lg"
              >
                Contact me
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
