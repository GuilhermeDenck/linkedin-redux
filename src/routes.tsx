import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Details, NotFound } from './pages'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <NotFound/>} />
        <Route path="/" element={ <Home /> } />
        <Route path="/:id" element={ <Details /> }/> 
      </Routes>
    </BrowserRouter>

  );
}

export default Routers;