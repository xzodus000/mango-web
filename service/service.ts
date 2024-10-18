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

  const [metadata, base64Data] = base64Image.split(","); // Split the metadata from the base64 data
  const mimeType = metadata.match(/:(.*?);/)[1]; // Extract the MIME type from the metadata
  console.log("🚀 ~ predictMangoService ~ base64Data:", base64Data);
  console.log("🚀 ~ predictMangoService ~ mimeType:", mimeType);

  const blob = base64ToBlob(base64Data, mimeType); // Use the dynamic MIME type
  console.log("🚀 ~ predictMangoService ~ blob:", blob);

  const file = new File([blob], "mango", { type: mimeType }); // Use a generic name without extension
  console.log("🚀 ~ predictMangoService ~ file:", file);

  const url = "http://5.183.8.75:5000/upload";
  const formData = new FormData();
  formData.append("file", file);

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
