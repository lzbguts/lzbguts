"use client"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Project } from "@prisma/client";
import { ProjectWithProps } from "@/types/Project";
import { useEffect, useState } from "react";
import { getProjects } from "@/actions";
import Icon, { IconNames } from "@/components/Icon";

type Props = {
  projects: ProjectWithProps[]
}

export const Projects = ({ projects }: Props) => {
  const t = useTranslations();
  const locale = useLocale()

  return (
    <div id="projects" className={`flex flex-col space-y-4`}>
      <p className="text-4xl">{t("Projects")}</p>
      <Carousel>
        <CarouselContent>
          {projects.map((project) => {
            const description = locale === "en" ? project.description : project[`description_${locale}` as keyof typeof project] as string

            return (
              <CarouselItem key={project.id} className="flex flex-col items-center justify-start default:basis-full sm:basis-2/3 lg:basis-1/3">
                <div className="relative w-full h-96">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <p>{description}</p>
                  <div className="flex flex-row space-x-2">
                    {project.Link.map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-foreground-hover"
                      >
                        <Icon name={link.icon as IconNames} className="w-6 h-6 " />
                      </a>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}