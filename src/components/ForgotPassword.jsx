import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    console.log('Password reset link sent to:', email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-6 shadow-xl rounded-2xl bg-white">
        <div className="space-y-6">
          <div className="flex justify-center">
            <img src="/assets/images/bluestock-logo.png" alt="Bluestock Logo" className="h-10" />
          </div>
          <h2 className="text-2xl font-bold text-center">Forgot Password?</h2>
          <p className="text-center text-gray-600">Enter your email address to get the password reset link.</p>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="hello@bluestock.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
            onClick={handleReset}
          >
            Password Reset
          </button>
          <div className="text-center">
            <a href="/login" className="text-sm text-gray-500 hover:underline">
              Back to login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
