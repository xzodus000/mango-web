import axios from "axios";

const base64ToBlob = (base64Data: any, contentType = "", sliceSize = 512) => {
  const byteCharacters = atob(base64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);

    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
};

export const predictMangoService = async (base64Image: any) => {
  console.log("Submitting image for prediction...");

  const base64Data = base64Image.split(",")[1]; // Get the base64 part
  console.log("🚀 ~ predictMangoService ~ base64Data:", base64Data);

  const blob = base64ToBlob(base64Data, "image/jpeg");
  console.log("🚀 ~ predictMangoService ~ blob:", blob);

  const file = new File([blob], "mango.jpg", { type: "image/jpeg" });

  const url = "http://5.183.8.75:5000/upload";
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
