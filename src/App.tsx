import React from "react";
import { ThemeContext } from "styled-components";
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



const Layout =()=>{
  return (
    <div>
      <Header />
    <Banner/>
      <Outlet />
      <Footer />
     
      
    </div>
  )
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>

     
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



