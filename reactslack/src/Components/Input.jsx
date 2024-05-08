import React from "react";
import { FaImage, FaCloudUploadAlt } from "react-icons/fa";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something" />
      <div className="send"></div>
      <FaImage />
      <input type="file" style={{ display: "none" }} id="file" />
      <label htmlFor="file">
        <FaCloudUploadAlt />
      </label>
      <button>Send</button>
    </div>
  );
};

export default Input;
