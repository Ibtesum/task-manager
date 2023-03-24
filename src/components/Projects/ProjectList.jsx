import React from "react";
import { useGetProjectsQuery } from "../../features/projects/projectsApi";
import SingleProject from "./SingleProject";

const ProjectList = () => {
  const { data: projects, isLoading, isSuccess } = useGetProjectsQuery();
  
  let content = null;
  if (isLoading) content = <div>Loading..</div>;
  if (isSuccess)
    content = projects?.map((project) => (
      <SingleProject key={project.id} project={project} />
    ));
  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
};

export default ProjectList;
