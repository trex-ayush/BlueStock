import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";
import SharkInvestor from "./components/SharkInvestor";
import Header from "./components/Header";
import Funds from "./components/Funds";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/investors" element={<SharkInvestor />} />
        <Route path="/funds" element={<Funds />} />
      </Routes>
    </Router>
  );
}

export default App;
