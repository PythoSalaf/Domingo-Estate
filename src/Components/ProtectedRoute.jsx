import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { Login } from "../Pages";
const ProtectedRoute = () => {
  //   const userInfo = useSelector((state) => state.auth.userInfo);
  const [isLogin, setIsLogin] = useState(false);
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
