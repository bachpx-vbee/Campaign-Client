import React, { useState } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TablePagination,
  Button,
  Chip,
  Typography,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import PermissionMenuStyle from "./index.style";

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

const PermissionMenu = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <PermissionMenuStyle>
      <div className="add-button">
        <Button variant="contained">Tạo quyền</Button>
      </div>
      <TableContainer className="table" component={Paper}>
        <Table>
          <TableHead>
            <TableCell className="bold-text uppercase">Tên quyền</TableCell>
            <TableCell className="bold-text uppercase">Đường dẫn</TableCell>
            <TableCell width="12%" className="bold-text uppercase text-center">
              Phương thức
            </TableCell>
            <TableCell width="10%" className="bold-text uppercase text-center">
              Loại
            </TableCell>
            <TableCell width="10%" className="bold-text uppercase text-center">
              Hành động
            </TableCell>
          </TableHead>
          <TableBody>
            {permission
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <Typography className="bold-text">{row.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{row.url}</Typography>
                  </TableCell>
                  <TableCell className="text-center">
                    <Typography>{row.method}</Typography>
                  </TableCell>
                  <TableCell className="text-center">
                    {row.type === "API" ? (
                      <Chip label="API" className="api-chip" />
                    ) : (
                      <Chip label="MENU" className="menu-chip" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    <EditIcon className="icon" />
                    <DeleteIcon className="delete-icon icon" />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5, 10]}
              count={permission.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>
    </PermissionMenuStyle>
  );
};

export default PermissionMenu;
