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
          <Route path="/" element={<Carousels />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/category" element={<OffCanvasTrial item={item} setItem={setItem}/>}></Route>
          <Route path="/cart" element={<CartDetail />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        </div>
        <PageFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
