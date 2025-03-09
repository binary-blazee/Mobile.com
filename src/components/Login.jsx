import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onClose = () => {} }) {
  const [username, setUsername] = useState("");
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  const login = () => {
    if (accepted && username.trim()) {
      localStorage.setItem("username", username);
      localStorage.setItem("status", "Access Granted");
      onClose();
      navigate("/");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        />
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
            className="mr-2"
          />
          <span>I accept the terms and conditions</span>
        </div>
        <button
          onClick={login}
          className="bg-red-500 text-white px-4 py-2 rounded w-full"
          disabled={!accepted || !username.trim()}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
