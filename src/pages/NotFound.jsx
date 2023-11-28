const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
        <p className="text-gray-600 mb-4">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <a href="/" className="text-blue-500 hover:underline">
          Go back to the home page
        </a>
      </div>
    </div>
  );
};

export default NotFound;
