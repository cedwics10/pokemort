import React from "react";
import { Link } from "react-router-dom";

const AdminHeader: React.FC = () => {
  return (
    <header className="admin-header">
      <div className="admin-header__logo">
        <h1>Admin Panel</h1>
      </div>
      <nav className="admin-header__nav">
        <ul>
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/admin/settings">Settings</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;
