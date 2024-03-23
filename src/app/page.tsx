"use client";
import Image from "next/image";
import ImageUpload from "../../component/ImageUpload";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import start_btn from "../../public/assets/image.png";
import mango from "../../public/assets/mango.png";
import CustomModal from "../../component/Modal";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
    //   <div>{/* <ImageUpload /> */}</div>
    // </main>
    <div className="home-wrapper">
      <div className="left-content">
        <div className="container">
          <div className="box">
            <div className="title">
              Application to
              <br /> commercial
              <br /> <p className="yellow">mango variety</p>
              <p className="green">classification</p>
            </div>
          </div>
          <div className="box">
            <div className="desc">
              We explore three major mango varieties:
              <br /> Nam Dok Mai, Mahachanok, and R2E2.
            </div>
          </div>
          <div className="box">
            <div className="btn-start">
              <CustomModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
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
