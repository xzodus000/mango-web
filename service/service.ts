import axios from "axios";

export const predictMangoService = async (filePath: any) => {
  try {
    const url = "http://5.183.8.75:5000/upload";
    // const url = "http://localhost:5000/upload";

    const formData = new FormData();
    formData.append(
      "file",
      new Blob([await fetch(filePath).then((r) => r.blob())])
    );
    // const response = await axios(url, {
    //   method: 'POST',
    //   body: formData,
    // });
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(
      "🚀 ~ file: service.ts:12 ~ predictMangoService ~ response:",
      response
    );
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};
