import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Details } from './pages'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } /> 
        <Route path="/details" element={ <Details /> } /> 
      </Routes>
    </BrowserRouter>

  );
}

export default Routers;