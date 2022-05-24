import ProjectCard from "../components/ProjectCard.js";

const Projects = () => {
  return (
    <div className="container-large sm:container-small">
      <ProjectCard
        name={"project"}
        description={"projectdesc"}
        link={"projectlink"}
        language={"projectlanguage"}
      />
    </div>
  );
};

export default Projects;
