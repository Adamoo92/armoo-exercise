import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as CodeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import Markdown from "markdown-to-jsx";
import { useState, useEffect } from "react";
import md from "./assets/github.md";

const CodeBlock = ({ className, children }) => {
  let lang = "text"; // default monospaced text
  if (className && className.startsWith("lang-")) {
    lang = className.replace("lang-", "");
  }
  return (
    <SyntaxHighlighter language={lang} style={CodeStyle}>
      {children}
    </SyntaxHighlighter>
  );
};

// markdown-to-jsx uses <pre><code/></pre> for code blocks.
const PreBlock = ({ children, ...rest }) => {
  if ("type" in children && children["type"] === "code") {
    return CodeBlock(children["props"]);
  }
  return <pre {...rest}>{children}</pre>;
};

const Code = ({ children }) => {
  return <div className="inlineCode">{children}</div>;
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
          pre: PreBlock,
        },
      }}
    >
      {markdown}
    </Markdown>
  );
};

export default AppTest;
