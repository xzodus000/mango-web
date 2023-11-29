"use client";
import Image from "next/image";
import ImageUpload from "../../component/ImageUpload";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div>
        <ImageUpload />
      </div>
    </main>
  );
}
