import React, { useState } from "react";
import greetingImage from "./assets/gcggg.jpg"; // Your greeting background image

function App() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handleGenerateCard = () => {
    if (!name.trim() || !designation.trim()) {
      alert("Please fill in both fields.");
      return;
    }
    setShowCard(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-md space-y-4">
        <div>
          <label htmlFor="name" className="block font-bold mb-1 ">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="designation" className="block font-bold mb-1">
            Designation
          </label>
          <textarea
            id="designation"
            rows="1"
            placeholder="Enter your designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none"
          />
        </div>

        <button
          onClick={handleGenerateCard}
          className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
        >
          Generate Card
        </button>
      </div>

      {showCard && (
        <div className="w-full max-w-[700px] aspect-[1/1.414] relative rounded-lg overflow-hidden shadow-lg mt-10">
          <img
            src={greetingImage}
            alt="Greeting Card Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 w-[90%] text-center text-black transform -translate-x-1/2 -translate-y-1/2 z-10">
            <h2 className="text-[clamp(18px,2.5vw,36px)] font-bold text-black drop-shadow text-start mt-10">
              {name}
            </h2>
            <p className="text-[clamp(16px,2vw,24px)] text-black drop-shadow  text-start mb-13  ">
              {designation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
