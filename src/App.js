import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DataTable from "./components/DataTable";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Header />
        <DataTable />
      </div>
    </div>
  );
}

export default App;
