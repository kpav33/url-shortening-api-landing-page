import "./styles.scss";
import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Shortener from "./components/Shortener";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Features from "./pages/Features";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path={["/", "/url-shortening-api-landing-page"]}>
          <Banner />
          <Shortener />
          <About />
          <CallToAction />
        </Route>
        <Route
          exact
          path={["/features", "/url-shortening-api-landing-page/features"]}
        >
          <Features />
        </Route>
        <Route
          exact
          path={["/pricing", "/url-shortening-api-landing-page/pricing"]}
        >
          <Pricing />
        </Route>
        <Route
          exact
          path={["/resources", "/url-shortening-api-landing-page/resources"]}
        >
          <Resources />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
