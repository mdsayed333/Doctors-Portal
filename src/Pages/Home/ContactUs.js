import React from "react";
import background from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const ContactUs = () => {
  return (
    <div
      className="bg-cover py-16"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full md:max-w-sm lg:w-50 mx-auto text-center">
        <h4 className="text-primary text-xl font-bold">Contact Us</h4>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name=""
              id=""
              cols="30"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
