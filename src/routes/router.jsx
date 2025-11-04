import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../context/PrivateRoute";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import MyProfile from "../pages/MyProfile/MyProfile";
import Wishlist from "../pages/Wishlist/Wishlist";
import About from "../pages/About/About";
import Shop from "../pages/Shop/Shop";
import Product from "../pages/Product/Product";
import Blog from "../pages/Blog/Blog";
import ContactUs from "../pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'product/:id',
                loader: () => fetch('/toys.json'),
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
            },
            {
                path: 'sign-in',
                Component: Login
            },
            {
                path: 'sign-up',
                Component: Register
            },
            {
                path: 'forgot-password',
                Component: ForgotPassword
            },
            {
                path: 'my-profile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path: 'wishlist',
                loader: () => fetch('/toys.json'),
                element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
            },
            {
                path: 'about-us',
                Component: About
            },
            {
                path: 'shop',
                Component: Shop
            },
            {
                path: 'product',
                Component: Product
            },
            {
                path: 'blog',
                Component: Blog
            },
            {
                path: 'contact-us',
                Component: ContactUs
            }
        ]
    },
]);