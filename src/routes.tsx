import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Details, NotFound } from './pages'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <NotFound/>} />
        <Route path="/" element={ <Home /> } />
        <Route path="/details" element={ <Details /> }>
          <Route  path=":id" element={ <Details /> }/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default Routers;