const ProjectCard = ({ name, description, link, language }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col justify-center
      items-center space-y-2 font-[600]
      shadow-[0px_5px_15px_rgba(0,0,0,0.35)]
    dark:shadow-[0px_5px_15px_rgba(79,70,229,1)] w-44 h-44 md:w-60 md:h-60 rounded-3xl dark:bg-indigo-600
    duration-200 hover:scale-105"
      rel="noreferrer"
    >
      <p>{name}</p>
      <p>{description}</p>
      <p>{language}</p>
    </a>
  );
};

export default ProjectCard;
