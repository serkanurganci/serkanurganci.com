import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiSass, DiBootstrap, DiJavascript1 } from "react-icons/di";
import {
  SiTailwindcss,
  SiNuxtdotjs,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";

const iconSize = 44;

const skills = [
  {
    title: "HTML",
    icon: <AiFillHtml5 size={iconSize} />,
    href: "https://www.w3schools.com/html/",
  },
  { title: "CSS", icon: <DiCss3 size={iconSize} />, href: "" },
  {
    title: "SCSS",
    icon: <DiSass size={iconSize} />,
    href: "https://www.w3schools.com/css/",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss size={iconSize} />,
    href: "https://tailwindcss.com/",
  },
  {
    title: "Bootstrap",
    icon: <DiBootstrap size={iconSize} />,
    href: "https://getbootstrap.com/",
  },
  {
    title: "JavaScript",
    icon: <DiJavascript1 size={iconSize} />,
    href: "https://www.javascript.com/",
  },
  {
    title: "Vue.js",
    icon: <IoLogoVue size={iconSize} />,
    href: "https://vuejs.org/",
  },
  {
    title: "Nuxt.js",
    icon: <SiNuxtdotjs size={iconSize} />,
    href: "https://nuxtjs.org/",
  },
  {
    title: "React",
    icon: <SiReact size={iconSize} />,
    href: "https://tr.reactjs.org/",
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs size={iconSize} />,
    href: "https://nextjs.org/",
  },
];

export default skills;
