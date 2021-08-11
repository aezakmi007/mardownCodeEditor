import React, { useEffect, useState } from "react";
import useMarkdown from "../context/markDownContext";

function RawInputData() {
  const [text, setText] = useState("# Welcome to the markdown Editor");
  const { setData } = useMarkdown();
  // setData(text);

  const changeText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setData(text);
  }, [text]);
  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Your Text</label>
        <textarea onChange={changeText} value={text} rows="20"></textarea>
      </div>
    </div>
  );
}

export default RawInputData;
