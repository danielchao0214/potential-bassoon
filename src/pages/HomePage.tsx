import Navbar from "../components/Navbar";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar dropdownButtonText="Home" />
      <div className="z-0 relative w-full h-[calc(100vh-4rem)] bg-gray-50 flex justify-center items-center">
        <div className="relative flex flex-col items-center justify-center text-3xl font-black text-center bg-gray-300 rounded-full w-80 h-80 font-montserrat">
          <div>ORGANIZE</div>
          <div>YOUR</div>
          <div>LIFE</div>
          <div className="absolute inset-0 w-full h-full animate-spin-60">
            <div className="text-lg font-semibold flex items-center justify-center w-32 h-32 bg-red-300 absolute left-[-4rem] top-[-4rem] rounded-full hover:w-40 hover:h-40 transition-all duration-1000">
              WORKOUT
            </div>
          </div>
          <div className="absolute inset-0 w-full h-full animate-spin-50">
            <div className="text-lg font-semibold flex items-center justify-center w-32 h-32 bg-blue-300 absolute right-[-8.1rem] top-[5.5rem] rounded-full hover:w-40 hover:h-40 transition-all duration-1000">
              BUDGET
            </div>
          </div>
          <div className="absolute inset-0 w-full h-full animate-spin-70">
            <div className="text-lg font-semibold flex items-center justify-center w-32 h-32 bg-green-300 absolute left-[-1rem] bottom-[-6.2rem] rounded-full hover:w-40 hover:h-40 transition-all duration-1000">
              NOTES
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
