import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Services } from "./pages/works/index";
import { About } from "./pages/about/index";
import { Gallery } from "./pages/gallery/index";
import { Contact } from "./pages/contact/index";
import { Footer } from "./components/footer/index";
import { ScrollToTop } from "./components/tools/scrollPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="*" element={<Header />} />
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
