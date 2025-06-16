"use client";
import React, { useEffect } from "react";
import { useConfigStore } from "@/lib/stores/useConfigStore";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const { fetchConfig, config } = useConfigStore();

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  return (
    <main className="p-4">
      <div className="mx-auto flex flex-col items-center p-4 text-center">
        {/* Biography */}
        <section className="flex min-h-[85vh] max-w-4xl flex-col items-center md:pt-[20vh]">
          <h1 className="text-4xl font-semibold">Biography</h1>
          <p className="mt-4 text-lg leading-relaxed">
            {config.biography.details}
          </p>
        </section>
        <Separator />
        {/* { Experience } */}
        <section id="experience" className="text-foreground mx-8 w-full pb-12">
          <h1 className="my-8 text-3xl font-semibold">Experience</h1>
          <div className="grid grid-flow-row grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {config.experience.map((item) => (
              <Card key={item.id} className="rounded-2xl p-4 shadow-md">
                <CardContent>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-gray-500">
                    {item.role} — {item.company}
                  </p>
                  <span className="mt-2 block text-gray-400">
                    {item.timeline}
                  </span>
                  <ul className="ml-5list-inside mt-4 list-disc space-y-2">
                    {item.description.map((desc: string, idx: number) => (
                      <li key={idx} className="text-left text-gray-600">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <Separator />
        {/* Skills */}
        <section
          id="skills"
          className="text-foreground y-10 mx-8 h-full w-full"
        >
          <h2 className="my-12 text-3xl font-semibold">Skills</h2>

          {/* Technical Skills */}
          <div className="grid grid-flow-row grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {config.skills.technical.map((skillGroup) => (
              <div
                key={skillGroup.id}
                className="mb-2 border-spacing-4 rounded-md border-2 border-dashed border-blue-400 p-6 dark:border-gray-200"
              >
                <h3 className="mb-4 text-xl font-semibold">
                  {skillGroup.name}
                </h3>
                <ul className="grid grid-cols-1 space-y-2 lg:grid-cols-2 lg:items-center">
                  {skillGroup.items.map(({ name, icon, docs }) => (
                    <li
                      key={name}
                      className="flex items-center gap-2 pl-16 lg:pl-18"
                    >
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
          </div>

          {/* Interpersonal Skills */}
          <div className="mt-12 md:mx-[20vw]">
            <h3 className="mb-4 text-xl font-semibold">Interpersonal Skills</h3>
            <ul className="flex flex-wrap justify-center gap-4">
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
        <Separator />
        {/* Education */}
        <section
          id="education"
          className="mb-20 w-full max-w-3xl py-10 md:mx-[20vw]"
        >
          <h2 className="mb-8 text-3xl font-semibold">Education</h2>
          {config.education.map(
            ({
              id,
              name,
              location,
              educationType,
              degreeCategory,
              major,
              concentration,
              years,
              relevantCoursework,
              icon,
            }) => (
              <div key={id} className="mb-8 pb-4">
                <div className="flex flex-col items-center justify-center px-2 sm:flex-row">
                  <Image
                    src={icon}
                    width={1000}
                    height={1000}
                    alt={`${name} icon`}
                    className="h-16 w-13"
                  />

                  <div className="px-4 text-center md:text-left">
                    <h3 className="text-xl font-semibold">
                      {degreeCategory} in {major}
                      <span className="hidden md:inline"> - </span>
                      <br className="block md:hidden" />
                      {concentration}
                    </h3>
                    <p className="pt-1 text-gray-600">
                      {name} {educationType}
                      <span className="hidden md:inline"> - </span>
                      <br className="block md:hidden" />
                      {location}
                    </p>
                    <p className="text-gray-600">{years}</p>
                  </div>
                </div>

                {relevantCoursework.length > 0 && (
                  <>
                    <p className="mt-2 mb-4 p-2 font-semibold">
                      Relevant Coursework:
                    </p>

                    <ul className="flex flex-wrap justify-center gap-4">
                      {relevantCoursework.map((course) => (
                        <li
                          key={course}
                          className="font-small rounded-full bg-gray-200 px-4 py-1 text-sm text-gray-700"
                        >
                          {course}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )
          )}
        </section>
        <Separator />
      </div>
    </main>
  );
}
