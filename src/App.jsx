import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import './styles/darkMode.css'
import './styles/lightMode.css'
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
export default App;
