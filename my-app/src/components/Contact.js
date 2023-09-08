import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactUs = () => {
  const form = useRef();
  const [from_name, setfrom_name] = useState("");
  const [from_email, setfrom_email] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setfrom_name("");
    setfrom_email("");
    setMessage("");
  };
  const notify = () => toast("Message sent successfully");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pyxyslb",
        "template_rntut3k",
        form.current,
        "C7dMGme-V433fNkSo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex  justify-center items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            ref={form}
            onSubmit={(sendEmail, handleSubmit)}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="from_name"
              value={from_name}
              onChange={(e) => setfrom_name(e.target.value)}
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
              name="from_email"
              value={from_email}
              onChange={(e) => setfrom_email(e.target.value)}
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              onClick={notify}
              type="submit"
              value="Send"
              className="btn btn-lg"
            >
              Send message
            </button>
            <ToastContainer />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
