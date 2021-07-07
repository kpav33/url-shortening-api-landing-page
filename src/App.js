import "./styles.scss";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Shortener from "./components/Shortener";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Shortener />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
