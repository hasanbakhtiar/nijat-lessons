import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import Header from "./layout/Header"
import Account from "./pages/account/Account"
import PrivateRoute from "./utils/PirvateRoute"

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route element={<PrivateRoute />}>
          <Route path="/account/:id" element={<Account />}></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default Router