import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codetest = `useEffect(() => {
    fetch(markdownUrl)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
`;

const CodeTest = () => {
  return (
    <SyntaxHighlighter language="jsx" style={oneDark}>
      {codetest}
    </SyntaxHighlighter>
  );
};
export default CodeTest;
