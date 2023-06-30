import React from "react";

export default function Pagination({
  totalItems,
  itemsPerPage,
  handlePageChange,
  currentPage,
}) {
  const styles = {
    pagination: "flex justify-center mt-4",
  };
  return (
    <div className={styles.pagination}>
      {Array.from(
        { length: Math.ceil(totalItems / itemsPerPage) },
        (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        )
      )}
    </div>
  );
}
