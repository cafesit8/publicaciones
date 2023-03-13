import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Publication } from "./pages/Publication";
import { CreatePublication } from "./pages/CreatePublication";

function App() {
  return (
    <Routes>
      <Route path="/publicaciones" element={<Publication />} />
      <Route path="/createPublication" element={<CreatePublication />} />
    </Routes>
  );
}

export default App;
