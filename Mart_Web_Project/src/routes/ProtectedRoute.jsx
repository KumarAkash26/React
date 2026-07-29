import React, { Children } from 'react'
import { Navigate } from 'react-router';

const ProtectedRoute = ({Children}) => {

    let isAdmin = false;

    if(!isAdmin){
        console.log("i am running");
        return <Navigate to={"/"} />;
    }

  return  Children 
}

export default ProtectedRoute