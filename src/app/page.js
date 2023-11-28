"use client";
import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Rotation from "./components/Rotation";
import Project from "./components/Project";
import MovingText from "./components/MovingText";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skill from "./components/Skill";

export default function Home() {
  return (
    <div className="cursor-none">
      <Hero/>
      <Rotation/>
      <About/>
      <MovingText text1="RUSHIKESH" text3="PORTFOLIO"/>
      <Project/> 
      <Rotation/>
      <Skill/>
      <Rotation/>
      <Contact/>
      <MovingText text3="FEEL FREE TO CONTACT ME ✦ "/>
      <Footer/>
    </div>
  );
}
