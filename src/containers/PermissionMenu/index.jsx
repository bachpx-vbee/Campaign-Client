import React, { useState } from "react";
import { Button } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import DataTable from "../../components/DataTable";
import PermissionMenuStyle from "./index.style";
import PermissionDrawer from "../../components/PermissionDrawer";
import DeleteAlert from "../../components/DeleteAlert";

const permissions = [
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
  const [permissionRow, setPermissionRow] = useState(null);
  const [deleteAlert, setDeleteAlert] = useState(false);

  const handleAddPermission = () => {
    setPermissionRow(null);
    setDrawerTitle("Add permission");
    setIsDrawerOpen(true);
  };

  const handleClosePermission = () => {
    setPermissionRow(null);
    setIsDrawerOpen(false);
  };

  const handleUpdatePermission = (row) => {
    setPermissionRow(row);
    setDrawerTitle("Update permission");
    setIsDrawerOpen(true);
  };

  const handleOpenDeleteAlert = () => {
    setDeleteAlert(true);
  };

  const handleCloseDeleteAlert = () => {
    setDeleteAlert(false);
  };

  const ActionButton = ({ row }) => (
    <>
      <EditIcon className="icon" onClick={() => handleUpdatePermission(row)} />
      <DeleteIcon
        className="delete-icon icon"
        onClick={handleOpenDeleteAlert}
      />
    </>
  );

  const permissionWithActions = permissions.map((permisson) => ({
    ...permisson,
    action: <ActionButton row={permisson} />,
  }));

  return (
    <>
      <DeleteAlert open={deleteAlert} onClose={handleCloseDeleteAlert} />
      <PermissionDrawer
        title={drawerTitle}
        open={isDrawerOpen}
        onClose={handleClosePermission}
        value={permissionRow}
      />
      <PermissionMenuStyle>
        <div className="add-button">
          <Button variant="contained" onClick={handleAddPermission}>
            Tạo quyền
          </Button>
        </div>
        <DataTable columns={columns} data={permissionWithActions} />
      </PermissionMenuStyle>
    </>
  );
};

export default PermissionMenu;
