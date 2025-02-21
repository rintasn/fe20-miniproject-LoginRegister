import ListUser from "../pages/ListUser";
import Login from "../pages/Login";
import Register from "../pages/RegisterUser";
import SingleUser from "../pages/SingleUser";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";

export const routeList = [
    {
        path: '/list-user',
        element: (
            <ProtectedRoute>
                <ListUser />
            </ProtectedRoute>
        ),
    },
    {
        path: '/single-user/:id',
        element: (
            <ProtectedRoute>
                <SingleUser />
            </ProtectedRoute>
        ),
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/registeruser',
        element: <Register />
    },
    {
        path: '/',
        element: <Home />
    }
]