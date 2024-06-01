import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./admin/pages/Home";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
