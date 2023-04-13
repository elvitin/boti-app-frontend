import { useState } from "react";
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Section />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
