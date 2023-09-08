import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variant";

import Img1 from "../assets/Img1.PNG";
import Img2 from "../assets/Img2.PNG";
import Img3 from "../assets/Img3.PNG";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-20 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                You can see my latest projects here.. Please visit my github
                account to see all my projects.
                <br />
              </p>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/omercnm?tab=repositories")
                }
                className="btn btn-sm"
              >
                View all projects
              </button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50  rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50">
                <span className="text-2xl text-gradient">Movie List</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                <a
                  className="text-2xl text-white"
                  href="https://fsweb-s10g3-redux-watchlist-blond.vercel.app/"
                >
                  View Site
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-16 mb-10"
          >
            <div className="group relative overflow-hidden border-2 border-white/50  rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50">
                <span className="text-2xl text-gradient">Calculator</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                <a
                  className="text-2xl text-white"
                  href="https://fsweb-s10g1-reducer-calculator-rho.vercel.app/"
                >
                  View Site
                </a>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50  rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 z-50">
                <span className="text-2xl text-gradient">Favorite Movie</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                <a
                  className="text-2xl text-white"
                  href="https://redux-filmler-sitesi.vercel.app/movies"
                >
                  View Site
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
