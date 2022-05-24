function SkillItem({ children, title, icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col justify-center
      items-center space-y-2 font-[600]
      shadow-[0px_5px_15px_rgba(0,0,0,0.35)]
    dark:shadow-[0px_5px_15px_rgba(79,70,229,1)] w-32 h-32 md:w-44 md:h-44 rounded-3xl dark:bg-indigo-600
    duration-200 hover:scale-105"
      rel="noreferrer"
    >
      {icon}
      <p>{title}</p>
    </a>
  );
}

export default SkillItem;
