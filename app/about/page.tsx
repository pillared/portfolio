"use client";
import React, { useEffect } from "react";
import { useConfigStore } from "@/lib/stores/useConfigStore";
import Image from "next/image";

export default function About() {
  const { fetchConfig, config } = useConfigStore();

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  return (
    <main className="p-4">
      <div className="mx-auto flex flex-col items-center p-4 text-center">
        {/* Biography */}
        <section
          id=""
          className="flex min-h-[90vh] max-w-4xl flex-col items-center md:pt-[20vh]"
        >
          <h1 className="text-4xl font-semibold">Biography</h1>
          <p className="mt-4 text-lg leading-relaxed">
            {config.biography.details}
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="text-foreground mx-8 w-full">
          <h2 className="mb-8 text-3xl font-semibold">Skills</h2>

          {/* Technical Skills */}
          <div className="grid grid-flow-row grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {config.skills.technical.map((skillGroup) => (
              <div
                key={skillGroup.id}
                className="mb-2 border-spacing-4 rounded-md border-2 border-dashed border-blue-400 p-6 dark:border-gray-200"
              >
                <h3 className="mb-4 text-xl font-semibold">
                  {skillGroup.name}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map(({ name, icon, docs }) => (
                    <li key={name} className="flex items-center gap-2">
                      <Image
                        src={icon}
                        width={32}
                        height={32}
                        alt={`${name} icon`}
                        className="h-16 w-16"
                      />
                      <a
                        href={docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline dark:text-gray-400"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            ;
          </div>

          {/* Interpersonal Skills */}
          <div className="mt-12 md:mx-[20vw]">
            <h3 className="mb-4 text-xl font-semibold">Interpersonal Skills</h3>
            <ul className="flex flex-wrap justify-center gap-4">
              {/* <ul className="grid grid-flow-row grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6"> */}
              {config.skills.interpersonal.map((skill) => (
                <li
                  key={skill}
                  className="text-md font-small rounded-full bg-gray-200 px-4 py-1 text-gray-700"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Education */}
        {/* <section id="education" className="mb-20 w-full max-w-3xl">
          <h2 className="mb-8 text-3xl font-semibold">Education</h2>
          {config.education.map(
            ({
              id,
              name,
              location,
              educationType,
              degree,
              degreeCategory,
              major,
              concentration,
              years,
              relevantCoursework,
            }) => (
              <div key={id} className="mb-8 border-b border-gray-300 pb-4">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600 italic">
                  {educationType} — {degreeCategory} {degree}
                </p>
                <p className="text-gray-700">
                  {major} (Concentration: {concentration})
                </p>
                <p className="text-gray-700">{location}</p>
                <p className="text-gray-600">{years}</p>
                {relevantCoursework.length > 0 && (
                  <>
                    <p className="mt-2 font-semibold">Relevant Coursework:</p>
                    <ul className="list-inside list-disc">
                      {relevantCoursework.map((course) => (
                        <li key={course}>{course}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )
          )}
        </section> */}
      </div>
    </main>
  );
}
