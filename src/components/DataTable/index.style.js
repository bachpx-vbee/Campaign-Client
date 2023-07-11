import styled from "styled-components";
import { TableContainer } from "@mui/material";

const DataTableStyle = styled(TableContainer)`
  && {
    .bold-text {
      font-weight: bold;
    }
    .uppercase {
      text-transform: uppercase;
    }
    .table {
      margin: 0 auto;
      width: 95vw;
    }
  }
`;

export default DataTableStyle;
