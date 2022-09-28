import React, { useState } from "react";
import '../css/Upload.css';
const Upload = () => {
  const [image, setImage] = React.useState("");
  const imageRef = React.useRef(null);
    const [listImg, setListImg] = useState()
  function useDisplayImage() {
    const [result, setResult] = React.useState([]);

    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(k => [...k,e.target.result]);
      });

      reader.readAsDataURL(imageFile);
    }
    console.log(result)
    return { result, uploader };
  }

  const { result, uploader } = useDisplayImage();
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
          uploader(e);
        }}
      />
      {result.map((img, index)=>(
        <img ref={imageRef} src={img} alt="" />
        ))}
      {/* {result && <img ref={imageRef} src={result} alt="" />} */}
    </div>
  );
};

export default Upload;
