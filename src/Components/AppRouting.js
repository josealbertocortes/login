import * as React from "react";
import { Routes, Route ,BrowserRouter} from "react-router-dom";
import { Listado } from "./Listado";
import { LogIn } from "./LogIn";
import { PrivateRoute } from "./PrivateRoute";

export const  AppRouting= ()=> {
  return (
    <BrowserRouter className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={
        <PrivateRoute >
            <Listado />
        </PrivateRoute>
        
        } />
      </Routes>
    </BrowserRouter>
  );
}