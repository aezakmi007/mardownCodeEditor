import React from "react";
import useMarkdown from "../context/markDownContext";

function MarkDown() {
  const { rawData } = useMarkdown();
  return (
    <div>
      <div class="ui form">
        <div class="field">
          <label>MarkDown OutPut</label>
          <textarea rows="20" value={rawData}></textarea>
        </div>
      </div>
    </div>
  );
}

export default MarkDown;
