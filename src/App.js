import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import "./styles.css";

import Code from "./components/Code";

const markdownUrl =
  "https://raw.githubusercontent.com/Adamoo92/armoo-exercise/react-markdown/README.md";

function App() {
  const [markdown, setMarkdown] = useState("");

  console.log(markdown);

  useEffect(() => {
    fetch(markdownUrl)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="App">
      <Markdown
        options={{
          overrides: {
            pre: {
              code: {
                component: Code,
              },
            },
          },
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
}
export default App;
