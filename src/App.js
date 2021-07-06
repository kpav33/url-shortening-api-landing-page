import "./styles.scss";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Shortener from "./components/Shortener";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Shortener />
      <About />
    </div>
  );
}

export default App;
