import React, { useRef, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../utils/firebase";

const ForgotPassword = () => {
  const emailRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, emailRef.current.value);
      setMessage("Password reset email sent. Please check your inbox!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleReset}
        className="bg-black bg-opacity-80 p-12 rounded-lg text-white max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4">Forgot Password?</h2>
        <input
          type="email"
          placeholder="Enter your email"
          ref={emailRef}
          className="p-4 my-4 w-full bg-gray-500 rounded"
          required
        />
        <button type="submit" className="p-4 my-4 bg-red-700 w-full rounded">
          Send Reset Link
        </button>
        {message && <p className="text-green-400 text-center">{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
