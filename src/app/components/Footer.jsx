import Link from "next/link";
import React from "react";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex gap-14 mx-10 justify-center items-center">
        <Link href="https://discord.gg/2ezUbP2c">
          <FaDiscord size={40} />
        </Link>
        <Link href="https://www.instagram.com/rushikesh24_05/">
          <FaInstagram size={40} />
        </Link>
        <Link href="https://github.com/Rushikesh-24">
          <FaGithub size={40} />
        </Link>
        <Link href="https://www.linkedin.com/in/rushikesh-gaonkar/">
          <FaLinkedin size={40} />
        </Link>
      </div>
      <div className="flex justify-center items-center mt-20 mb-4">
        <p>Rushikesh Gaonkar &copy;2023</p>
      </div>
    </>
  );
};

export default Footer;
