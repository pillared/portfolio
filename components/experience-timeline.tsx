import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ExperienceItem, TechnicalSkills } from "@/lib/config/types";
import { cn } from "@/lib/utils";

interface ExperienceTimelineProps {
  items: ExperienceItem[];
  skills: TechnicalSkills[];
}

export function ExperienceTimeline({ items, skills }: ExperienceTimelineProps) {
  const skillsByName = new Map(
    skills.flatMap((group) => group.items).map((skill) => [skill.name, skill])
  );

  return (
    <ol className="relative mx-auto max-w-6xl text-left">
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-blue-900 to-transparent md:left-1/2 md:-translate-x-1/2 dark:from-orange-700"
      />
      {items.map((item, idx) => {
        const isRight = idx % 2 === 1;
        return (
          <li
            key={item.id}
            className="relative mb-12 pl-12 last:mb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0"
          >
            <span
              aria-hidden
              className={cn(
                "border-background absolute top-8 left-4 h-5 w-5 -translate-x-1/2 rounded-full border-4 bg-blue-900 md:left-1/2 dark:bg-orange-700",
                idx === 0 && "ring-4 ring-blue-900/30 dark:ring-orange-700/30"
              )}
            />
            <span
              className={cn(
                "hidden pt-7 text-lg font-semibold text-gray-500 md:row-start-1 md:block dark:text-gray-400",
                isRight ? "md:col-start-1 md:text-right" : "md:col-start-2"
              )}
            >
              {item.timeline}
            </span>
            <Card
              className={cn(
                "rounded-2xl py-8 shadow-md transition-colors duration-300 hover:bg-blue-100 md:row-start-1 dark:hover:bg-gray-800",
                isRight ? "md:col-start-2" : "md:col-start-1"
              )}
            >
              <CardContent>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
                <p className="text-gray-800 dark:text-gray-200">
                  {item.role} — {item.company}
                </p>
                <span className="mt-2 block text-gray-500 md:hidden dark:text-gray-400">
                  {item.timeline}
                </span>
                <ul className="mt-4 list-disc space-y-2 ps-5">
                  {item.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-wrap text-gray-700 dark:text-gray-300"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
                {item.tech && item.tech.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.tech
                      .map((name) => skillsByName.get(name))
                      .filter((skill) => skill !== undefined)
                      .map(({ name, icon, docs }) => (
                        <li key={name}>
                          <a
                            href={docs}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={name}
                            aria-label={name}
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 transition-transform hover:scale-110 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-blue-600"
                          >
                            <Image
                              src={icon}
                              width={24}
                              height={24}
                              alt=""
                              className="h-6 w-6 object-contain"
                            />
                          </a>
                        </li>
                      ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </li>
        );
      })}
    </ol>
  );
}
