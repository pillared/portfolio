import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { TechnicalSkills } from "@/lib/config/types";

interface SkillsMasonryProps {
  groups: TechnicalSkills[];
}

export function SkillsMasonry({ groups }: SkillsMasonryProps) {
  return (
    <div className="mx-auto max-w-6xl columns-1 gap-6 text-left sm:columns-2 lg:columns-3">
      {groups.map((group) => (
        <Card
          key={group.id}
          className="mb-6 break-inside-avoid rounded-2xl py-6 shadow-md"
        >
          <CardContent>
            <h3 className="mb-6 text-xl font-semibold">{group.name}</h3>
            <ul className="grid grid-cols-3 gap-3">
              {group.items.map(({ name, icon, docs }) => (
                <li key={name}>
                  <a
                    href={docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col items-center gap-2 rounded-lg bg-gray-100 p-3 transition-colors hover:bg-blue-100 active:bg-blue-200 dark:bg-gray-800 dark:hover:bg-blue-600 dark:active:bg-blue-500"
                  >
                    <Image
                      src={icon}
                      width={40}
                      height={40}
                      alt=""
                      className="h-10 w-10 object-contain"
                    />
                    <span className="text-center text-xs leading-tight text-gray-800 dark:text-gray-200">
                      {name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
