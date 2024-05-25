import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </>
  );
}

export default App;
