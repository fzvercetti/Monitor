import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import TimeSeries from "./timeseries";
import Viewer from "../components/viewer";

export default function Productor() {
  return (
    <div>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/viewer">Viewer</Link>
        <Link to="/timeseries">Time Series</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/viewer" element={<Viewer />} />
        <Route path="/timeseries" element={<TimeSeries />} />
      </Routes>
    </div>
  );
}