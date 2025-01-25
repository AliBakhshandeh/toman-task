const Shimmer = () => {
  return (
    <div className=" w-full mx-auto mt-5 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
};
export default Shimmer;
