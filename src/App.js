import "./styles.scss";
import data from "./data/color.json";

const Color = (color) => {
  data["framer-login-page"]["Primary"][color].value;
};

function App() {
  return <div className="App">{Color("Purple")}</div>;
}
console.log(data["framer-login-page"]["Primary"]["Purple"].value);

export default App;
