// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// const Code = ({ children }) => {
//   return (
//     <div className="code">
//       <SyntaxHighlighter
//         language={className ? className.slice(5) : ""}
//         style={oneDark}
//       >
//         {children}
//       </SyntaxHighlighter>
//     </div>
//   );
// };

const Pre = ({ children }) => {
  return (
    <pre>
      <Code />
    </pre>
  );
};

export default Pre;
