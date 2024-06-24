import React, { useState } from "react";

const Content = ({ content }) => {
  const [input, setInput] = useState("");
  return (
    <>
      <p>{content}</p>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
    </>
  );
};

export { Content };
export default Content;
