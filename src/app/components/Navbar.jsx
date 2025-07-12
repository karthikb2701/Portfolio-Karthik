"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import karthik_logo from "../../../public/karthik_logo.png";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon2.svg";
import InstaIcon from "../../../public/insta-icon.svg";
import Gmailicon from "../../../public/gmail-icon.svg";
import { Moon, Sun } from 'lucide-react';
import useDarkMode from './Darkmode';


     
const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
   const [theme, toggleTheme] = useDarkMode();
  const [navbarOpen, setNavbarOpen] = useState(false);
  

  return (
  
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-white dark:bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl dark:text-white text-black font-semibold"
        >
          <h3>KB</h3>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>   
        </div>
<div className="menu hidden md:block md:w-auto">
          <div className="flex justify-between mx-auto">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="github.com">
            <Image src={InstaIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={Gmailicon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>

<div className="menu md:block md:w-auto">
      {/* <button
      onClick={toggleTheme}
      className="p-2 rounded-xl bg-gray-200 dark:bg-gray-700 transition hover:scale-105"
    >
      {theme === 'dark' ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-600" />}
    </button> */}
</div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
