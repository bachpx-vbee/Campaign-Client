import styled from "styled-components";

const RoleMenuStyle = styled.div`
  .grid-container{
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }
  .search-box{
    width: 30%;
    
  }
  .grid-content{
    width: 100%;
    margin-top: 15px;
    padding-top: 2px;
  }
  .grid-role{
    width:30%;
    border-right:1px
  }
  .role-title{
    padding:10px
  }
  .grid-permission{
    width:70%
  }
  .grid-permissionItem{
    width:50%
  }
  .tab-permission{
    width:100%
  }
  .btn-delete{
    color:red
  }
  .btn-create{
    color:white;
    background-color:#1976d2;
    width:70%;
    margin:5px auto 10px auto;
    hover: 
  }
  .btn-create:hover{
    cursor: pointer;
    background-color:#757ce8
  }
`;

export default RoleMenuStyle;