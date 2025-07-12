import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon2.svg";
import InstaIcon from "../../../public/insta-icon.svg";
import Gmailicon from "../../../public/gmail-icon.svg";
const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
       <div className="socials flex flex-row gap-2">
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

      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
