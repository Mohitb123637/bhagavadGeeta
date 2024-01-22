import "./App.css";
import Myboo from "./components/Myboo";
import BgTexture from "./assets/bgI.jpg"
const BgTextureStyle = {
  backgroundImage: `url(${BgTexture})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  minWidth: "auto"
}

function App() {
  return <div style={BgTextureStyle} className="w-full h-full flex justify-center items-center overflow-hidden">
    <Myboo/>
  </div>;
}

export default App;
