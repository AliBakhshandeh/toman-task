import { Button, Spinner, DropDown } from '@/components/ui-components';
import { Option } from '@/components/ui-components/dropdown/dropdown.types';
import Pagination from '@/components/ui-components/pagination';
import Table from '@/components/ui-components/table';
import { useState } from 'react';
import { CiEdit } from 'react-icons/ci';

const UITestPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [singleSelectValue, setSingleSelectValue] = useState<Option | null>(
    null
  );
  const [multiSelectValue, setMultiSelectValue] = useState<string[]>([]);

  const totalOrders = 150;
  const itemsPerPage = 20;
  const headers = ['Name', 'Age', 'Email', 'City'];
  const data = [
    ['John Doe', '30', 'john.doe@example.com', 'New York'],
    ['Jane Smith', '25', 'jane.smith@example.com', 'Los Angeles'],
    ['Sam Wilson', '35', 'sam.wilson@example.com', 'Chicago'],
    ['Lisa Brown', '28', 'lisa.brown@example.com', 'Houston'],
  ];

  const options = [
    { value: 'esfahan', label: 'esfahan' },
    { value: 'tehran', label: 'tehran' },
    { value: 'karaj', label: 'karaj' },
    { value: 'mashhad', label: 'mashhad' },
  ];

  const handleClick = () => {
    console.log('Button clicked!');
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Navigated to page: ${page}`);
  };
  return (
    <>
      <div className="p-4 flex gap-2">
        <Button
          className="text-blue-600 border border-blue-600 hover:bg-blue-500 hover:text-white"
          onClick={handleClick}
        >
          Click Me
        </Button>
        <Button
          className="text-blue-600 border border-blue-600 hover:bg-blue-500 hover:text-white"
          onClick={handleClick}
          icon={<CiEdit />}
        >
          Add Item
        </Button>
        <Button
          onClick={handleClick}
          icon={<CiEdit />}
          className="bg-blue-500 hover:bg-blue-600"
        />
        <Button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-600"
        >
          Custom Styled Button
        </Button>
      </div>
      <div className="p-4 flex">
        <Spinner color="fill-blue-600" size={30} />
      </div>
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Single Select Dropdown</h2>
          <DropDown
            options={options}
            placeholder="Select an option"
            value={singleSelectValue}
            onChange={(value) => setSingleSelectValue(value as Option | null)}
            isMultiSelect={false}
          />
          <p className="mt-2 text-sm">
            Selected: {singleSelectValue ? singleSelectValue.label : 'None'}
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Multi Select Dropdown</h2>
          <DropDown
            options={options}
            placeholder="Select options"
            value={multiSelectValue}
            onChange={(value) => setMultiSelectValue(value as string[])}
            isMultiSelect={true}
          />
          <p className="mt-2 text-sm">
            Selected:{' '}
            {multiSelectValue.length > 0 ? multiSelectValue.join(', ') : 'None'}
          </p>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">User Table</h1>
        <Table headers={headers} data={data} />
      </div>
      <div className="p-4">
        <Pagination
          totalOrders={totalOrders}
          action={handlePageChange}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </>
  );
};
export default UITestPage;
