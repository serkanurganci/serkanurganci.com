import skills from "../utils/skills";

const ProjectCard = ({ name, description, link, language }) => {
  const maxDescLength = 40;
  const maxNameLength = 15;
  const findLanguageLogo = (language) => {
    const findLanguage = skills.find((skill) => {
      return skill.title
        .toLowerCase()
        .includes(language && language.toLowerCase());
    });
    return findLanguage && findLanguage.icon;
  };

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
      duration-200 hover:scale-105 px-6"
      rel="noreferrer"
    >
      <p className="font-bold text-base sm:text-lg">
        {name && name.length > maxNameLength
          ? name.substring(0, maxNameLength) + "..."
          : name}
      </p>
      <p className="font-thin text-xs sm:text-sm">
        {description && description.length > maxDescLength
          ? description.substring(0, maxDescLength) + "..."
          : description}
      </p>
      <p className="absolute -top-1/2 translate-y-full text-xs border-2 shadow-lg rounded-full w-1/3 h-1/3 flex justify-center items-center bg-white dark:bg-purple-600 capitalize  p-2">
        {findLanguageLogo(language)}
      </p>
    </a>
  );
};

export default ProjectCard;
