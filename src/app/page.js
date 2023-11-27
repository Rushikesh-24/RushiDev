"use client";
import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Rotation from "./components/Rotation";
import { Montserrat,Dancing_Script } from "next/font/google";
import Project from "./components/Project";
import MovingText from "./components/MovingText";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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


export default function Home() {
  return (
    <div className="cursor-none">
      <Hero/>
      <Rotation/>
      <About/>
      <MovingText text1="RUSHIKESH" text3="PORTFOLIO"/>
      <Project/> 
      <Rotation/>
      <Contact/>
      <MovingText text3="FEEL FREE TO CONTACT ME✦"/>
      <Footer/>
    </div>
  );
}
