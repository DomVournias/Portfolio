import React, { useState } from "react";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col place-content-center items-center h-screen mb-36 ">
      <div className="relative w-full max-w-3xl h-full top-1/4 -translate-y-1/2 ">
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="absolute flex-col pb-10 px-8 z-10 w-full bg-gray-naive bg-opacity-30 rounded-xl backdrop-filter backdrop-blur-md border-solid border-2 border-white border-opacity-10 shadow-3xl"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="py-20 w-full">
            <h3 className="text-white text-3xl">
              🚀 Ready to build your website?
            </h3>
          </div>
          <div className="px-6">
            <div className="w-full flex flex-row gap-6 mb-6">
              <div className="w-1/2">
                <label
                  htmlFor="name"
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2 ml-2 text-left"
                >
                  Full Name
                </label>
                <input
                  name="name"
                  onChange={handleChange}
                  value={formState.name}
                  id="name"
                  type="text"
                  className="w-full px-6 py-3  bg-black border-2 border-solid border-gray-naive rounded-lg outline-none placeholder-gray-naive focus:border-third text-white transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="company"
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2 ml-2 text-left "
                >
                  Company
                </label>
                <input
                  name="company"
                  onChange={handleChange}
                  value={formState.company}
                  id="company"
                  type="text"
                  className="w-full px-6 py-3 bg-black border-2 border-solid border-gray-naive rounded-lg outline-none placeholder-gray-naive focus:border-third text-white transition-all duration-200"
                  placeholder="Media Enterprises"
                />
              </div>
            </div>
            <div className="w-full flex flex-row gap-6 mb-6">
              <div className="w-1/2">
                <label
                  htmlFor="email"
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2 ml-2 text-left "
                >
                  Email
                </label>
                <input
                  name="email"
                  onChange={handleChange}
                  value={formState.email}
                  id="email"
                  type="email"
                  className="w-full px-6 py-3 bg-black border-2 border-solid border-gray-naive rounded-lg outline-none placeholder-gray-naive focus:border-third text-white transition-all duration-200"
                  placeholder="john@doe.com"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="phone"
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2 ml-2 text-left "
                >
                  Phone
                </label>
                <input
                  name="phone"
                  onChange={handleChange}
                  value={formState.phone}
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
                  onChange={handleChange}
                  value={formState.message}
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
        <div className="absolute h-52 w-52 rounded-full -top-24 -left-24 bg-third" />
        <div className="absolute h-52 w-52 rounded-full bottom-44 -right-24 bg-fourth" />
      </div>
    </div>
  );
};

export default ContactForm;
