import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/dashboard`, { withCredentials: true })
      .then((res) => setMessage(res.data.message))
      .catch(() => navigate("/"));
  }, []);

  const handleLogout = async () => {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/logout`, {}, { withCredentials: true });
    navigate("/");
  };

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
