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
      <div className="bg-background text-foreground mx-auto flex min-h-screen max-w-4xl flex-col items-center p-4 text-center">
        {/* Biography */}
        <section id="biography" className="mb-20">
          <h1 className="text-4xl font-semibold">Biography</h1>
          <p className="mt-4 text-lg leading-relaxed">
            {config.biography.details}
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-20 w-full">
          <h2 className="mb-8 text-3xl font-semibold">Skills</h2>

          {/* Technical Skills */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {config.skills.technical.map((skillGroup) => (
              <div key={skillGroup.id}>
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
                        className="h-5 w-5"
                      />
                      <a
                        href={docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Interpersonal Skills */}
          <div className="mt-12">
            <h3 className="mb-4 text-xl font-semibold">Interpersonal Skills</h3>
            <ul className="flex flex-wrap justify-center gap-4">
              {config.skills.interpersonal.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-gray-200 px-4 py-1 text-sm font-medium text-gray-700"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-20 w-full max-w-3xl">
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
        </section>
      </div>
    </main>
  );
}
