import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import OffCanvasTrial from './bootstrap-component/OffCanvas/offcanvas';
import PageHeader from './bootstrap-component/PageHeader/pageheader';
import CartDetail from './bootstrap-component/CartDetail/cartdetail';
import PageFooter from './bootstrap-component/PageFooter/pagefooter';
import About from './bootstrap-component/AboutUs/about';
import Contact from './bootstrap-component/ContactUs/contact';
import Carousels from './bootstrap-component/Carousel/carousel';

function App() {
  const [item, setItem] = useState([]);

  return (
    <>
      <BrowserRouter>
        <PageHeader item={item}/>
        <div className='content-router'>
        <Routes>
          <Route path="/Craving" element={<Carousels />}></Route>
          <Route path="/Craving/about" element={<About />}></Route>
          <Route path="/Craving/category" element={<OffCanvasTrial item={item} setItem={setItem}/>}></Route>
          <Route path="/Craving/cart" element={<CartDetail />}></Route>
          <Route path="/Craving/contact" element={<Contact />}></Route>
        </Routes>
        </div>
        <PageFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
