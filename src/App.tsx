import MainC from "./components/MainC";
import LoginC from "./components/LoginC";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainC />} />
          <Route path="/login" element={<LoginC />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
