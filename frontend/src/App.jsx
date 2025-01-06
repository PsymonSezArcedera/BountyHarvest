// import './App.css'
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import SignInPage from "./pages/SignInPage"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import OrderPage from "./pages/OrderPage"
import ProfilePage from "./pages/ProfilePage"
import Layout from "./components/layout"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage/>}/>
        <Route element={<Layout/>}>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/products" element={<ProductPage/>}/>
          <Route path="/orders" element={<OrderPage/>}/>
          <Route path="/myprofile" element={<ProfilePage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
