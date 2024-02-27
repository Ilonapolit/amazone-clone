import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import { Navigation } from "./utils/Navigation";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Home/Banner";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./provider";


const Layout = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Outlet />
      <Footer />

    </div>
  );
};

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
      </Route>
    )
  );

  return (
    <div className="font-bodyFont">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;




