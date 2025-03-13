import { Navigate } from "react-router-dom";
import {ContextProvider, useStateContext} from "../contexts/ContextProvider"

const ProtectedRoute = ({ children }) => {
  const { user } = useStateContext(); 

  if (!user) {
    return <Navigate to="/login" replace />; 
  }

  return children;
};

export default ProtectedRoute;




