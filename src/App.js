import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import LandingPage from "./assets/page/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
