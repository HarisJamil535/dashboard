import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="custom-bg-gradient dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {isSubmitted ? (
              <p className="text-sm text-center text-red-500 font-semibold dark:text-gray-300">
                If an account is associated with the email address you entered, a new password will be sent to that email.
              </p>
            ) : (
              <>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-[#fe2dbc] md:text-2xl dark:text-white">
                  Forgot Your Password?
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Please enter your email address associated with your account and we will email you a new password.
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
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-custom-gradient focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Reset Password
                  </button>
                </form>
              </>
            )}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="w-full text-white py-2.5 bg-gray-400 focus:outline-none font-medium rounded-lg text-sm px-5  text-center mt-0"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
