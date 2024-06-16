"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ThemeToggle = ({ classname, container }: { classname?: string, container?: string }) => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (

    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`${container} flex flex-row justify-between gap-4 bg-white dark:bg-black rounded-full p-1 cursor-pointer`}
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
    >
      <Sun className={`w-8 h-8 p-1 border-foreground border-2 dark:border-none rounded-full`} />
      <Moon className={`w-8 h-8 p-1  dark:border-foreground dark:border-2 rounded-full`} />
    </motion.button>
  )
}

export default ThemeToggle;