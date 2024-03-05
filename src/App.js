import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { ProtectedRoute, ShareLayou } from "./Components";
import { About, Details, Home, Login, Property } from "./Pages";
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<ShareLayou />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="property" element={<Property />} />
          <Route element={<ProtectedRoute />}>
            <Route path="detail/:name" element={<Details />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
