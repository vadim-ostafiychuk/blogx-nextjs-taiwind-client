import React from "react";
import { FaCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="shrink text-white h-[70px] justify-center flex items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <p className="inline-flex items-center gap-1">
        <FaCopyright /> 2024
      </p>
    </footer>
  );
};

export default Footer;
