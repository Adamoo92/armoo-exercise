import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code2 = ({ children, className }) => {
  return (
    <div className="code">
      <h1>hello</h1>
      <SyntaxHighlighter
        language={className.slice(5) && "text"}
        style={duotoneDark}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code2;
