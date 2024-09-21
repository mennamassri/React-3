
import './App.css'
import  {BrowserRouter, Routes , Route} from 'react-router-dom'
import NotFound from './components/pages/NotFound/NotFound'
import Home from "./components/pages/Home/Home"

import About from './components/pages/About/About'
import ProductDetails from './components/pages/products/productsDeatils'
import Categories from './components/pages/Categories/Categories'
import Login from './components/pages/Login/Login'
function App() {


  return (
    <>

    <BrowserRouter>
    <Routes>
<Route index element={<Home/>}/>
<Route path='/home'   element={<Home/>}  />
<Route path='/about'   element={<About/>}  />
<Route path='/Login'   element={<Login/>}  />
<Route path='/Categories'   element={<Categories/>}  />

<Route path='*' element={<NotFound/>}/>

<Route path='/home/:id' element={<ProductDetails />} /> 
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
