import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import "./markdown.scss";

import Pre from "./components/Pre";
import { H1, H2, H3, H4, H5, H6 } from "./components/Title";

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
            h1: {
              component: H1,
            },
            h2: {
              component: H2,
            },
            h3: {
              component: H3,
            },
            h4: {
              component: H4,
            },
            h5: {
              component: H5,
            },
            h6: {
              component: H6,
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
