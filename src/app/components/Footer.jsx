import Link from "next/link";
import React from "react";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex md:gap-14 mx-10 justify-center items-center flex-wrap gap-0 md:mt-0 mt-28">
        <Link href="https://discord.gg/2ezUbP2c">
          <FaDiscord size={40} className="w-1/2 md:w-auto" />
        </Link>
        <Link href="https://www.instagram.com/rushikesh24_05/">
          <FaInstagram size={40} className="w-1/2 md:w-auto"/>
        </Link>
        <Link href="https://github.com/Rushikesh-24">
          <FaGithub size={40} className="w-1/2 md:w-auto"/>
        </Link>
        <Link href="https://www.linkedin.com/in/rushikesh-gaonkar/">
          <FaLinkedin size={40} className="w-1/2 md:w-auto"/>
        </Link>
      </div>
      <div className="flex justify-center items-center md:mt-20 mb-4 mt-2">
        <p>Rushikesh Gaonkar &copy;2023</p>
      </div>
    </>
  );
};

export default Footer;
