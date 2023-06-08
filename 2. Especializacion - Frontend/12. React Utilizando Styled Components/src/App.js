import React from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./global-style.js"

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container />
    </>
  );
}

export default App;
