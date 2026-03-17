import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import Header from "./layout/Header"
import Account from "./pages/account/Account"
import PrivateRoute from "./utils/PirvateRoute"

const router = createBrowserRouter([
    {
        path: "/",
        element: <><Header /><Home /></>,
    },
    {
        path: "/login",
        element: <><Header /><Login /></>,
    },
    {
        element: <PrivateRoute />,
        children: [
            {
                path: "/account/:id",
                element: <><Header /><Account /></>,
            },
        ],
    },
])

const Router = () => {
    return <RouterProvider router={router} />
}

export default Router