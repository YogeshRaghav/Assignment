import React, { useState } from "react";
import { LuPlus, LuLetterText } from "react-icons/lu"; 
import { AiOutlinePlayCircle } from "react-icons/ai";
import { RiLoader2Fill } from "react-icons/ri";
import "../Styles/DataTable.css";

const DataTable = () => {
  const [data, setData] = useState([
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: "Bitscale Evaluation",
      enrich: "Bitscale Evaluation - Account relevancy",
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: "Cell data size exceeds limit",
      enrich: "BMW Evaluation - Relevancy check",
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: "https://www.linkedin.com",
      enrich: "Google Evaluation - Lilenvancy check",
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: "Loading data, Please wait",
      enrich: "Apple Evaluation - Olvancy check",
    },
    {
      input: "Oct 12, 2024 at 14:08 PM",
      action: "Loading data, Please wait",
      enrich: "Figma Evaluation - Evancy check",
    },
  ]);

  const [columns, setColumns] = useState([
    { label: "", key: "serial" },
    { label: "", key: "play" },
    { label: "Input Column", key: "input" },
    { label: "Action Column", key: "action" },
    { label: "Enrich Company", key: "enrich" },
    { label: "Add Column", key: "add" },
  ]);

  // Add Row
  const handleAddRow = () => {
    const newRow = columns.reduce((acc, col) => {
      if (col.key !== "add")
        acc[col.key] = prompt(`Enter value for ${col.label}:`) || "";
      return acc;
    }, {});
    setData([...data, newRow]);
  };

  const handleAddColumn = () => {
    const columnName = prompt(
      "Enter the name for the new column (cannot be empty):"
    )?.trim();
    if (!columnName) return;

    const newKey = `column${columns.length}`;
    const newColumn = { label: columnName, key: newKey };

    const updatedColumns = columns
      .map((col) => (col.key === "add" ? newColumn : col))
      .concat({ label: "Add Column", key: "add" });
    const updatedData = data.map((row) => ({ ...row, [newKey]: "" }));

    setColumns(updatedColumns);
    setData(updatedData);
  };

  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>
                {col.key === "input" ? (
                  <>
                    <LuLetterText
                      style={{ marginRight: "8px", color: "black" }}
                    />
                    {col.label}
                  </>
                ) : (
                  col.label
                )}
                {col.key === "add" && (
                  <LuPlus
                    style={{ cursor: "pointer" }}
                    onClick={handleAddColumn}
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => {
                const value = row[col.key];
                const isBlurry = value === "Loading data, Please wait";
                const isLink =
                  value?.startsWith("https://") || value?.startsWith("http://");

                if (col.key === "serial") {
                  return <td key={col.key}>{index + 1}</td>;
                }

                if (col.key === "play") {
                  return (
                    <td key={col.key}>
                      <AiOutlinePlayCircle
                        style={{ fontSize: "24px", color: "blue" }}
                      />
                    </td>
                  );
                }

                return (
                  <td
                    key={col.key}
                    style={{
                      ...(isBlurry ? { filter: "blur(.5px)", color: "#999" } : {}),
                      ...(value === "Cell data size exceeds limit"
                        ? { color: "red", fontWeight: "bold" }
                        : {}),
                    }}
                  >
                    {col.key === "action" && isBlurry && (
                      <RiLoader2Fill
                        style={{ marginRight: "8px", color: "#4CAF50" }}
                      />
                    )}
                    {col.key === "action" && isLink ? (
                      <a href={value} target="_blank" rel="noopener noreferrer">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
          <tr>
            <td
              colSpan={columns.length}
              className="add-row"
              onClick={handleAddRow}
            >
              + Add Row
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
