"use client";
import Masonry from "react-masonry-css";
import React, { useEffect } from "react";
import ProjectCard from "@/components/project-card";
import { useConfigStore } from "@/lib/stores/useConfigStore";

export default function Projects() {
  const { fetchConfig, config } = useConfigStore();

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  // 🔍 Add console logs right here
  console.log("Config inside Projects component:", config);
  console.log("Projects:", config?.projects);

  const breakpointColumnsObj = {
    default: 2,
    768: 1,
  };

  return (
    // <div className="mx-auto max-w-5xl columns-1 gap-4 overflow-clip px-4 lg:columns-2">
    //   {config?.projects?.length ? (
    //     config.projects.map((project) => (
    //       <div key={project.id} className="break-inside-avoid">
    //         <ProjectCard key={project.id} project={project} />
    //       </div>
    //     ))
    //   ) : (
    //     <p className="text-center text-gray-500">No projects available.</p>
    //   )}
    // </div>

    <div className="mx-auto max-w-5xl px-4">
      {config?.projects?.length ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="-ml-4 flex w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {config.projects.map((project) => (
            <div key={project.id} className="mb-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </Masonry>
      ) : (
        <p className="text-center text-gray-500">No projects available.</p>
      )}
    </div>
  );
}
