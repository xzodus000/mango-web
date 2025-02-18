"use client";
import Image from "next/image";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
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
export default function Maturity() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cards: MangoCard[] = [
    {
      image: NDM,
      title: "Namdokmai Sithong ",
      go_to_url: "/grading/phase/NDM",
      text: "Nam Dok Mai Mango It is a local mango in Thailand. Currently found growing in every region. and is grown for trade in much of the region Central, Northern, Northeastern, Eastern, and Western regions.",
    },
    {
      image: MHN,
      title: "Mahachanok ",
      go_to_url: "/grading/phase/MHN",
      text: "Mahachanok mango is a variety of mango that is widely grown in Thailand, mostly grown in northern areas. It is also cultivated in the central region, but like in the north, their availability in the market is limited to a single season, from April to May.",
    },
    {
      image: R2E2,
      title: "R2E2",
      go_to_url: "/grading/phase/R2E2",
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
              <p className="green">classification</p>
            </div>
          </div>
          <div className="box">
            <div className="desc">
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
