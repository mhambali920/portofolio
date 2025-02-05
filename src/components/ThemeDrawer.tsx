"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  Moon,
  Sun,
  Leaf,
  Droplet,
  Check,
  CircleX,
} from "lucide-react";

function ThemeDrawer() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const themeOptions = [
    {
      key: "light",
      name: "Default",
      icon: <Sun className="h-5 w-5" />,
      colors: {
        background: "bg-white",
        text: "text-black",
        border: "border-stone-300",
      },
    },
    {
      key: "dark-classic",
      name: "Dark",
      icon: <Moon className="h-5 w-5" />,
      colors: {
        background: "bg-stone-900",
        text: "text-white",
        border: "border-stone-700",
      },
    },
    {
      key: "tangerine",
      name: "Tangerine",
      icon: <Droplet className="h-5 w-5 text-orange-500" />,
      colors: {
        background: "bg-orange-50",
        text: "text-orange-900",
        border: "border-orange-300",
      },
    },
    {
      key: "dark-tangerine",
      name: "Tangerine (dark)",
      icon: <Droplet className="h-5 w-5 text-orange-400" />,
      colors: {
        background: "bg-orange-900",
        text: "text-orange-100",
        border: "border-orange-700",
      },
    },
    {
      key: "mint",
      name: "Mint",
      icon: <Leaf className="h-5 w-5 text-green-500" />,
      colors: {
        background: "bg-green-50",
        text: "text-green-900",
        border: "border-green-300",
      },
    },
    {
      key: "dark-mint",
      name: "Mint (dark)",
      icon: <Leaf className="h-5 w-5 text-green-400" />,
      colors: {
        background: "bg-green-900",
        text: "text-green-100",
        border: "border-green-700",
      },
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        animate={{
          rotate: isHovered ? 0 : 360,
          transition: { duration: 2, repeat: Infinity, ease: "linear" },
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Settings
          className="h-6 w-6 cursor-pointer text-stone-800 dark:text-stone-200"
          onClick={() => setIsOpen(!isOpen)}
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-black"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-40 h-full w-64 bg-white p-6 shadow-lg dark:bg-stone-800"
            >
              <div className="mb-6 flex items-center justify-between">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="transform text-stone-500 transition-transform duration-500 hover:rotate-90 hover:text-stone-700"
                >
                  <CircleX className="h-6 w-6" />
                </motion.button>

                <h2 className="text-xl font-bold text-stone-800 dark:text-white">
                  Select Theme
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {themeOptions.map((option) => (
                  <motion.button
                    key={option.key}
                    onClick={() => setTheme(option.key)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex transform flex-col items-center justify-center rounded-lg p-4 shadow-md transition-all duration-300 ${
                      mounted && theme === option.key
                        ? `${option.colors.background} ${option.colors.text} ${option.colors.border} border-2`
                        : `${option.colors.background} ${option.colors.text} border border-transparent hover:scale-105`
                    } hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                  >
                    {mounted && theme === option.key && (
                      <Check
                        className="absolute right-2 top-2 h-5 w-5 text-primary"
                        strokeWidth={3}
                      />
                    )}
                    {option.icon}
                    <span className="mt-2 text-sm font-medium">
                      {option.name}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ThemeDrawer;
