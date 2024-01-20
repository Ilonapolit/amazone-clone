import React from "react";
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
import Home from "./components/Home/Home";
import { productsData } from "./api/api";

const Layout =()=>{
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}  loader={productsData}></Route>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont">
<RouterProvider router={router}></RouterProvider>
    </div>
  );
}


export default App
