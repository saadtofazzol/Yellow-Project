import { Route, Routes } from "react-router-dom"
import CategoryStyle from "./Home/CategoryStyle"
import Slider from "./Home/Slider"
import TitltSlider from "./Home/TitltSlider"
import Navber from "./Layout/Navber"
import Home from "./Pages/Home"
import PageNotFound from "./Layout/PageNotFound"



function App() {
 

  return (
    <>
      <div>
   
<Navber/>

<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="*" element={<PageNotFound/>} />


</Routes>
      </div>
    </>
  )
}

export default App
