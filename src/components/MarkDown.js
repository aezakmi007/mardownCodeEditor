import React from "react";
import useMarkdown from "../context/markDownContext";
import ReactMarkdown from "react-markdown";

function MarkDown() {
  const { rawData } = useMarkdown();
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "549.5px",
        height: "364px",
        marginTop: "25px",
        color: "white",
        textAlign: "left",
        borderRadius: "5px",
        padding: "11px 14px",
      }}
      class="ui container"
    >
      <ReactMarkdown>{rawData}</ReactMarkdown>
    </div>
  );
}

export default MarkDown;
