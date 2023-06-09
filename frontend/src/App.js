import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Forms from "./pages/forms";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormDetail from "./pages/formDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Forms />} />
        <Route path="/forms/:formId/details" element={<FormDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
