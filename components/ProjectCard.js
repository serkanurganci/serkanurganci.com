const ProjectCard = ({ name, description, link, language }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col justify-center
      relative
      items-center space-y-2 font-[600]
      shadow-[0px_5px_15px_rgba(0,0,0,0.35)]
      dark:shadow-[0px_5px_15px_rgba(79,70,229,1)] w-44 h-44 md:w-60
      md:h-60 rounded-3xl dark:bg-indigo-600
      duration-200 hover:scale-105"
      rel="noreferrer"
    >
      <p className="font-bold text-lg">{name}</p>
      <p className="font-thin text-sm">{description}</p>
      <p className="absolute -top-1/2 translate-y-full text-xs border rounded-full w-1/3 h-1/3 flex justify-center items-center bg-yellow-500 capitalize">
        {language}
      </p>
    </a>
  );
};

export default ProjectCard;
