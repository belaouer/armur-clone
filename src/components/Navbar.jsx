import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navlinks = [
  {
    id: 1,
    name: "HOME",
    path: "/home",
  },
  {
    id: 2,
    name: "PROJECTS",
    path: "/projects",
  },
  {
    id: 3,
    name: "SERVICES",
    path: "/services",
  },
  {
    id: 4,
    name: "CONTACT",
    path: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 z-50 w-full flex justify-between  pt-5 px-8 pb-3">
      <Link href="/" className="w-[40%]">
        <div className="relative w-[9em] h-[4.4em] flex-1">
          <Image
            src="https://assets-global.website-files.com/65418d587c283640ab4fbb64/654e10dbbb77b3fccf66008d_logotype.png"
            fill={true}
          />
        </div>
      </Link>
      <div className="w-[60%] flex justify-between  text-[0.77em] ">
        <nav className="flex-1">
          <ul className="flex  justify-between">
            <li>
              <Link
                href="/home"
                className={
                  pathname === "/home"
                    ? "text-[#c00e28] font-bold"
                    : "hover:text-[#b6b5b587] transition-colors duration-300"
                }
              >
                HOME
              </Link>
            </li>
            <div>
              <li>
                <Link
                  href="/projects"
                  className={
                    pathname === "/projects"
                      ? "text-[#c00e28] font-bold"
                      : "hover:text-[#b6b5b587] transition-colors duration-300"
                  }
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={
                    pathname === "/services"
                      ? "text-[#c00e28] font-bold"
                      : "hover:text-[#b6b5b587] transition-colors duration-300"
                  }
                >
                  SERVICES
                </Link>
              </li>
            </div>
            <li>
              <Link
                href="contact"
                className={
                  pathname === "/contact"
                    ? "text-[#c00e28] font-bold"
                    : "hover:text-[#b6b5b587] transition-colors duration-300"
                }
              >
                CONTACT
              </Link>
            </li>
            <li className="">
              LA{" "}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
                className="inline-block w-1 h-1 bg-white rounded-full mx-1 mb-[2px]"
              />{" "}
              12:40 PM
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
