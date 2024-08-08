import React from "react";

const Register = () => {
  return (
    <div className="w-[100%] max-w-sm rounded-md bg-white p-5">
      <h1 className="text-center text-2xl font-bold">Register</h1>
      <form className="py-2 text-center">
        <div className="grid gap-y-2">
          <input
            type="text"
            className="rounded border p-2"
            placeholder="Enter your first name"
          />
          <input
            type="text"
            className="rounded border p-2"
            placeholder="Enter your last name"
          />
          <input
            type="email"
            className="rounded border p-2 outline outline-2 outline-red-500"
            placeholder="Enter your email"
          />
          <input
            type="password"
            className="rounded border p-2"
            placeholder="Enter your password"
          />
        </div>
        <button
          className="mt-3 max-w-[200px] rounded-md bg-red-500 px-10 py-1 text-white"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
