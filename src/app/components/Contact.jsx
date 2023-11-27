import React from "react";
import { Montserrat, Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";

const montSerrat = Montserrat({
  weight: ["400", "300"],
  subsets: ["latin"],
  display: "swap",
});
const playFair = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Contact = () => {
  return (
    <>
      <div id="contact" className="text-center p-2">
        <h2 className={`${playFair.className} md:text-9xl text-5xl mb-20`}>Contact</h2>
        <p>Have questions or feedback? Get in touch with me!</p>
        <form action="https://formspree.io/f/mrgwwqre" method="POST" className="max-w-xl text-left m-5 ">
          <label className="block mt-4">Name:</label>
          <input type="text" name="username" autoComplete="off" required className="text-black w-3/4 rounded-2xl h-10 text-center"/>
          <label  className="block mt-4">Email:</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="example@gmail.com"
            required
            className="text-black w-3/4 rounded-2xl text-center h-10"
          />
          <label className="block mt-4">Message:</label>
          <textarea name="message" autoComplete="off"  required className="w-full text-black rounded-2xl text-center"></textarea>
          <motion.button type="submit" value="send" className="border-white bg-white text-black border rounded-2xl md:h-10 md:w-32 hover:bg-transparent hover:text-white text-xs h-7 w-24 my-5"
              whileHover={{ scale: 1.1 }}>SUBMIT 👻</motion.button>
        </form>
      </div>
    </>
  );
};

export default Contact;
