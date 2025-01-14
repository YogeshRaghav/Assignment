import React from "react";
import "../Styles/Header.css";
import { LuTable } from "react-icons/lu";
import { LuColumns3 } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";
import { HiShare } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="header">
      <div className="header1">
        <div>
          <input type="text" placeholder="Search" className="header-search" />
        </div>

        <div className="header-actions">
          <div className="row">
            <LuTable />
          </div>
          <span> 1/1 Row</span>

          <div className="column">
            <LuColumns3 />
          </div>
          <span> 3/3 Column</span>

          <div className="filter">
            <CiFilter />
          </div>
          <span> 0 Filter</span>

          <div className="sort">
            <BiSortAlt2 />
          </div>
          <span> Sort</span>
        </div>
      </div>

      <div className="last">
        <div>
          <button className="bt">Enrich</button>
        </div>
        <div>
          <HiShare />
        </div>
        <div>
          <FiDownload />
        </div>
        <div>
          <RiDeleteBin5Fill />
        </div>
      </div>
    </header>
  );
};

export default Header;
