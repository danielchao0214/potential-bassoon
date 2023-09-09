import Navbar from "../components/Navbar";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar dropdownButtonText="Home" />
      <div className="h-[calc(100vh-4rem)] bg-slate-50">
        <h1>Welcome to the Home Page</h1>
      </div>
    </>
  );
};

export default HomePage;
