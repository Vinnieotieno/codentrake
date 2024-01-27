"use client";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { MenuIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import { navItems, socials } from "@/constants/navbar";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  return (
    <header className="w-full bg-brandDark text-white md:bg-brandlighter fixed top-0 left-0 right-0 z-[999] main-container">
      <nav className={`py-2  ${isSticky ? "sticky top-0 left-0 right-0 border bg-brandSlightDark text-white duration-300 z-[999]" : ""}`}>
        <Container className="flex justify-between items-center text-base ">
          <Link className="" href="/">
            <img src={logo} className="h-12 w-20" />
          </Link>

          {/* Navbar items for large screens */}
          <ul className="md:flex space-x-12 hidden cursor-pointer">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className={`block text-base text-brandLighter hover:text-brandPrimary ${
                  pathname === path && "font-medium text-brandLight"
                }  whitespace-nowrap`}>
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-10 flex items-center">
            {socials.map((social, idx) => (
              <a key={idx} href={social.link} target="blank" className="md:flex hidden">
                <img src={social.img} className="h-10 w-10 text-brandLighter" />
              </a>
            ))}

            {/* menu btns */}
            <div className="md:hidden">
              <DropdownMenu className="">
                <DropdownMenuTrigger asChild>
                  <button className="focus:outline-none text-brandMedium focus:text-brandSecondDark">
                    <MenuIcon className="h-10 w-10 " />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-4 ">
                  <DropdownMenuGroup>
                    {navItems.map(({ link, path }) => (
                      <DropdownMenuItem key={link}>
                        <Link
                          to={path}
                          className={`block text-base text-brandDark hover:text-brandPrimary  whitespace-nowrap ${
                            pathname === path && "font-medium"
                          }`}>
                          {link}
                        </Link>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
