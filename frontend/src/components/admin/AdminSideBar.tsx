import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar: React.FC = () => {
  return (
    <aside className="admin-sidebar">
      <nav>
        <ul>
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/admin/users">Manage Users</Link></li>
          <li><Link to="/admin/settings">Settings</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
