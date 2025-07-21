import React, { useState } from "react";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setForm({ email: "", password: "" });
  };

  return (
    <>
      <div className="h-[88.10vh] flex justify-center items-center ">
        <div className="w-80 form flex flex-col shadow-lg px-7 py-10 rounded-lg font-bold ">
          {/* heading */}
          <p className="text-blue-700 text-xl cursor-default mb-7.5 text-center ">
            Sign in to your account
          </p>

          {/* form */}
          <form onSubmit={handleSubmit}>
            {/* email input */}
            <div className="">
              <label
                htmlFor="email"
                className="block font-medium text-gray-900 mb-1"
              >
                Email address
              </label>
              <input
                className="w-full border-2 bg-[#ececec] rounded px-2 py-1.5 outline-none
            hover:border-blue-600 focus:border-blue-600 transition-all duration-300 "
                onChange={handleChange}
                id="email"
                type="email"
                spellCheck="false"
                required
                autoComplete="email"
                name="email"
                value={form.email}
              />
            </div>

            {/* password input */}
            <div className="mt-4 mb-10">
              <label
                htmlFor="password"
                className="block font-medium text-gray-900 mb-1"
              >
                Password
              </label>

              <div className="flex items-center justify-between w-full border-2 bg-[#ececec] rounded hover:border-blue-600 focus-within:border-blue-600 transition-all duration-300">
                <input
                  className="w-full px-2 py-1.5 outline-none "
                  onChange={handleChange}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  spellCheck="false"
                  required
                  name="password"
                  value={form.password}
                />

                <button
                  className="cursor-pointer mr-2"
                  type="button"
                  onMouseDown={() => setShowPassword(true)}
                  onMouseUp={() => setShowPassword(false)}
                  onMouseLeave={() => setShowPassword(false)}
                  onTouchStart={() => setShowPassword(true)}
                  onTouchEnd={() => setShowPassword(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 hover:text-blue-600 transition-all duration-300 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* submit button */}
            <input
              className="w-full border-2 text-blue-600 border-transparent p-1.25 rounded cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
