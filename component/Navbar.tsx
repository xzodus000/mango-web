"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Modal } from "antd";
import logo from "../public/assets/logo.png";
import contact from "../public/assets/contact.png";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState("contact");

  const pages = [
    { id: 2, name: "Maturity", pathname: "/maturity" },
    { id: 3, name: "Mango varieties", pathname: "/mango-varieties" },
    { id: 4, name: "Commercial grading", pathname: "/grading" },
    { id: 5, name: "Contact", pathname: "/contact" },
    { id: 6, name: "About us", pathname: "/about" },
  ];

  const handleModalOpen = (modalType) => {
    setTypeModal(modalType);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <Image src={logo} alt="Example Image" />
          </Link>
        </div>
        <div className="flex-2">
          <ul className="menu menu-horizontal px-1">
            <li key={1} className={pathname === "/" ? "active" : ""}>
              <Link href="/">Home</Link>
            </li>
            {pages.map((item) => (
              <li
                key={item.id}
                className={pathname.includes(item.pathname) ? "active" : ""}
              >
                {item.pathname === "/contact" || item.pathname === "/about" ? (
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleModalOpen(item.pathname);
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link href={item.pathname}>{item.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal
        title={
          typeModal === "/contact" ? (
            <div
              style={{
                fontSize: "50px",
                fontFamily: "Poppins",
                fontWeight: "500",
              }}
            >
              Contact
            </div>
          ) : (
            <div
              style={{
                fontSize: "50px",
                fontFamily: "Poppins",
                fontWeight: "500",
              }}
            >
              About us
            </div>
          )
        }
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        closable={true}
        width={900}
      >
        {typeModal === "/contact" ? (
          <Image src={contact} alt="Example Image" />
        ) : (
          <p
            style={{
              fontSize: "30px",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
          >
            The authors are grateful for the grant from Mae Fah Luang University
            under the National Science, Research, and Innovation Fund (NSRF)
            2023: grant 662A03049, and to Mae Fah Luang University, Thailand for
            financial support and the provision of experimental sites for this
            research study.
          </p>
        )}
      </Modal>
    </>
  );
};

export default Navbar;
