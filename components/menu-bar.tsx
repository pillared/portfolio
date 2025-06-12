"use client";

import * as React from "react";
import Link from "next/link";
import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  HomeIcon,
  User,
  UserIcon,
  Briefcase,
  BriefcaseIcon,
  SchoolIcon,
  FolderIcon,
  InfoIcon,
  LibraryIcon,
  WrenchIcon,
  MailIcon,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  navigationMenuItemClass,
  navigationMenuContainerClass,
  navigationMenuCustomClass,
} from "@/components/ui/navigation-menu";

export function NavMenu() {
  return (
    <div className="flex h-[10vh] w-screen items-center justify-center md:justify-start">
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="grid w-full grid-cols-2 gap-2 px-4 py-2 md:flex md:flex-nowrap md:items-center md:justify-start md:gap-4">
          <NavigationMenuItem className="relative order-1 flex items-center gap-2 md:order-none">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/" className="flex-row items-center gap-2">
                <HomeIcon />
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="relative order-3 flex items-center gap-2 md:order-none">
            <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
              <LibraryIcon className="mr-2 w-[16px]" />
              About
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute top-full left-0 mt-2 w-56">
              <ul className="flex grid w-[200px] flex-col gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2">
                      <UserIcon />
                      Biography
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/experience"
                      className="flex-row items-center gap-2"
                    >
                      <BriefcaseIcon />
                      Experience
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/skills"
                      className="flex-row items-center gap-2"
                    >
                      <WrenchIcon />
                      Skills
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/education"
                      className="flex-row items-center gap-2"
                    >
                      <SchoolIcon />
                      Education
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="relative order-2 flex items-center gap-2 md:order-none">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/projects" className="flex-row items-center gap-2">
                <FolderIcon />
                Projects
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="relative order-4 flex items-center gap-2 md:order-none">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/contact" className="flex-row items-center gap-2">
                <MailIcon />
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
