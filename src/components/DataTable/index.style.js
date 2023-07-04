import styled from "styled-components";
import { TableContainer } from "@mui/material";

const DataTableStyle = styled(TableContainer)`
  && {
    .icon {
      border-radius: 30%;
      cursor: pointer;
    }
    .icon:hover {
      background-color: whitesmoke;
    }
    .delete-icon {
      color: red;
      margin-left: 2%;
    }
    .bold-text {
      font-weight: bold;
    }
    .uppercase {
      text-transform: uppercase;
    }
    .text-center {
      text-align: center;
    }
  }
`;

export default DataTableStyle;
