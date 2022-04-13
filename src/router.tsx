import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header, Footer } from './components'
import { Login, Profile } from './pages';
 
import './index.css'

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/profile' element={ <Profile /> }/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Routers;