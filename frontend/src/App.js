import React from "react";
import "@/App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Values from "@/components/Values";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Values />
          {/* <Testimonials /> */}
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
