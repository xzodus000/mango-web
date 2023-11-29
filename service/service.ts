import axios from "axios";

export const  predictMangoService = async (filePath : any) => {
 try {
    const formData = new FormData();
    formData.append('file', new Blob([await fetch(filePath).then(r => r.blob())]));
    // const response = await axios('http://localhost:5000/upload', {
    //   method: 'POST',
    //   body: formData,
    // });
       const response = await axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
       console.log("🚀 ~ file: service.ts:12 ~ predictMangoService ~ response:", response)
       return response.data
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};


