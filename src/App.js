import React from "react";
import AppRouter from "./router";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
function App() {
  return <>
    <Navbar />
    <AppRouter />
  </>;
}

export default App;
