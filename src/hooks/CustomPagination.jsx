import React from "react";

const CustomPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}) => {
  const generatePages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        Math.abs(i - currentPage) <= 1 ||
        i === currentPage - 2 ||
        i === currentPage + 2
      ) {
        pages.push(i);
      } else if (
        (i === currentPage - 3 && currentPage > 4) ||
        (i === currentPage + 3 && currentPage < totalPages - 3)
      ) {
        pages.push("...");
      }
    }

    return [...new Set(pages)];
  };

  return (
    <div className={`flex items-center gap-2 mt-4 ${className}`}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="bg-white text-black px-3 py-1 rounded-md text-sm disabled:opacity-50"
      >
        Prev
      </button>

      {generatePages().map((page, idx) => (
        <button
          key={idx}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..."}
          className={`px-3 py-1 rounded-md text-sm ${
            currentPage === page ? "bg-[#070539] text-white" : "bg-white text-black" 
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="bg-white text-black px-3 py-1 rounded-md text-sm disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default CustomPagination;
