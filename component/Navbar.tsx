"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../public/assets/logo.png";
import Image from "next/image";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";
const _ = require("lodash");
const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [pages, setPages] = useState([
    // { id: 1, name: "Home", pathname: "/" },
    { id: 2, name: "Maturity", pathname: "/maturity" },
    { id: 3, name: "Mango varieties", pathname: "/mango-varieties" },
    { id: 4, name: "Commercial grading", pathname: "/grading" },
    { id: 5, name: "Contact", pathname: "/contact" },
    { id: 6, name: "About us", pathname: "/about" },
  ]);

  // Accessing query parameters

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <Image
            src={logo} // Path relative to the public directory
            alt="Example Image"
          ></Image>
        </a>
      </div>
      <div className="flex-2">
        <ul className="menu menu-horizontal px-1">
          <li key={1} className={pathname === "/" ? "active" : ""}>
            <Link href="/">Home</Link>
          </li>
          {pages.map((item) => {
            return (
              <li
                key={item.id}
                className={pathname.indexOf(item.pathname) > -1 ? "active" : ""}
              >
                <Link href={item.pathname}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
