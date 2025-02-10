import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      setIsLoggedIn(true);
      navigate("/main");
    } else {
      alert("Invalid credentials. Use 'user@example.com' and 'password'");
    }
  };

  return (
    <section className="custom-bg-gradient dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 border-[0.5px] border-solid border-[#fe2dbc] rounded-lg space-y-4 sm:p-8">
            <h1 className="text-xl font-bold text-[#fe2dbc] md:text-2xl dark:text-white">
              Login to your account
            </h1>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 border rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
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
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full p-2.5 border rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-custom-gradient  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#6e28fa] "
              >
                Sign in
              </button>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border rounded custom-checkbox"
                  />
                  <label htmlFor="remember" className="ml-3 text-sm text-gray-500 dark:text-gray-300">
                    Remember me
                  </label>
                </div>
                <button
                  onClick={() => navigate("/reset-password")}
                  className="text-sm font-medium text-[#fe2dbc] hover:underline "
                >
                  Forgot password?
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                 href="https://www.google.com" 
    target="_self"
                  className="font-medium text-[#fe2dbc] hover:underline "
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
