import { useState } from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";
import AdminDashboard from "./components/AdminDashboard";
function App() {
  return (
    <>
    <AdminDashboard/>
      <UserDetails />
      
    </>
  );
}

export default App;
