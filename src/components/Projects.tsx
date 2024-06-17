"use client"

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ProjectWithProps } from "@/types/Project";
import Icon, { IconNames } from "@/components/Icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge";

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
              <CarouselItem key={project.id} className="flex flex-col items-center justify-start basis-2/3 xl:basis-1/3">
                <Image
                  src={project.image}
                  alt={project.title}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-48 sm:h-64 md:h-72 xl:h-80 2xl:h-96 rounded-lg shadow-lg object-cover"
                />
                <div className="flex flex-col items-center justify-center space-y-2">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <p>{description}</p>
                  <div className="flex flex-row space-x-2">
                    <TooltipProvider>
                      {project.Link.map((link) => (
                        <Tooltip key={link.id}>
                          <TooltipTrigger>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-secondary hover:text-foreground-hover"
                            >
                              <Icon name={link.icon as IconNames} className="w-6 h-6 " />
                            </a>
                          </TooltipTrigger>
                          <TooltipContent className="bg-nav">
                            <p className="bg-nav text-foreground">{t(link.name)}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </TooltipProvider>
                  </div>
                </div>
              </CarouselItem>

            )
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:block" />
        <CarouselNext className="hidden lg:block" />
      </Carousel>
    </div>
  )
}