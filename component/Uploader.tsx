import React, { useState } from "react";
import { Modal, Upload, Button, message } from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import type { RcFile, UploadFile } from "antd/es/upload/interface";
import { useRouter, usePathname } from "next/navigation";
import _ from "lodash";
import {
  predictMangoService,
  predictMangoPhase2Service,
} from "../service/service";
import Dragger from "antd/es/upload/Dragger";

interface UploaderModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UploaderModal: React.FC<UploaderModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const mangoTypes = [
    { name: "Mahachanok", value: "MHN" },
    { name: "Nam dok mai", value: "NDM" },
    { name: "R2E2", value: "R2E2" },
  ];

  const handleCancel = () => {
    setIsModalOpen(false);
    resetFileList();
  };

  const resetFileList = () => {
    setFileList([]);
    setPreviewSrc(null);
  };

  const handleUpload = (info: { file: UploadFile }) => {
    const { file } = info;

    if (file.type && file.type.includes("image/")) {
      setFileList([file as RcFile]);
      readFileAsDataURL(file as RcFile);
    } else {
      message.error("You can only upload image files!");
    }
  };

  const readFileAsDataURL = (file: RcFile) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewSrc(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleClassification = async () => {
    if (fileList.length === 0) {
      message.error("Please upload an image first.");
      return;
    }

    const file = fileList[0] as RcFile;
    const base64Image = await getBase64(file);

    if (base64Image) {
      await handleSubmit(base64Image);
    }
  };

  const getBase64 = (img: RcFile): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(img);
    });
  };

  const handleSubmit = async (base64Image: string) => {
    console.log("Submitting image for prediction...");

    setLoading(true); // Start loading state

    try {
      console.log("🚀 ~ handleSubmit ~ pathname:", pathname);
      if (pathname === "/maturity") {
        const res = await predictMangoPhase2Service(base64Image);
        console.log("🚀 ~ handleSubmit ~ res:", res);

        if (res?.statusCode === 200) {
          const matchedMango = res.data;
          if (matchedMango) {
            router.push(`/grading/${matchedMango}`);
          } else {
            message.error("Mango variety not found!");
          }
        } else {
          message.error("Prediction failed. Try again.");
        }
      } else {
        const res = await predictMangoService(base64Image);
        console.log("🚀 ~ handleSubmit ~ res:", res);

        if (res?.statusCode === 200) {
          const matchedMango = _.find(mangoTypes, { name: res.data });
          if (matchedMango) {
            router.push(`/mango-varieties/${matchedMango.value}`);
          } else {
            message.error("Mango variety not found!");
          }
        } else {
          message.error("Prediction failed. Try again.");
        }
      }
    } catch (error) {
      message.error("Error occurred during mango prediction.");
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <Modal
      title="Upload Image for Classification"
      visible={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Upload
          listType="picture"
          maxCount={1}
          beforeUpload={() => false}
          onChange={handleUpload}
          fileList={fileList}
          onRemove={resetFileList}
        >
          {previewSrc ? null : (
            <div
              className="ant-upload ant-upload-drag"
              style={{ width: "400px", marginLeft: "-100px", padding: "20px" }}
            >
              <div className="ant-upload-drag-container">
                <div
                  style={{ width: "100%", height: "100%" }}
                  className="my-god-dra"
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>

                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>

                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited
                    from uploading company data or other banned files.
                  </p>
                </div>
              </div>
            </div>
          )}
        </Upload>

        {previewSrc && (
          <img
            id="preview"
            src={previewSrc}
            alt="Preview"
            style={{ marginTop: "20px", width: "100%", maxHeight: "300px" }}
          />
        )}

        <Button
          block
          loading={loading} // Show loading spinner
          style={{ marginTop: "20px" }}
          onClick={handleClassification}
          color="#064106"
        >
          CLASSIFICATION
        </Button>
      </div>
    </Modal>
  );
};

export default UploaderModal;
