import React from "react";
import { Navigate ,Outlet } from "react-router-dom";

const Privaterouter =()=> { 
 const auth = localStorage.getItem('user') ; 
 return auth ? <Outlet/> : <Navigate to="/Login"></Navigate>
    return <Outlet/> ; 
}

export default Privaterouter ; 