"use client"

import { Globe } from "lucide-react"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "./ui/separator";
import { usePathname, useRouter } from "next/navigation";

export const LanguageSwitcher = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname();
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const changeLanguage = (newLocale: string) => {
    const newUrl = pathname.replace(`/${locale}`, `/${newLocale}`);

    router.replace(newUrl);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`${className} bg-white dark:bg-black rounded-full p-1 cursor-pointer`}
        >
          <Globe />
        </motion.button>
      </PopoverTrigger>
      <PopoverContent className="bg-background">
        <div className="flex flex-col space-y-2 justify-center items-center">
          <p>{t("Change language")}</p>
          <Separator />
          <button className="w-full hover:bg-background" onClick={() => changeLanguage("en")}>{t("English")} (English)</button>
          <button className="w-full hover:bg-background" onClick={() => changeLanguage("pt")}>{t("Portuguese")} (Português)</button>
          <button className="w-full hover:bg-background" onClick={() => changeLanguage("es")}>{t("Español")} (Español)</button>
        </div>
      </PopoverContent>
    </Popover>
  )
}