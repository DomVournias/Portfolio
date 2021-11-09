import React from "react";

const AboutContactForm = () => {
  return (
    <section className="flex m-0 h-1/2 justify-center overflow-hidden z-10 w-full">
      <div className="relative w-full">
        <form
          action="/thankyou"
          name="contactAbout"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="relative flex-col z-10 h-full w-full m-0 bg-gray-naive bg-opacity-10 rounded-xl backdrop-filter backdrop-blur-md border-solid border-2 border-third border-opacity-80  shadow-3xl "
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="px-6 py-8">
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
                  id="message"
                  type="text"
                  className="w-full h-40 px-6 py-3  bg-black border-2 border-solid border-gray-naive rounded-lg outline-none placeholder-gray-naive focus:border-third text-white transition-all duration-200"
                  placeholder="I'm writing about something..."
                />
              </div>
            </div>
            <div className="w-full  text-center">
              <button
                type="submit"
                className="px-8 py-2 bg-white rounded-lg text-black text-lg bg-opacity-90 hover:bg-opacity-100 transition-all duration-200"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AboutContactForm;
