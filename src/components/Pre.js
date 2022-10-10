import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const PreCode = ({ children, className }) => {
  return (
    <SyntaxHighlighter
      language={className ? className.replace("lang-", "") : ""}
      style={oneDark}
    >
      {children}
    </SyntaxHighlighter>
  );
};

const Pre = ({ children }) => {
  return PreCode(children["props"]);
};

export default Pre;
