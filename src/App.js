import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
// import { OpenSource } from "./pages/OpenSource";
import { DSAStats } from "./pages/DSAStats";
import { Error } from "./pages/Error";

// import components
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { AllPRs } from "./components/AllPRs";
import { AllIssues } from "./components/AllIssues";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        {/* <Route path="/opensource">
          <OpenSource />
        </Route> */}
        <Route path="/dsastats">
          <DSAStats />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/pullrequests">
          <AllPRs />
        </Route>
        <Route path="/issues">
          <AllIssues />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
