import React, { useState } from "react";
import { Button } from "@mui/material";
import AdminMenuStyle from "./index.style";
import DataTable from "../../components/DataTable";
import AdminDrawer from "../../components/AdminDrawer";
import DeleteAlert from "../../components/DeleteAlert";

const admin = [
  {
    id: "13h1k2lh3kl",
    email: "bachpx.vbee@gmail.com",
    role: "server-admin",
  },
  {
    id: "1h32k21h323k",
    email: "bachspham@gmail.com",
    role: "owner",
  },
  {
    id: "l1k2j32l1k3",
    email: "bachspham1@gmail.com",
    role: "admin",
  },
];

const columns = ["ID", "Email", "Phân quyền", "Hành động"];

const AdminMenu = () => {
  const [adminDrawer, setAdminDrawer] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);

  const handleAddAdminDrawer = () => {
    setAdminDrawer(true);
  };

  const handleCloseAdminDrawer = () => {
    setAdminDrawer(false);
  };

  const handleOpenDeleteAlert = () => {
    setDeleteAlert(true);
  };

  const handleCloseDeleteAlert = () => {
    setDeleteAlert(false);
  };

  return (
    <AdminMenuStyle>
      <DeleteAlert open={deleteAlert} onClose={handleCloseDeleteAlert} />
      <AdminDrawer open={adminDrawer} onClose={handleCloseAdminDrawer} />
      <div className="add-button">
        <Button variant="contained" onClick={handleAddAdminDrawer}>
          Thêm admin
        </Button>
      </div>
      <DataTable
        columns={columns}
        data={admin}
        deleteIcon
        deleteRow={handleOpenDeleteAlert}
      />
    </AdminMenuStyle>
  );
};

export default AdminMenu;
