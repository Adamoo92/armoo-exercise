import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as CodeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import Markdown from "markdown-to-jsx";
import { useState, useEffect } from "react";
import md from "./assets/github.md";
import "./styles.css";

const preCode = ({ children }) => {
  return <>{children}</>;
};

const AppTest = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(md)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <Markdown
      options={{
        overrides: {
          pre: {
            code: preCode,
          },
        },
      }}
    >
      {markdown}
    </Markdown>
  );
};

export default AppTest;
