import axios from "axios";

const base64ToBlob = (base64Data: any, contentType: any) => {
  const byteCharacters = atob(base64Data);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: contentType });
};

export const predictMangoService = async (base64Image: any) => {
  console.log("Submitting image for prediction...");

  const [prefix, base64Data] = base64Image.split(","); // Get the base64 part
  console.log("🚀 ~ predictMangoService ~ base64Data:", base64Data);

  const mimeType = prefix.match(/data:(.*?);/)[1]; // Get the MIME type from the prefix
  const blob = base64ToBlob(base64Data, mimeType);
  console.log("🚀 ~ predictMangoService ~ blob:", blob);

  const file = new File([blob], `mango.${mimeType.split("/")[1]}`, {
    type: mimeType,
  });

  const url = "http://5.183.8.75:5000/upload";
  // const url = "http://127.0.0.1:5000/upload-phase-maturity";
  // const url = "http://127.0.0.1:5000/upload";

  const formData = new FormData();
  formData.append("file", file);
  console.log("🚀 ~ predictMangoService ~ formData:", formData);

  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during prediction:", error);
    return null; // Return null in case of an error
  }
};
export const predictMangoPhase2Service = async (base64Image: any) => {
  console.log("Submitting image for prediction...");

  const [prefix, base64Data] = base64Image.split(","); // Get the base64 part
  console.log("🚀 ~ predictMangoService ~ base64Data:", base64Data);

  const mimeType = prefix.match(/data:(.*?);/)[1]; // Get the MIME type from the prefix
  const blob = base64ToBlob(base64Data, mimeType);
  console.log("🚀 ~ predictMangoService ~ blob:", blob);

  const file = new File([blob], `mango.${mimeType.split("/")[1]}`, {
    type: mimeType,
  });

  const url = "http://5.183.8.75:5000/upload-phase-maturity";
  // const url = "http://127.0.0.1:5000/upload-phase-maturity";
  // const url = "http://127.0.0.1:5000/upload";

  const formData = new FormData();
  formData.append("file", file);
  console.log("🚀 ~ predictMangoService ~ formData:", formData);

  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during prediction:", error);
    return null; // Return null in case of an error
  }
};

// export const predictMangoService = async (filePath: any) => {
//   console.log("🚀 ~ predictMangoService ~ filePath:", filePath);
//   try {
//     const url = "http://5.183.8.75:5000/upload";
//     // const url = "http://localhost:5000/upload";

//     const formData = new FormData();

//     formData.append(
//       "file",
//       new Blob([await fetch(filePath).then((r) => r.blob())])
//     );
//     console.log("🚀 ~ predictMangoService ~ formData:", formData);
//     // const response = await axios(url, {
//     //   method: 'POST',
//     //   body: formData,
//     // });

//     const response = await axios.post(url, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     console.log(
//       "🚀 ~ file: service.ts:12 ~ predictMangoService ~ response:",
//       response
//     );

//     return response.data;
//   } catch (error) {
//     console.error("Error uploading image:", error);
//   }
// };
