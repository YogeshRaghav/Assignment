import React from "react";
import "../Styles/Sidebar.css";
import { TbTableDashed } from "react-icons/tb";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { CiTablets1 } from "react-icons/ci";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-item">
        <TbTableDashed className="sidebar-icon" />
        <span className="sidebar-text">Table</span>
      </div>
      <div className="sidebar-item">
        <IoExtensionPuzzleOutline className="sidebar-icon" />
        <span className="sidebar-text">Filter</span>
      </div>
      <div className="sidebar-item">
        <CiTablets1 className="sidebar-icon" />
        <span className="sidebar-text">Sort</span>
      </div>
    </aside>
  );
};

export default Sidebar;
