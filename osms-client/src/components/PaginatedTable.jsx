import React, { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";

const PaginatedTable = ({ employees, loading }) => {
  const styles = {
    container: "overflow-x-auto flex flex-col items-center justify-center",
    table: "w-full text-left min-w-[1500px]",
    th: "px-4 py-7",
    td: "px-4 py-7",
    tr: "hover:bg-[rgba(53,153,255,0.1)]",
    thead: "bg-[rgba(53,153,255,0.3)]",
  };

  const renderTableHeader = () => {
    const header = [
      "No.",
      "First Name",
      "Last Name",
      "National ID",
      "Telephone",
      "Email",
      "Department",
      "Position",
      "Laptop Manufacturer",
      "Model",
      "Serial Number",
      "Registered On",
      "Actions",
    ];
    return header.map((key, index) => (
      <th key={index} className={styles.th}>
        {key.toUpperCase()}
      </th>
    ));
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>{renderTableHeader()}</tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={11}>Loading...</td>
            </tr>
          ) : (
            employees.map((employee, index) => (
              <tr key={employee.id} className={styles.tr}>
                <td className={styles.td}>{index + 1}</td>
                <td className={styles.td}>{employee.first_name}</td>
                <td className={styles.td}>{employee.last_name}</td>
                <td className={styles.td}>{employee.national_id}</td>
                <td className={styles.td}>{employee.telephone}</td>
                <td className={styles.td}>{employee.email}</td>
                <td className={styles.td}>{employee.department}</td>
                <td className={styles.td}>{employee.position}</td>
                <td className={styles.td}>{employee.laptop_manufacturer}</td>
                <td className={styles.td}>{employee.model}</td>
                <td className={styles.td}>{employee.serial_number}</td>
                <td className={styles.td}>{employee.createdAt}</td>
                <td className={styles.td}>
                  <div className="flex gap-3">
                    <button className="bg-[orange] text-white px-4 py-2 rounded-lg">
                      <FaPen />
                    </button>
                    <button className="bg-[#f15050] text-white px-4 py-2 rounded-lg">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaginatedTable;
