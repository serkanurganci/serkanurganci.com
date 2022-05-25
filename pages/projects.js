import ProjectCard from "../components/ProjectCard.js";
import { useEffect, useState } from "react";
import useSWR from "swr";

async function fetcher(...arg) {
  const res = await fetch(...arg);
  return res.json();
}

const Projects = () => {
  const { data } = useSWR("/api/github", fetcher);
  const repoData =
    data &&
    data.map((repo) => {
      return (
        <ProjectCard
          key={repo.id}
          name={repo.name}
          description={repo.description}
          link={repo.svn_url}
          language={repo.language}
        />
      );
    });

  return (
    <div className="container-large sm:container-small flex justify-center items-center gap-5 gap-y-12 flex-wrap text-center">
      {repoData}
    </div>
  );
};

export default Projects;
