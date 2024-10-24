import React from 'react';
import '../App.css';

const Settings = () => {
  return (
    <div className="pl-2 md:pl-5 pt-4 pr-2 md:pr-5 flex flex-col items-center">
      <div className="w-full text-left flex justify-center max-w-6xl">
        <div className="p-2 w-full relative"> {/* Added 'relative' to position the button */}
          {/* Heading */}
          <h2 className="text-sm font-medium text-gray-700 dark:text-white mb-2">
            Delay between each request (min-max) in seconds
          </h2>

          {/* Inputs in a single row */}
          <div className="flex gap-2 md:gap-4">
            {/* Minimum Delay Input */}
            <div className="flex-1">
              <label htmlFor="min-delay" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
                Minimum Delay
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="min-delay"
                  className="rounded-md bg-gray-50 border text-gray-700 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter minimum delay"
                />
              </div>
            </div>

            {/* Maximum Delay Input */}
            <div className="flex-1">
              <label htmlFor="max-delay" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
                Maximum Delay
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="max-delay"
                  className="rounded-none rounded-l-md rounded-r-none bg-gray-50 border text-gray-700 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter maximum delay"
                />
                <span className="inline-flex items-center px-3 text-sm text-gray-700 custom-bg-gradient rounded-e-md border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm1 10H9V5h2v5Z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Full-width Input for Maximum Number of Requests */}
          <div className="mt-2 md:mt-3">
            <label htmlFor="max-requests" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
              Maximum Number of Requests
            </label>
            <input
              type="text"
              id="max-requests"
              className="rounded-md bg-gray-50 border text-gray-700 focus:ring-blue-500 focus:border-blue-500 block w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter maximum number of requests"
            />
          </div>

          {/* Save Button */}
          <button
            className="absolute  right-0 mt-2 md:mt-5 mr-4 bg-custom-gradient text-white rounded-md px-4 py-2 text-sm font-medium  focus:outline-none focus:ring-2 "
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
