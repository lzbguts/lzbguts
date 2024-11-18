"use client"

import { useTranslations } from "next-intl";

export const Banner = () => {
  const t = useTranslations();

  return (
    <div id="home" className={`flex flex-col space-y-4 justify-start`}>
      <div>
        <p className="text-6xl text-center">Gustavo Henrique Felicidade</p>
        <p className="text-3xl text-center text-secondary">{t("Software Engineer")}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl">{t("banner_1")}</p>
        <p className="text-xl">{t("banner_2")}</p>
        <p className="text-xl">{t("banner_3")}</p>
        <p className="text-xl">{t("banner_4")}</p>
      </div>
    </div>
  )
}