import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard";
import TimeSeries from "./pages/timeseries";

import './App.css';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/timeseries" element={<TimeSeries/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}


