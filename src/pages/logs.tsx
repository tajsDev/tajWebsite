import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./logs.css";

// Define the Props interface
interface LogsProps {
  mdFile: string; // Assuming mdFile is a URL or path string
}

const Logs: React.FC<LogsProps> = ({ mdFile }) => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch(mdFile)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [mdFile]); // Include mdFile in the dependency array

  return (
    <div className="posted">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        className="reactMarkDown"
      />
    </div>
  );
};

export default Logs;

