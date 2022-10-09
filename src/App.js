import { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

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
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
export default App;
