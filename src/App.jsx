import "./App.css";
import Home from "./pages/Home";
import ReadMore from "./pages/ReadMore";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/readmore" element={<ReadMore />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
