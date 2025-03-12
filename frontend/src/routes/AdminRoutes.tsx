import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
/* import Dashboard from "../pages/admin/Dashboard";
import Settings from "../pages/admin/Settings"; */

const AdminRoutes: React.FC = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
