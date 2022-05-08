import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiSass, DiBootstrap } from "react-icons/di";
import {
  SiTailwindcss,
  SiNuxtdotjs,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";

const iconSize = 44;

const skills = [
  { title: "HTML", icon: <AiFillHtml5 size={iconSize} /> },
  { title: "CSS", icon: <DiCss3 size={iconSize} /> },
  { title: "SASS", icon: <DiSass size={iconSize} /> },
  { title: "Tailwind CSS", icon: <SiTailwindcss size={iconSize} /> },
  { title: "Bootstrap", icon: <DiBootstrap size={iconSize} /> },
  { title: "Vue.js", icon: <IoLogoVue size={iconSize} /> },
  { title: "Nuxt.js", icon: <SiNuxtdotjs size={iconSize} /> },
  { title: "React", icon: <SiReact size={iconSize} /> },
  { title: "Next.js", icon: <SiNextdotjs size={iconSize} /> },
];

export default skills;
