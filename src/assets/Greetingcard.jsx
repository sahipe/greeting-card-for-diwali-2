import React from "react";
import greetingImg from "../assets/Greeting.jpg";

const GreetingCard = ({ name, designation }) => {
  return (
    <div className="w-full max-w-[700px] aspect-[1/1.414] relative rounded-lg overflow-hidden shadow-lg bg-white mt-8 mx-auto">
      <img
        src={greetingImg}
        alt="Greeting Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 w-[90%] text-black text-center transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h2 className="text-[clamp(18px,2.5vw,36px)] font-bold text-shadow">{name}</h2>
        <p className="text-[clamp(16px,2vw,24px)] text-shadow">{designation}</p>
      </div>
    </div>
  );
};

export default GreetingCard;
