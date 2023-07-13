import React, { useState } from "react";
import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  TableFooter,
  Pagination,
  Paper,
} from "@mui/material";
import DataTableStyle from "./index.style";

const DataTable = (props) => {
  const { columns, data, numPage, changePage } = props;

  return (
    <DataTableStyle className="table" component={Paper}>
      <Table>
        <TableHead>
          {columns.map((column) => (
            <TableCell className="bold-text uppercase">{column}</TableCell>
          ))}
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              {Object.keys(row).map((key) => (
                <TableCell>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <Pagination
            className="pagination"
            size="large"
            count={numPage}
            color="primary"
            onClick={(event, page) => {
              changePage(parseInt(event.target.textContent));
            }}
          />
        </TableFooter>
      </Table>
    </DataTableStyle>
  );
};

export default DataTable;
