import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import backgroundimg from "../../assets/images/bg.png";

const AppointmentBAnner = ({ date, setDate }) => {
  return (
    <div style={{
        backgroundImage: `url(${backgroundimg})`,
        backgroundOpacity: 0.1,
      }} className="hero min-h-screen bg-cover">
      <div className="hero-content flex-col lg:flex-row-reverse"
      >
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl lg:ml-5"
          alt="Dentist chair"
        />
        <div className="lg:mr-5  bg-base-100 shadow-xl">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBAnner;
