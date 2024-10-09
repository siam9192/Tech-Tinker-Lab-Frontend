import axios from 'axios';

export async function UploadImage(image: File) {
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=c9c302a9d5cee64c8eb4dde4d9803027`,
    { image: image },
    {
      headers: {
        'content-type': 'multipart/form-data',
      },
    },
  );

  return await data.data.display_url;
}
