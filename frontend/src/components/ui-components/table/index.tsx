import React from 'react';
import { TableProps } from './table.types';

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto bg-gray-50 shadow-lg rounded-xl border border-gray-200">
      <table className="min-w-full table-auto">
        <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left font-semibold uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`transition duration-300 ${
                rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'
              } hover:bg-blue-100`}
            >
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
