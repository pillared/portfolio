import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { BadgeCheck, Code2, Hammer, Lightbulb, Sparkles } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  role: string;
  learnings: string;
  screenshots: string[];
  demoLink: string | null;
  repoLink: string;
  blogPost: string;
  timeline: string;
  impact: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card className="z-0 mx-auto my-6 max-w-lg border border-blue-200 bg-gradient-to-br from-sky-50 to-blue-100 shadow-md transition-all duration-200 hover:shadow-lg dark:border-zinc-700 dark:from-zinc-800 dark:to-gray-900">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg text-blue-900 dark:text-blue-200">
          <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          {project.name}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
          {project.timeline}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 text-gray-800 dark:text-gray-200">
        <p>{project.description}</p>

        <div className="space-y-2">
          {/* <div className="flex items-start gap-2">
            <Code2 className="mt-0.5 h-5 w-5 text-indigo-500" />
            <p></p>
          </div> */}

          <div className="flex items-start gap-2 rounded-md p-2 transition-colors hover:bg-orange-50">
            <Code2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-500" />
            <div className="text-base text-zinc-800">
              <p>
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-md p-2 transition-colors hover:bg-orange-50">
            <Hammer className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
            <div className="text-base text-zinc-800">
              <p>
                <strong>Role:</strong> {project.role}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-md p-2 transition-colors hover:bg-orange-50">
            <Lightbulb className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
            <div className="text-base text-zinc-800">
              <p>
                <strong>Learnings:</strong> {project.learnings}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <p></p>
          </div>

          <div className="flex items-start gap-2 rounded-md p-2 transition-colors hover:bg-orange-50">
            <BadgeCheck className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
            <div className="text-base text-zinc-800">
              <p>
                <strong>Impact:</strong> {project.impact}
              </p>
            </div>
          </div>
        </div>

        {/* Optional screenshots */}
        {/* {project.screenshots?.length > 0 && (
          <div className="mt-4 flex space-x-2 overflow-x-auto py-2">
            {project.screenshots.map((src, i) => (
              <Image
                key={i}
                src={src}
                width={160}
                height={90}
                alt={`${project.name} screenshot ${i + 1}`}
                className="h-24 w-40 rounded-md object-cover"
              />
            ))}
          </div>
        )} */}
      </CardContent>

      <CardFooter className="flex flex-wrap gap-4 pt-4">
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-300 px-4 py-1 text-sm text-blue-700 hover:bg-green-100 active:bg-green-200 dark:text-blue-400"
          >
            Live Demo
          </a>
        )}
        {project.repoLink && (
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-300 px-4 py-1 text-sm text-blue-700 hover:bg-green-100 active:bg-green-200 dark:text-blue-400"
          >
            Source Code
          </a>
        )}
        {project.blogPost && (
          <a
            href={project.blogPost}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-300 px-4 py-1 text-sm text-blue-700 hover:bg-green-100 active:bg-green-200 dark:text-blue-400"
          >
            Blog Post
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
