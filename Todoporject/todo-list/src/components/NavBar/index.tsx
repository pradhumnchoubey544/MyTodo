"use client";

import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import styles from "@/styles";
import Image from "next/image";
import { useThemeContext } from "@/contexts/lightDarkmode";

const NavBar = () => {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <motion.nav
  variants={navVariants}
  initial="hidden"
  whileInView="show"
  animate={{ backgroundColor: darkMode ? "#1a1a2e" : "#e5e7eb" }}
  transition={{ duration: 0.5 }}
  className={`${styles.xPaddings} w-full py-6 relative flex justify-between items-center transition-all 
    ${darkMode ? "text-white" : "text-black"}`}
>
      <Image src="/check.png" alt="Navbar icon" width={27} height={27} />
      <h2 className="font-extrabold text-[24px] leading-[30px]">
        To-Do...
      </h2>

      <motion.button
        onClick={toggleTheme}
        whileTap={{ scale: 0.9 }}
        animate={{ backgroundColor: darkMode ? "#333" : "#ddd", color: darkMode ? "#fff" : "#000" }}
        transition={{ duration: 0.3 }}
        className="p-2 rounded-md transition-all"
      >
        {darkMode ? "🌞 Light" : "🌙 Dark"}
      </motion.button>
    </motion.nav>
  );
};

export default NavBar;