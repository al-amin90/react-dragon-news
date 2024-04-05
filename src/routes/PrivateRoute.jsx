import { useContext } from "react";
import { AuthContext } from "../Providers/Provider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation(null)
    console.log(location);

    console.log(loading);
    if (loading) {
        console.log(loading);
        return <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children
    }


    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoute;