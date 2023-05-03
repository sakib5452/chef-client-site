import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NavigationBar from "../pages/NavigationBar/NavigationBar";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Terms from "../pages/Shared/Terms/Terms";
import LoginLayout from "../layouts/LoginLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
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
            }
        ]
    },
    {
        path: '/',
        element: <Main></Main>,

    },
])

export default router