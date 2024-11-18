"use client"

import { useLocale, useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { InstitutionWithProps } from "@/types/Institution";
import { format, addDays } from 'date-fns'
import { Badge } from "@/components/ui/badge";

type Props = {
  companies: InstitutionWithProps[]
  schools: InstitutionWithProps[]
}

export const History = ({ companies, schools }: Props) => {
  const t = useTranslations();
  const locale = useLocale()

  return (
    <div id="history" className="flex md:flex-row flex-col gap-16">
      <div className="flex flex-col space-y-4 w-full">
        <p className="text-4xl">{t("Academic Education")}</p>
        <div className="flex flex-row space-x-4">
          <Separator orientation="vertical" />
          <div className="flex flex-col space-y-4 relative">
            {schools.map((school) => {
              return (
                <div key={school.id} className="flex flex-col space-y-2 relative">
                  <div className="absolute top-4 left-[-24px] w-4 h-4 rounded-full bg-foreground"></div>
                  <p className="text-2xl text-secondary">{school.name}</p>
                  <div className="flex flex-col space-y-4">
                    {school.History.map((history) => {
                      const initialDate = format(addDays(history.initialDate, 1), "yyyy")
                      const finalDate = history.finalDate ? format(addDays(history.finalDate, 1), "yyyy") : t("Present")

                      const formatedDate = `${initialDate} - ${finalDate}`

                      const role = locale === "en" ? history.role : history[`role_${locale}` as keyof typeof history] as string

                      return (
                        <div key={history.id} className="flex flex-col relative">
                          <div className="flex flex-col lg:flex-row space-x-2 justify-start items-start lg:items-center">
                            <p className="text-xl">{role}</p>
                            <Badge variant="outline" className="bg-nav text-secondary">{formatedDate}</Badge>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <p className="text-4xl">{t("Professional Experience")}</p>
        <div className="flex flex-row space-x-4">
          <Separator orientation="vertical" />
          <div className="flex flex-col space-y-2 relative">
            {companies.map((company) => {
              return (
                <div key={company.id} className="flex flex-col space-y-2 relative">
                  <div className="absolute top-4 left-[-24px] w-4 h-4 rounded-full bg-foreground"></div>
                  <p className="text-2xl text-secondary">{company.name}</p>
                  <div className="flex flex-col space-y-4">
                    {company.History.map((history) => {
                      const initialDate = format(addDays(history.initialDate, 1), "MM/yyyy")
                      const finalDate = history.finalDate ? format(addDays(history.finalDate, 1), "MM/yyyy") : t("Present")

                      const formatedDate = `${initialDate} - ${finalDate}`

                      const role = locale === "en" ? history.role : history[`role_${locale}` as keyof typeof history] as string

                      return (
                        <div key={history.id} className="flex flex-col space-y-2 relative">
                          <div className="flex flex-col lg:flex-row space-x-2 justify-start items-start lg:items-center">
                            <p className="text-xl">{role}</p>
                            <Badge variant="outline" className="bg-nav text-secondary">{formatedDate}</Badge>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}