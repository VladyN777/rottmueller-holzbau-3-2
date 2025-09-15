import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Carpentry from "./pages/Carpentry";
import RoofSolar from "./pages/RoofSolar";
import Renovation from "./pages/Renovation";
import Halls from "./pages/Halls";
import ContractCutting from "./pages/ContractCutting";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar />

      <Routes>
        {/* German routes */}
        <Route path="/" element={<Home />} />
        <Route path="/ueber" element={<Home />} />
        <Route path="/holzbau" element={<Carpentry />} />
        <Route path="/dach-solar" element={<RoofSolar />} />
        <Route path="/sanierung" element={<Renovation />} />
        <Route path="/hallen" element={<Halls />} />
        <Route path="/lohnabbund" element={<ContractCutting />} />
        <Route path="/kontakt" element={<Contact />} />

        {/* English routes */}
        <Route path="/en" element={<Home />} />
        <Route path="/en/carpentry" element={<Carpentry />} />
        <Route path="/en/roof-solar" element={<RoofSolar />} />
        <Route path="/en/renovation" element={<Renovation />} />
        <Route path="/en/halls" element={<Halls />} />
        <Route path="/en/contract-cutting" element={<ContractCutting />} />
        <Route path="/en/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}