import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-6 md:px-0  flex justify-between items-center py-4">
        <h1 className="font-extrabold text-3xl">GreatZone</h1>
        <div className="flex items-center  gap-6 text-xl">
          <p>Home</p>
          <p>Posts</p>
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </>
  );
};

export default Header;
