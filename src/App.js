import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
        {/* <Route path="/opensource" Component={<OpenSource />} /> */}
        <Route path="/dsastats" Component={DSAStats} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contact" Component={Contact} />
        <Route path="/pullrequests" Component={AllPRs} />
        <Route path="/issues" Component={AllIssues} />
        <Route path="*" Component={Error} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
