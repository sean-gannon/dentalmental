import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Navbar from "./components/Navbar";
import "./styles/index.css";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <div className="snap-y snap-mandatory h-screen overflow-scroll">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

export default App;