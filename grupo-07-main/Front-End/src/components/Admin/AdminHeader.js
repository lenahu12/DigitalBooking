import React from 'react'
import { useNavigate } from "react-router-dom";


const AdminHeader = () => {
    const navigate = useNavigate();
  return (
    <section>
    <nav className="adminHeader--title-container">
      <div>
        <h1>Administración</h1>
      </div>
      <i
        className="fa-solid fa-arrow-left"
        onClick={() => navigate("/")}
      ></i>
    </nav>
  </section>
  )
}

export default AdminHeader