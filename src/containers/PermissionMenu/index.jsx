import React, { useState } from "react";
import { Button } from "@mui/material";
import DataTable from "../../components/DataTable";
import PermissionMenuStyle from "./index.style";
import PermissionDrawer from "../../components/PermissionDrawer";
import DeleteAlert from "../../components/DeleteAlert";

const permission = [
  {
    name: "Role management",
    url: "/role-management",
    method: "GET",
    type: "MENU",
  },
  {
    name: "Get permission",
    url: "/api/v1/get-all-permission",
    method: "GET",
    type: "API",
  },
  {
    name: "Add permission",
    url: "/api/v1/add-permission",
    method: "POST",
    type: "API",
  },
  {
    name: "Delete permission",
    url: "/api/v1/delete-permission/:permissionId",
    method: "DELETE",
    type: "API",
  },
];

const columns = ["Tên quyền", "Đường dẫn", "Phương thức", "Loại", "Hành động"];

const PermissionMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("");
  const [permisisonRow, setPermissisonRow] = useState(null);
  const [deleteAlert, setDeleteAlert] = useState(false);

  const handleAddPermission = () => {
    setPermissisonRow(null);
    setDrawerTitle("Add permission");
    setIsDrawerOpen(true);
  };

  const handleClosePermission = () => {
    setPermissisonRow(null);
    setIsDrawerOpen(false);
  };

  const handleUpdatePermission = (row) => {
    setPermissisonRow(row);
    setDrawerTitle("Update permission");
    setIsDrawerOpen(true);
  };

  const handleOpenDeleteAlert = () => {
    setDeleteAlert(true);
  };

  const handleCloseDeleteAlert = () => {
    setDeleteAlert(false);
  };

  return (
    <>
      <DeleteAlert open={deleteAlert} onClose={handleCloseDeleteAlert} />
      <PermissionDrawer
        title={drawerTitle}
        open={isDrawerOpen}
        onClose={handleClosePermission}
        value={permisisonRow}
      />
      <PermissionMenuStyle>
        <div className="add-button">
          <Button variant="contained" onClick={handleAddPermission}>
            Tạo quyền
          </Button>
        </div>
        <DataTable
          columns={columns}
          data={permission}
          updateIcon
          deleteIcon
          updateRow={handleUpdatePermission}
          deleteRow={handleOpenDeleteAlert}
        />
      </PermissionMenuStyle>
    </>
  );
};

export default PermissionMenu;
