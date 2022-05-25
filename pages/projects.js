import ProjectCard from "../components/ProjectCard.js";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("/", {}).then((res) => console.log(res));
    // .then((data) => {
    //   setProjects(data);
    // });
  }, []);

  return (
    <div className="container-large sm:container-small">
      <div>{projects}</div>
      <ProjectCard
        name={"project"}
        description={"projectdesc"}
        link={"projectlink"}
        language={"javascript"}
      />
    </div>
  );
};

export default Projects;
