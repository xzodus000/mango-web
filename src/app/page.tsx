"use client";
import Image from "next/image";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { MenuProps, Modal, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
// import start_btn from "../../public/assets/image.png";

// import mango from "../public/assets/mango.png";
import mango from "../../public/assets/mango_maturity.png";

// import CustomModal from "../../component/Modal";
import UploaderModal from "../../component/Uploader";
import MangoSlider, { MangoCard } from "../../component/MangoSlider";
import R2E2 from "../../public/assets/component/R2E2/R2E2 01.png";
import MHN from "../../public/assets/component/MHN/MHN01.png";
import NDM from "../../public/assets/component/NDM/NDM01.png";
import { useRouter } from "next/navigation";
export default function Maturity() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const go_to = (url: string) => {
    //localhost:3000/grading/NDM_M1
    http: router.push(url);
  };
  const itemsNDM: MenuProps["items"] = [
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
  ];
  const itemsMHN: MenuProps["items"] = [
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
  ];
  const itemsR2E2: MenuProps["items"] = [
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
  ];
  const cards: MangoCard[] = [
    {
      image: NDM,
      title: "Namdokmai Sithong",
      go_to_url: "/grading/phase/NDM",
      dropdown: itemsNDM,
      text: "Nam Dok Mai Mango It is a local mango in Thailand. Currently found growing in every region. and is grown for trade in much of the region Central, Northern, Northeastern, Eastern, and Western regions.",
    },
    {
      image: MHN,
      title: "Mahachanok ",
      go_to_url: "/grading/phase/MHN",
      dropdown: itemsMHN,
      text: "Mahachanok mango is a variety of mango that is widely grown in Thailand, mostly grown in northern areas. It is also cultivated in the central region, but like in the north, their availability in the market is limited to a single season, from April to May.",
    },
    {
      image: R2E2,
      title: "R2E2",
      go_to_url: "/grading/phase/R2E2",
      dropdown: itemsR2E2,
      text: "R2E2 is a mango variety known for its large fruit size and vibrant color. In 1985, mango scholars Mr. Ian Balle, Mr. Ross Wright, and Mr. Peter Beale from Australia developed this variety. It was selected from seedlings of the Florida Kent mango and named 'R2E2' (R2E2), which stands for 'Row 2, Experiment 2', reflecting its origin in the development process at the Horticultural Research Institute in Australia.",
    },
  ];
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
    //   <div>{/* <ImageUpload /> */}</div>
    // </main>
    <div className="home-wrapper">
      <UploaderModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <div className="left-content">
        <div className="container">
          <div className="box">
            <div className="title">
              Application to
              <br /> commercial
              <br /> <p className="yellow">mango maturity</p>
              <p className="title">classification</p>
            </div>
          </div>
          <div className="box">
            <div className="desc break-words">
              We explore three major mango varieties:
              <br /> Nam Dok Mai, Mahachanok, and R2E2. and Matutrity Stage (M1,
              M2 and M3)
            </div>
          </div>
          <div className="box">
            <div className="btn-start">
              <button
                onClick={() => setIsModalOpen(true)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={"/assets/image.png"} // Path relative to the public directory
                  alt="start-search"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="mango">
          <Image
            src={mango} // Path relative to the public directory
            alt="Example Image"
            width={700}
          ></Image>
        </div>
        <MangoSlider data={cards} />
      </div>
    </div>
  );
}
