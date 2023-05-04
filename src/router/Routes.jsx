import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Terms from "../pages/Shared/Terms/Terms";
import LoginLayout from "../layouts/LoginLayout";
import ChefDetail from "../ChefDetail/ChefDetail";
import Blog from "../Blog/Blog";
import Details from "../Details/Details";
import Recipes from "../Recipes/Recipes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/chef/0"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
        ]
    },
    {
        path: 'chef',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <ChefDetail></ChefDetail>,
                loader: () => fetch(`http://localhost:5000/chef/`)
            },

        ]
    },
    {
        path: 'detail/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
    },
])

export default router