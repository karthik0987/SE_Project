import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import PasswordReset from "./Pages/PasswordReset/PasswordReset";
import AddExpenses from "./Pages/AddExpenses/AddExpenses";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import ExpensesHistory from "./Pages/ExpensesHistory/ExpensesHistory";
import Download from "./Pages/Download/Download";
import Profile from "./Pages/Profile/Profile";
 
const App = () => {

  
  return ( 
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<PasswordReset />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
