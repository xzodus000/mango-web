"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Dropdown, MenuProps, Modal } from "antd";
import logo from "../public/assets/logo.png";
import contact from "../public/assets/contact.png";

type Page = {
  id: number;
  name: string;
  pathname: string;
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState<"contact" | "about">("contact");
  const router = useRouter();
  const pages: Page[] = [
    // { id: 3, name: "Mango varieties", pathname: "/mango-varieties" },
    { id: 5, name: "Contact", pathname: "/contact" },
    { id: 6, name: "About us", pathname: "/about" },
  ];

  const go_to = (url: string) => {
    http: router.push(url);
  };
  5;
  const items: MenuProps["items"] = [
    {
      key: "NDM",
      label: "Namdokmai Sithong",
      children: [
        {
          key: "NDM_M1",
          label: "M1 immature",
          onClick: () => go_to("/grading/NDM_M1"),
        },
        {
          key: "NDM_M2",
          onClick: () => go_to("/grading/NDM_M2"),
          label: "M2 Exporting maturity",
        },
        {
          key: "NDM_M3",
          onClick: () => go_to("/grading/NDM_M3"),
          label: "M3 Exporting maturity",
        },
      ],
    },
    {
      key: "MHN",
      label: "Mahachanok",
      children: [
        {
          key: "MHN_M1",
          onClick: () => go_to("/grading/MHN_M1"),
          label: "M1 immature",
        },
        {
          key: "MHN_M2",
          onClick: () => go_to("/grading/MHN_M2"),
          label: "M2 Exporting maturity",
        },
        {
          key: "MHN_M3",
          onClick: () => go_to("/grading/MHN_M3"),
          label: "M3 Exporting maturity",
        },
      ],
    },
    {
      key: "R2E2",
      label: "R2E2",
      children: [
        {
          key: "R2E2_M1",
          onClick: () => go_to("/grading/R2E2_M1"),
          label: "M1 immature",
        },
        {
          key: "R2E2_M2",
          onClick: () => go_to("/grading/R2E2_M2"),
          label: "M2 Exporting maturity",
        },
      ],
    },
  ];

  const handleModalOpen = (modalType: "contact" | "about") => {
    setTypeModal(modalType);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case ">
            <Image className="logo" src={logo} alt="Example Logo" />
          </Link>
        </div>
        <div className="flex-2">
          <ul className="menu menu-horizontal px-1 ">
            <li key={1} className={pathname === "/" ? "active" : ""}>
              <Link href="/">
                <div className="nav-title">Home</div>
                {/* nav-title */}
              </Link>
            </li>

            <Dropdown menu={{ items }}>
              <li
                key={1}
                className={pathname === "/mango-varieties" ? "active" : ""}
              >
                <Link href="/mango-varieties">
                  {" "}
                  <div className="  nav-title">Mango varieties</div>
                </Link>
              </li>
            </Dropdown>
            {pages.map((item) => (
              <li
                key={item.id}
                className={pathname.includes(item.pathname) ? "active" : ""}
              >
                {item.pathname === "/contact" || item.pathname === "/about" ? (
                  <a
                    onClick={(e) => {
                      let isContact: boolean = true;
                      if (item.pathname === "/about") {
                        isContact = false;
                      }
                      e.preventDefault();
                      handleModalOpen(isContact ? "contact" : "about");
                    }}
                  >
                    <div className="  nav-title">{item.name}</div>
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
          <div
            style={{
              fontSize: "50px",
              fontFamily: "Arial",
              fontWeight: "500",
            }}
          >
            {typeModal === "contact" ? "Contact" : "About us"}
          </div>
        }
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        closable
        width={900}
      >
        {typeModal === "contact" ? (
          <Image src={contact} alt="Contact" />
        ) : (
          <p
            style={{
              fontSize: "30px",
              fontFamily: "Arial",
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
