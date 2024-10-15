import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const Requireauth = () => {
  const token = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
    }
  }, [navigate, token]);

  return token ? <Outlet /> : null;
};

export default Requireauth;
