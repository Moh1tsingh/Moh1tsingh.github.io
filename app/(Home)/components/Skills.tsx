"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiCplusplus,
  SiPython,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      title: "React js",
      icon: SiReact,
    },
    {
      title: "Node js",
      icon: SiNodedotjs,
    },
    {
      title: "Java script",
      icon: SiJavascript,
    },
    {
      title: "Tailwind CSS",
      icon: SiTailwindcss,
    },
    {
      title: "Github",
      icon: SiGit,
    },
    {
      title: "C++",
      icon: SiCplusplus,
    },
    {
      title: "Python",
      icon: SiPython,
    },
  ];
  return (
    <div className=" max-w-5xl mx-auto skills-container">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-[6deg]"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
