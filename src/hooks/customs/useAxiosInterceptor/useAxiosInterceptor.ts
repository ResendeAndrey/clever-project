/*
Verify if receiving 401 status code from API and redirecting to login page
*/
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/services/api";

export const AxiosInterceptor = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem("user");
          navigate("/login", { replace: true });
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, [navigate]);

  return null;
};
