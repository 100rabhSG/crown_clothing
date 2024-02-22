import { Routes, Route, Outlet } from 'react-router-dom'; 

import Home from './Routes/Home/Home.component';
import Navigation from './Routes/Navigation/Navigation.component';
import Authentication from './Routes/Authentication/authentication.component';
import Shop from './Routes/shop/shop.component';
import Checkout from './Routes/Checkout/checkout.component';

import './categories.styles.scss'


const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;
