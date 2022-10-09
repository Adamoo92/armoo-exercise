import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { duotoneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = ({ children, language }) => {
  return (
    <div className="code">
      <h1>hello</h1>
      <SyntaxHighlighter language={language} style={duotoneDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
