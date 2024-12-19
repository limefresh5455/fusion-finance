 
const LoadingSpinner = () => {
  return (
     <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-900"></div>
    </div>
  );
};

export default LoadingSpinner;
