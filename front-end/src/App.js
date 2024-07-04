import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>   {/* all pages hosted on the NavBar are accessed through the router */}
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>   {/* if accessing the path "/", render the Shop component */}
          <Route path='/shells' element={<ShopCategory category="shells"/>}/>   {/* if accessing any of the paths for shells, */} 
          <Route path='/buttons' element={<ShopCategory category="buttons"/>}/>    {/* buttons, or internals, render the respective */}
          <Route path='/internals' element={<ShopCategory category="internals"/>}/>    {/* ShopCategory page */}
          <Route path="/product" element={<Product/>}>   {/* if accessing the product path, render the product component and page */}
            <Route path=':productId' element={<Product/>}/>   {/* render specific product page based on product's id */}
          </Route>  {/* closing tag for product route */}
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
