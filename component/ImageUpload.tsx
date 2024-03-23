"use client";
import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { predictMangoService } from "../service/service";
import { InboxOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";

var _ = require("lodash");

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng;
};

const ImageUpload: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [mangoType, setMangoType] = useState<any>([
    { name: "Mahachanok", value: "MHN" },
    { name: "Nam dok mai", value: "NDM" },
    { name: "R2E2", value: "R2E2" },
  ]);

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
        // handleSubmit(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleSubmit = async (img: any) => {
    if (pathname === "/") {
      const res = await predictMangoService(img);
      console.log("🚀 ~ handleSubmit ~ res:", res);
      if (res?.statusCode === 200) {
        mangoType.filter;
        const predictMango = _.filter(mangoType, { name: res.data });
        console.log("🚀 ~ handleSubmit ~ predictMango:", predictMango);
        // setMangoType(res.data);
        router.push(`mango-varieties/${predictMango[0].value}`);
      }

      console.log("🚀 ~ file: ImageUpload.tsx:57 ~ handleSubmit ~ res:", res);
      // setMangoType;
    } else if (pathname === "/maturity") {
      console.log("🚀 ~ handleSubmit ~ img:", img);
    }
  };

  const { Dragger } = Upload;

  const props: UploadProps = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    // beforeUpload: () => {
    //   return false;
    // },
    maxCount: 1, // Set maxCount to 1 to allow only one file to be uploaded
    onChange(info) {
      // handleChange(info);
      console.log("🚀 ~ onChange ~ info:", info);
      if (info.fileList.length <= 0) {
        setImageUrl("");
      }
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        getBase64(info.file.originFileObj as RcFile, (url) => {
          setImageUrl(url);
          // handleSubmit(url);
        });
        // handleChange(info);
      } else if (status === "error") {
        console.log("🚀 ~ onChange ~ status:", info);

        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for single file upload. Strictly prohibited from uploading
          company data or other banned files.
        </p>
      </Dragger>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <Button
          disabled={imageUrl === ""}
          onClick={() => {
            handleSubmit(imageUrl);
          }}
          type="primary"
          style={{
            backgroundColor: "#FFB13B",
            width: "80%",
            fontSize: "24px",
            height: "50px",
          }}
        >
          CLASSIFICATION
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
