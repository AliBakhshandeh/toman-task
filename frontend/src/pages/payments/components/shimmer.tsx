const Shimmer = () => {
    return (
      <div className="space-y-4">
        <div className="mt-4">
          <div className="bg-gray-200 animate-pulse h-10 rounded-md mb-4"></div>
          <div className="space-y-4">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-1/4 bg-gray-200 animate-pulse h-10 rounded-md"></div>
                <div className="w-1/4 bg-gray-200 animate-pulse h-10 rounded-md"></div>
                <div className="w-1/4 bg-gray-200 animate-pulse h-10 rounded-md"></div>
                <div className="w-1/4 bg-gray-200 animate-pulse h-10 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  export default Shimmer