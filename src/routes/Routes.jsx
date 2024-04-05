import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import NewsDetail from "../pages/NewsDetail/NewsDetail";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("/news.json")
            },
            {
                path: "/news/:newsId",
                element: <PrivateRoute>
                    <NewsDetail></NewsDetail>
                </PrivateRoute>,
                loader: () => fetch("/news.json")
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>
            }
        ]
    }
])

export default router;