// Pages/ResetPassword.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    // Dummy reset password action
    alert(`Reset link sent to ${email}`);
    setEmail("");
  };

  return (
    <section className="custom-bg-gradient dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#fe2dbc] md:text-2xl dark:text-white">
              Reset Password
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Enter your email address below to reset your password.
            </p>
            <form className="space-y-4 md:space-y-6" onSubmit={handleReset}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#6e28fa] focus:border-[#6e28fa] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#6e28fa] dark:focus:border-[#6e28fa]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-custom-gradient hover:bg-[#5a21c6] focus:ring-4 focus:outline-none focus:ring-[#6e28fa] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#6e28fa] dark:hover:bg-[#5a21c6] dark:focus:ring-[#6e28fa]"
              >
                Reset Password
              </button>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="w-full text-[#fe2dbc] hover:underline text-center mt-4"
              >
                Back to Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
