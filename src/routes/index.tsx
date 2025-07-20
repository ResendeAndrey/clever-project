/*
  This file is used to define the routes for the application
*/

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "../components/Loading";
import { AxiosInterceptor } from "@/hooks/customs/useAxiosInterceptor/useAxiosInterceptor";

// Using lazy loading to improve performance and reduce bundle size
// Better LCP load time

const LoginPage = lazy(() => import("../pages/Login"));
const PhotosList = lazy(() => import("../pages/Photos"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <AxiosInterceptor />
        <Routes>
          <Route path="/" element={<PhotosList />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
