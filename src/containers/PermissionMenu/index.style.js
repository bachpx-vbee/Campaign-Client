import styled from "styled-components";

export default styled.div`
  .bold-text {
    font-weight: bold;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .text-center {
    text-align: center;
  }
  .delete-icon {
    color: red;
    margin-left: 2%;
  }
  .icon {
    border-radius: 30%;
    cursor: pointer;
  }
  .icon:hover {
    background-color: whitesmoke;
  }
  .api-chip {
    background-color: #4caf50;
    color: white;
  }
  .menu-chip {
    background-color: #ff9800;
    color: white;
  }
  .add-button {
    width: 96.3vw;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1%;
  }
  .table {
    margin: 0 auto;
    width: 95vw;
  }
`;
