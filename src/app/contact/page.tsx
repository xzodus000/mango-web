"use client";
import Image from "next/image";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
// import start_btn from "../../public/assets/image.png";

// import mango from "../../public/assets/mango.png";
import mango from "../../../public/assets/mango.png";

// import CustomModal from "../../../component/Modal";
import UploaderModal from "../../../component/Uploader";
export default function Contract() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            <div className="desc break-words">
              We explore three major mango varieties:
              <br /> Nam Dok Mai, Mahachanok, and R2E2.
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
          ></Image>
        </div>
      </div>
    </div>
  );
}
