import { Route, Routes } from "react-router-dom"
import CategoryStyle from "./Home/CategoryStyle"
import Slider from "./Home/Slider"
import TitltSlider from "./Home/TitltSlider"
import Navber from "./Layout/Navber"
import Home from "./Pages/Home"
import PageNotFound from "./Layout/PageNotFound"
import Puga from "./Pages/Puga"
import Fall from "./Pages/Fall"
import Man from "./Pages/Man"
import Woman from "./Pages/Woman"
import Kids from "./Pages/Kids"
import MiniMe from "./Pages/MiniMe"
import ProductPage from "./Home/ProductPage"
import CreateAccount from "./User/CreateAccount"
import ShoppingCart from "./Pages/ShoppingCart"
import Login from "./User/Login"



function App() {
 

  return (
    <>
      <div>
   
<Navber/>

<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/puja" element={<Puga/>} />
  <Route path="/fail" element={<Fall/>} />
  <Route path="/man" element={<Man/>} />
  <Route path="/woman" element={<Woman/>} />
  <Route path="/kids" element={<Kids/>} />
  <Route path="/mini" element={<MiniMe/>} />
  <Route path="/product/:id" element={<ProductPage/>} />
  <Route path="/register" element={<CreateAccount/>} />
  <Route path="/shopping-item" element={<ShoppingCart/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="*" element={<PageNotFound/>} />


</Routes>
      </div>
    </>
  )
}

export default App
