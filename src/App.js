import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import "./markdown.scss";

import md from "./assets/github.md";

import Pre from "./components/Pre";

const H4 = ({ children }) => {
  const haveId = children.toString().includes("{");
  const idIndex = haveId ? children.toString().indexOf("{") : null;
  console.log(children, haveId, idIndex);
  return (
    <h2 id={haveId ? children.toString().slice(idIndex + 2, -1) : children}>
      {children.toString().slice(0, idIndex - 1)}
    </h2>
  );
};

const markdownUrl =
  "https://raw.githubusercontent.com/Adamoo92/armoo-exercise/react-markdown/README.md";

function App() {
  const [markdown, setMarkdown] = useState("");

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
            h4: {
              component: H4,
            },

            pre: {
              component: Pre,
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
