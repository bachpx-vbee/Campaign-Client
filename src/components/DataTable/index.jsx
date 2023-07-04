import React, { useState } from "react";
import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  TableFooter,
  TablePagination,
  Typography,
  Paper,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import DataTableStyle from "./index.style";

const DataTable = (props) => {
  const { columns, data, updateIcon, deleteIcon, updateRow, deleteRow } = props;

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
    <DataTableStyle className="table" component={Paper}>
      <Table>
        <TableHead>
          {columns.map((column) => (
            <TableCell className="bold-text uppercase">{column}</TableCell>
          ))}
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.name}>
                {Object.keys(row).map((key) => (
                  <TableCell>
                    <Typography>{row[key]}</Typography>
                  </TableCell>
                ))}
                <TableCell>
                  {updateIcon && (
                    <EditIcon onClick={() => updateRow(row)} className="icon" />
                  )}
                  {deleteIcon && (
                    <DeleteIcon
                      onClick={deleteRow}
                      className="delete-icon icon"
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={[5, 10]}
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableFooter>
      </Table>
    </DataTableStyle>
  );
};

export default DataTable;
