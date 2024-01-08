import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages";

const RouteNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteNavigation;
