const SkeletonLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-3/4 h-8 bg-gray-700 rounded mb-4 animate-pulse"></div>
      <div className="w-1/2 h-8 bg-gray-700 rounded mb-4 animate-pulse"></div>
      <div className="w-2/3 h-8 bg-gray-700 rounded mb-4 animate-pulse"></div>
    </div>
  );
};

export default SkeletonLoader;
