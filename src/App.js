import './App.css';
import Navbar from './Componentes/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';

import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx"
import Cart from "./Pages/Cart.jsx"
import Footer from './Componentes/Footer/Footer.jsx';

import men_banner from './Componentes/Assests/banner_mens.png'
import women_banner from './Componentes/Assests/banner_women.png'
import kids_banner from './Componentes/Assests/banner_kids.png'
import ShopContextProvider from './Context/ShopContext.jsx';








function App() {
  return (
    <div >
      <ShopContextProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />}/>
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>

            <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>

            <Route path='/product' element={<Product/>}>

            <Route path=":productId" element={<Product/>}/>
            </Route>


          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>


        </Routes>  
        <Footer/>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
