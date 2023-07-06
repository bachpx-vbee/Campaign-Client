import React, { useState } from "react";
import { Button } from "@mui/material";
import AdminMenuStyle from "./index.style";
import DataTable from "../../components/DataTable";

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
  return (
    <AdminMenuStyle>
      <div className="add-button">
        <Button variant="contained">Thêm admin</Button>
      </div>
      <DataTable columns={columns} data={admin} deleteIcon />
    </AdminMenuStyle>
  );
};

export default AdminMenu;
