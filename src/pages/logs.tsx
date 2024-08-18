import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./logs.css";

const Logs = ({mdFile}) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(mdFile)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="posted">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
      />
    </div>
  );
};
export default Logs;
