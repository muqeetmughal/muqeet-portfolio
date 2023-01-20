import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyles.js";
import { Router } from "wouter";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById("app")
);
