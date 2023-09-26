import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Layout from "./pages/layout";
//import Contact from "./pages/contact";
import Productor from "./pages/productor";
//import TimeSeries from "./pages/timeseries";

import './App.css';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
           {/* <Route path="/contact" element={<Contact />} />  */}
          <Route path="/productor" element={<Productor />} />
          {/* <Route path="/timeseries" element={<TimeSeries/>}/>*/}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}


