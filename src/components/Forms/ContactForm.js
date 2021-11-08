import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  // const [formState, setFormState] = useState({
  //   name: "",
  //   company: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

  // const encode = (data) => {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // };

  // const handleChange = (e) => {
  //   setFormState({
  //     ...formState,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact", ...formState }),
  //   })
  //     .then(() => redirect("/thankyou/"))
  //     .catch((error) => alert(error));

  //   e.preventDefault();
  // };

  return (
    <section className="flex m-0 h-1/2 py-32 justify-center overflow-hidden z-10 px-8">
      <div className="relative">
        <form
          action="/thankyou"
          // onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="relative flex-col pb-10 xs:px-3 md:px-8 z-10 max-w-3xl h-full m-0 bg-gray-naive bg-opacity-30 rounded-xl backdrop-filter backdrop-blur-md border-solid border-2 border-white border-opacity-10 shadow-3xl "
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="xs:py-10 md:py-20 w-full">
            <h3 className="text-white text-3xl">
              🚀 Ready to build your website?
            </h3>
          </div>
          <div className="px-6">
            <div className="w-full flex xs:flex-col md:flex-row gap-6 mb-6">
              <div className="xs:w-full md:w-1/2">
                <label
                  htmlFor="name"
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2 ml-2 text-left"
                >
                  Full Name
                </label>
                <input
                  name="name"
                  // onChange={handleChange}
                  // value={formState.name}
                  id="name"
                  type="text"
                  className="w-full px-6 py-3  bg-black border-2 border-solid border-gray-naive rounded-lg outline-none placeholder-gray-naive focus:border-third text-white transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>
              <div className="xs:w-full md:w-1/2">
                <label
                  htmlFor="company"
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2 ml-2 text-left "
                >
                  Company
                </label>
                <input
                  name="company"
                  // onChange={handleChange}
                  // value={formState.company}
                  id="company"
                  type="text"
                  className="w-full px-6 py-3 bg-black border-2 border-solid border-gray-naive rounded-lg outline-none placeholder-gray-naive focus:border-third text-white transition-all duration-200"
                  placeholder="Media Enterprises"
                />
              </div>
            </div>
            <div className="w-full flex xs:flex-col md:flex-row gap-6 mb-6">
              <div className="xs:w-full md:w-1/2">
                <label
                  htmlFor="email"
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2 ml-2 text-left "
                >
                  Email
                </label>
                <input
                  name="email"
                  // onChange={handleChange}
                  // value={formState.email}
                  id="email"
                  type="email"
                  className="w-full px-6 py-3 bg-black border-2 border-solid border-gray-naive rounded-lg outline-none placeholder-gray-naive focus:border-third text-white transition-all duration-200"
                  placeholder="john@doe.com"
                />
              </div>
              <div className="xs:w-full md:w-1/2">
                <label
                  htmlFor="phone"
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2 ml-2 text-left "
                >
                  Phone
                </label>
                <input
                  name="phone"
                  // onChange={handleChange}
                  // value={formState.phone}
                  id="phone"
                  type="tel"
                  className="w-full px-6 py-3 bg-black border-2 border-solid border-gray-naive rounded-lg outline-none placeholder-gray-naive focus:border-third text-white transition-all duration-200"
                  placeholder="+1 999-999-9999 "
                />
              </div>
            </div>
            <div className="w-full flex flex-row gap-6 mb-6">
              <div className="w-full">
                <label
                  htmlFor="message"
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2 ml-2 text-left "
                >
                  Company Name
                </label>
                <textarea
                  name="message"
                  // onChange={handleChange}
                  // value={formState.message}
                  id="message"
                  type="text"
                  className="w-full h-40 px-6 py-3  bg-black border-2 border-solid border-gray-naive rounded-lg outline-none placeholder-gray-naive focus:border-third text-white transition-all duration-200"
                  placeholder="I'm writing about something..."
                />
              </div>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="px-8 py-2 bg-white rounded-lg text-black text-lg bg-opacity-90 hover:bg-opacity-100 transition-all duration-200"
              >
                Send
              </button>
            </div>
          </div>
        </form>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
            duration: 9,
            ease: "linear",
          }}
          className="absolute top-0 w-20 h-60 m-0 z-n2"
        >
          <span className="absolute h-52 w-52 bg-third rounded-full" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
            duration: 9,
            ease: "linear",
          }}
          className="absolute bottom-0 right-0 w-20 h-60  m-0 z-n2"
        >
          <span className="absolute h-52 w-52 bg-fourth rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
