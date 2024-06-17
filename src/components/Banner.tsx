"use client"

import { useTranslations } from "next-intl";
import { useMediaQuery } from "usehooks-ts";

export const Banner = () => {
  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });
  const t = useTranslations();

  return (
    <div id="home" className={`flex flex-col space-y-4 justify-start ${isDesktop ? "items-start pt-32" : "items-center"}`}>
      <div>
        <p className="text-6xl text-center">Gustavo Henrique Felicidade</p>
        <p className="text-3xl text-center text-secondary">{t("Full Stack Developer")}</p>
      </div>
      <p className="text-2xl">{t("Hi, my name is Gustavo and I'm a Brazilian Full Stack Developer, currently a Systems Development Technician and studying a higher education course in Systems Analysis and Development :)")}</p>
    </div>
  )
}