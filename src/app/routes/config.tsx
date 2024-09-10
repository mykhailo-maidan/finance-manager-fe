import { createBrowserRouter, Navigate } from "react-router-dom"
import Home from "../../pages/Home"
import Login from "../../pages/Login"
import { useAuth0 } from "@auth0/auth0-react"
import AuthCallback from "../../components/common/Loading"

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated, isLoading } = useAuth0();
  
    if (isLoading) {
      return <AuthCallback/>;
    }
  
    return isAuthenticated ? children : <Navigate to="/login" />;
  };
export const router =  createBrowserRouter([
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/callback',
        element: <AuthCallback/>
    },
    {
        path: '/',
        element: <Navigate to={'/home'}/>
    },
    {
        path: '/home',
        element: (
            <ProtectedRoute><Home/></ProtectedRoute>
        )
    }

])