import React, { useState } from "react";
import "../Styles/Navbar.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [on, isOn] = useState(true);
  const [toastMessage, setToastMessage] = useState("");

  const handleToggle = () => {
    isOn(!on);
    if (on) {
      setToastMessage("Auto Save is Off");
    } else {
      setToastMessage("Auto Save is On");
    }

    // Automatically hide the toast message after 3 seconds
    setTimeout(() => setToastMessage(""), 3000);
  };

  return (
    <nav className="navbar">
      <div className="arrow">
        <div>
          <IoMdArrowRoundBack />
        </div>
        <div className="name">Name of the File</div>
      </div>

      <div className="auth">
        <div className="switch">
          <label>
            <input type="checkbox" checked={on} onChange={handleToggle} />
            <span className="slider round"></span>
          </label>
        </div>

        {toastMessage && (
          <div className={`toast ${on ? "on" : "off"}`}>{toastMessage}</div>
        )}

        <div>
          <FaUserCircle className="user" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
