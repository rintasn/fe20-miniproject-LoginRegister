import ListUser from "../pages/ListUser";
import Login from "../pages/Login";
import Register from "../pages/Register";
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
        path: '/register',
        element: <Register />
    },
    {
        path: '/',
        element: <Home />
    }
]