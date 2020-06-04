import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Help from "./components/pages/Help";

function App() {
  return (
    <Router>
      <div>
        {/* Nav bar tabs first */}
        <NavTabs />
        {/* react router is responding to what the path is */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/help" component={Help} />
      </div>
    </Router>
  );
}

export default App;
