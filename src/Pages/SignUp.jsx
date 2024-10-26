import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Dummy signup check
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Proceed with signup logic (e.g., API call)
    alert("Account created successfully!");
    navigate("/main");
  };

  return (
    <section className="custom-bg-gradient dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center border-2 px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 border-[0.5px] border-solid border-[#fe2dbc] border-r-1 rounded-lg space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#fe2dbc] md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSignup}>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#6e28fa] focus:border-[#6e28fa] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#6e28fa] dark:focus:border-[#6e28fa]"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#6e28fa] focus:border-[#6e28fa] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#6e28fa] dark:focus:border-[#6e28fa]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#fe2dbc] focus:border-[#fe2dbc] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#6e28fa] dark:focus:border-[#6e28fa]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-custom-gradient hover:bg-[#5a21c6] focus:ring-4 focus:outline-none focus:ring-[#6e28fa] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#6e28fa] dark:hover:bg-[#5a21c6] dark:focus:ring-[#6e28fa]"
              >
                Sign up
              </button>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 custom-checkbox  dark:bg-gray-700 dark:border-gray-600  dark:ring-offset-gray-800  "
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    I agree to the terms and conditions
                  </label>
                </div>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-[#fe2dbc] hover:underline dark:text-[#6e28fa]"
                >
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
