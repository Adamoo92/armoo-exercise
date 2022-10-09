import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import "./styles.css";

import md from "./assets/github.md";
import Code from "./components/Code";

// const markdownUrl =
//   "https://raw.githubusercontent.com/Adamoo92/armoo-exercise/react-markdown/README.md";

function App() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(md)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="App">
      <Markdown
        options={{
          overrides: {
            Code: {
              component: Code,
            },
            code: {
              component: Code,
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
