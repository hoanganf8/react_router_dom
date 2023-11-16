import { Navigate, Outlet } from "react-router-dom";

const isLogin = false;
const AuthMiddleware = () => {
  return isLogin ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default AuthMiddleware;
