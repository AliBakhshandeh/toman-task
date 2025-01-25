import React from 'react';
import { PaginationProps } from './pagination.types';

const Pagination: React.FC<PaginationProps> = ({
  totalOrders = 0,
  action,
  currentPage,
  itemsPerPage = 20,
}) => {
  const totalPages = Math.ceil(totalOrders / itemsPerPage);

  if (totalOrders === 0) {
    return null;
  }

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    action(page);
  };

  return (
    <div className="overflow-x-auto">
      <ul className="flex items-center -space-x-px h-8 gap-x-3 text-sm">
        <li>
          <button
            onClick={() =>
              handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
            }
            className="flex items-center justify-center min-h-8 min-w-8 bg-blue-100 text-blue-500 rounded-full hover:bg-blue-200 disabled:bg-grey-50 disabled:text-grey-400"
            disabled={currentPage === 1}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1L1 5l4 4"
              />
            </svg>
          </button>
        </li>

        {startPage > 1 && (
          <>
            <li>
              <button
                onClick={() => handlePageChange(1)}
                className="flex items-center justify-center px-3 h-8 leading-tight rounded-full min-w-8 min-h-8 text-gray-500 bg-white border-gray-300 hover:bg-blue-100 hover:text-blue-500"
              >
                1
              </button>
            </li>
            {startPage > 2 && (
              <li>
                <span className="flex items-center justify-center px-3 h-8 leading-tight rounded-full min-w-8 min-h-8 text-gray-500 bg-white border-gray-300">
                  ...
                </span>
              </li>
            )}
          </>
        )}

        {Array.from(
          { length: endPage - startPage + 1 },
          (_, index) => startPage + index
        ).map((page) => (
          <li key={page}>
            <button
              onClick={() => handlePageChange(page)}
              className={`flex items-center justify-center px-3 h-8 leading-tight rounded-full min-w-8 min-h-8 ${
                page === currentPage
                  ? 'text-white bg-blue-500 border-blue-500'
                  : 'text-gray-500 bg-white border-gray-300 hover:bg-blue-100 hover:text-blue-500'
              }`}
            >
              {page}
            </button>
          </li>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <li>
                <span className="flex items-center justify-center px-3 h-8 leading-tight rounded-full min-w-8 min-h-8 text-gray-500 bg-white border-gray-300">
                  ...
                </span>
              </li>
            )}
            <li>
              <button
                onClick={() => handlePageChange(totalPages)}
                className="flex items-center justify-center px-3 h-8 leading-tight rounded-full min-w-8 min-h-8 text-gray-500 bg-white border-gray-300 hover:bg-blue-100 hover:text-blue-500"
              >
                {totalPages}
              </button>
            </li>
          </>
        )}

        <li>
          <button
            onClick={() =>
              handlePageChange(
                currentPage < totalPages ? currentPage + 1 : totalPages
              )
            }
            className="flex items-center justify-center min-h-8 min-w-8 bg-blue-100 text-blue-500 rounded-full hover:bg-blue-200 disabled:bg-grey-50 disabled:text-grey-400"
            disabled={currentPage === totalPages}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4L1 9"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
