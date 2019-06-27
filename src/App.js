import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Add from "./components/add/AddForm";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={Add} exact />
          <Route path="/" component={Footer} />
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
