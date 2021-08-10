import React, { useState } from "react";
import useMarkdown from "../context/markDownContext";

function RawInputData() {
  const [text, setText] = useState("");
  const { setData } = useMarkdown();
  setData(text);

  const changeText = (e) => {
    setText(e.target.value);
  };
  return (
    <div class="ui form">
      <div class="field">
        <label>Enter Your Text</label>
        <textarea onChange={changeText} value={text} rows="20"></textarea>
      </div>
    </div>
  );
}

export default RawInputData;
