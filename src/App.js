import { Routes, Route, Outlet } from 'react-router-dom'; 

import Home from './Routes/Home/Home.component';
import Navigation from './Routes/Navigation/Navigation.component';
import SignIn from './Routes/SignIn/sign-in.component';

import './categories.styles.scss'



const  Shop = () => {
  return(
    <h1> I am shop component</h1>
  )
}

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;
