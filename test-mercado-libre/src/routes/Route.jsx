//utils
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import ResultPreview from "../components/Result-preview/ResultPreview";
import Pdp from "../components/Pdp/Pdp.jsx";
import BreadCrumb from "../components/Breadcrumb/BreadCrumb.jsx";
import SearchBox from "../components/Search-box/SearchBox.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBox />}></Route>
        <Route path="/api/items/:search" element={<ResultPreview />}></Route>
        <Route path="/api/item/:productId" element={<Pdp />} />
      </Routes>
    </BrowserRouter>
  );
}
