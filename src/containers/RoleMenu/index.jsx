import {
  Button,
  Box,
  Typography,
  Grid,
  TextField,
  Paper,
  Tabs,
  Tab,
  Checkbox,
  FormGroup,
  FormControlLabel,
  InputAdornment,
} from "@mui/material";
import {
  Clear as ClearIcon,
  Search as SearchIcon,
  DeleteForever as DeleteForeverIcon,
  Save as SaveIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import AddRoleModal from "../../components/AddRoleModal";
import TabPanel from "../../components/TabPanel";
import RoleMenuStyle from "./index.style";

const RoleMenu = () => {
  const [openAddRole, setOpenAddRole] = useState(false);
  const [activeRole, setActiveRole] = useState("");
  const props = {
    openAddRole,
    setOpenAddRole,
  };
  const roleMenu = [
    {
      id: "649ce6bb1a6ec22d59273ce6",
      name: "admin",
      permissions: [
        "64acb5a2b1e2b0453c16b1cd",
        "64ad2e78d723dc1428f8138a",
        "64af70dfa01d2e1370bcb562",
      ],
    },
    {
      id: "649ce6c91a6ec22d59273ce7",
      name: "owner",
      permissions: [
        "64acb5a2b1e2b0453c16b1cd",
        "64ad2e78d723dc1428f8138a",
        "64af70dfa01d2e1370bcb562",
        "64af70eba01d2e1370bcb566",
      ],
    },
    {
      id: "64b219dccd62314ebcbfdb8b",
      name: "operator",
      permissions: ["64acb5a2b1e2b0453c16b1cd"],
    },
    {
      id: "64afa9ba19b30cfea8600b26",
      name: "server admin",
      permissions: [],
    },
  ];
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState(roleMenu);
  const [checkedPermissions, setCheckedPermissions] = useState([]);

  const [isChanged, setIsChanged] = useState(false);

  const permissions = [
    { name: "Thêm", id: "64acb5a2b1e2b0453c16b1cd" },
    { name: "Sửa", id: "64ad2e78d723dc1428f8138a" },
    { name: "Xóa", id: "64af70dfa01d2e1370bcb562" },
    { name: "Xem", id: "64af70eba01d2e1370bcb566" },
  ];

  const handleChangeRole = (e, newRole) => {
    setActiveRole(newRole);
    const result = roleMenu.filter((role) => role.id === newRole);
    setCheckedPermissions(result[0].permissions);
  };

  useEffect(() => {
    const results = roleMenu.filter((role) =>
      role.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResult(results);
    if (results.length > 0) {
      setActiveRole(results[0].id);
      setCheckedPermissions(results[0].permissions);
    }
  }, [searchInput]);

  const handleChangeSearchRole = (e) => {
    setSearchInput(e.target.value);
  };

  const handlePermissionChange = (e, permissionId) => {
    if (e.target.checked) {
      // Add the permission to the checkedPermissions array
      setCheckedPermissions((prevPermissions) => [
        ...prevPermissions,
        permissionId,
      ]);
    } else {
      // Remove the permission from the checkedPermissions array
      setCheckedPermissions((prevPermissions) =>
        prevPermissions.filter((id) => id !== permissionId)
      );
    }
    const result = roleMenu.filter((role) => role.id === activeRole);
    const sameArr =
      JSON.stringify(result[0].permissions) ===
      JSON.stringify(checkedPermissions.sort());
    setIsChanged(sameArr);
  };

  const handleSaveChange = () => {
    const result = roleMenu.filter((role) => role.id === activeRole);
    console.log(checkedPermissions.sort());
    console.log(result[0].permissions);
    console.log(isChanged);
  };

  const handleDeleteRole = () => {
    console.log(activeRole);
  };

  return (
    <RoleMenuStyle>
      <Grid
        container
        direction="column"
        className="grid-container"
        alignItems="center"
      >
        <Grid container justifyContent="space-between">
          <TextField
            className="search-box"
            onChange={handleChangeSearchRole}
            value={searchInput}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  {searchInput && (
                    <ClearIcon onClick={() => setSearchInput("")} />
                  )}
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <Box>
            <Button onClick={handleDeleteRole} className="btn-delete">
              <DeleteForeverIcon />
              Xóa vai trò
            </Button>
            <Button onClick={handleSaveChange}>
              <SaveIcon />
              Lưu thay đổi
            </Button>
          </Box>
        </Grid>

        <Grid
          alignContent="center"
          container
          direction="row"
          component={Paper}
          className="grid-content"
        >
          <Grid container direction="column" className="grid-role">
            <Box>
              <Typography className="role-title">Danh sách vai trò</Typography>
            </Box>
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChangeRole}
              value={activeRole}
              orientation="vertical"
            >
              {searchResult.map((role) => (
                <Tab key={role.id} value={role.id} label={role.name} />
              ))}
            </Tabs>
            <Button onClick={() => setOpenAddRole(true)} className="btn-create">
              <AddIcon />
              Thêm vai trò
            </Button>
          </Grid>
          <Grid className="grid-permission" container alignItems="center">
            {searchResult.map((role) => (
              <TabPanel
                key={role.id}
                value={activeRole}
                index={role.id}
                className="tab-permission"
              >
                <FormGroup>
                  <Grid container direction="row">
                    {permissions.map((per, idPer) => {
                      let checked = false;
                      role.permissions.forEach((element) => {
                        if (per.id === element) {
                          checked = true;
                        }
                      });
                      return idPer % 2 === 0 ? (
                        <Grid className="grid-permissionItem">
                          <FormControlLabel
                            key={idPer}
                            control={
                              <Checkbox
                                defaultChecked={checked}
                                onChange={(e) =>
                                  handlePermissionChange(e, per.id)
                                }
                              />
                            }
                            label={per.name}
                          />
                        </Grid>
                      ) : (
                        <Grid className="grid-permissionItem">
                          <FormControlLabel
                            key={idPer}
                            control={
                              <Checkbox
                                defaultChecked={checked}
                                onChange={(e) =>
                                  handlePermissionChange(e, per.id)
                                }
                              />
                            }
                            label={per.name}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </FormGroup>
              </TabPanel>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <AddRoleModal props={props} />
    </RoleMenuStyle>
  );
};

export default RoleMenu;
