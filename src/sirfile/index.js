import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Typography,
  ClickAwayListener,
  Popper,
  Paper,
  Grow,
  MenuList,
  FormHelperText,
  TextField,
  IconButton,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// ** Third Party Components
import PerfectScrollbarComponent from "react-perfect-scrollbar";
// import Icon from "@/@core/common/icon";
// import { addCampaignValidation } from "@/@core/validations";

const sidebarItems = [
  { id: "today", icon: "ph:calendar-light", label: "Today" },
  { id: "next", icon: "ph:calendar-light", label: "Next 7 Days" },
  { id: "JobQ", icon: "iwwa:box", label: "Job Queue" },
];

const campaignItems = [
  {
    id: "AllC",
    icon: "material-symbols:campaign-sharp",
    label: "All Campaigns",
  },
  {
    id: "MyFC",
    icon: "mdi:menu",
    label: "My First Campaign My First Campaign",
  },
];

const mySpaceItems = [
  { id: "MyNote", icon: "uil:notes", label: "My Notes" },
  { id: "MyToDo", icon: "lucide:list-todo", label: "My To-Do's" },
];

const filterItems = [
  { id: "Associates", icon: "bi:people", label: "Associates" },
  { id: "Tags", icon: "ph:tag", label: "Tags" },
  { id: "Priority", icon: "ic:baseline-low-priority", label: "Priority" },
  { id: "Status", icon: "fluent:status-16-regular", label: "Status" },
];

const bottomItems = [
  { id: "Completed", icon: "ci:checkbox-check", label: "Completed" },
  {
    id: "Trash",
    icon: "solar:trash-bin-minimalistic-2-linear",
    label: "Trash",
  },
];

const associates = [
  { id: 1, name: "Yogesh Jadhav" },
  { id: 2, name: "Sneha Wani" },
  { id: 3, name: "Manoj Jaiswal" },
];

const tags = [
  { id: 1, name: "Tag1" },
  { id: 2, name: "Tag2" },
  { id: 3, name: "Tag3" },
  { id: 4, name: "Tag4" },
  { id: 6, name: "Tag5" },
  { id: 7, name: "Tag6" },
  { id: 8, name: "Tag7" },
  { id: 9, name: "Tag8" },
  { id: 10, name: "Tag9" },
  { id: 11, name: "Tag10" },
  { id: 12, name: "Tag11" },
  { id: 13, name: "Tag12" },
  { id: 14, name: "Tag13" },
  { id: 15, name: "Tag14" },
  { id: 16, name: "Tag15" },
  { id: 17, name: "Tag16" },
  { id: 18, name: "Tag17" },
  { id: 19, name: "Tag18" },
];

const priority = [
  { id: 1, name: "High" },
  { id: 2, name: "Medium" },
  { id: 3, name: "Low" },
];

const status = [
  { id: 1, name: "Active" },
  { id: 2, name: "Inactive" },
];

const roles = ["Internal (Self)"];

function SidebarItem({
  item,
  active,
  onClick,
  count,
  onMenuClick,
  isOpenFilter,
}) {
  const isFilter = ["Associates", "Tags", "Priority", "Status"].includes(
    item.id
  );

  return (
    <Box
      sx={{
        width: "230px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        borderRadius: "5px",
        backgroundColor: isOpenFilter
          ? "#90EE90"
          : active
            ? "#FFFFFF"
            : "transparent",
        "&:hover": { backgroundColor: isOpenFilter ? "#90EE90" : "#F9F9F9" },
      }}
      onClick={
        onMenuClick ? (e) => onMenuClick(e, item.id) : () => onClick(item.id)
      }
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: "12px",
          minWidth: 0,
        }}
      >
        {/* <Icon
          icon={item.icon}
          style={{ color: "#9F9F9F", marginRight: "15px" }}
          height="18"
        /> */}
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#191919",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            flex: 1,
            minWidth: 0,
            pr: 0.5,
          }}
          title={item.label}
        >
          {item.label}
        </Typography>
      </Box>
      {isFilter && (
        <Box
          sx={{
            marginRight: "12px",
            backgroundColor: "#E0E0E0",
            borderRadius: "10px",
            padding: "2px 6px",
          }}
        >
          <Typography sx={{ fontSize: "12px", color: "#191919" }}>
            {count !== null ? count : "0"}
          </Typography>
        </Box>
      )}
      {!isFilter && (
        <Box sx={{ marginRight: "12px" }}>
          <Typography sx={{ fontSize: "14px", color: "#9F9F9F" }}>
            {count !== null ? count : "0"}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

function ProjectSidebar() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    // resolver: yupResolver(addCampaignValidation),
    defaultValues: { clientCompany: "Internal (Self)" },
  });

  const onSubmit = (data) => {
    console.log("data", data);
    handleClosePop();
  };
  const [activeButton, setActiveButton] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [open, setOpen] = useState(false);
  const [roleFilter, setRoleFilter] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [openFilter, setOpenFilter] = useState(null);

  const handleButtonClick = (buttonId) => setActiveButton(buttonId);
  const handleClickOpen = () => setOpen(true);
  const handleClosePop = () => {
    setOpen(false);
    reset();
  };

  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuId(id);
    setOpenFilter(id);
  };

  const handleClose = (event) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
    setOpenMenuId(null);
    setOpenFilter(null);
  };

  const handleRoleChange = (event) => {
    setRoleFilter(event.target.value);
  };

  const handleSelect = (id, name) => {
    console.log(id, name);
    setSelectedItems((prev) => ({
      ...prev,
      [id]: { ...prev[id], [name]: !prev[id]?.[name] },
    }));
  };

  const getSelectedCount = (id) => {
    if (!selectedItems[id]) return 0;
    return Object.values(selectedItems[id]).filter(Boolean).length;
  };

  const renderPopover = (id, items) => {
    const selectAllChecked = (id) => {
      if (!selectedItems[id]) {
        return false;
      }

      const allSelected = items.every((item) => selectedItems[id][item.name]);
      return allSelected;
    };

    const handleSelectAll = (id) => {
      const allSelected = items.every((item) => selectedItems[id]?.[item.name]);

      const newSelectedItems = {};
      if (!allSelected) {
        items.forEach((item) => {
          newSelectedItems[item.name] = true;
        });
      }

      setSelectedItems((prev) => ({
        ...prev,
        [id]: newSelectedItems,
      }));
    };
    return (
      <ClickAwayListener onClickAway={handleClose}>
        <Popper
          id={`popover-${id}`}
          open={openMenuId === id}
          anchorEl={anchorEl}
          role={undefined}
          transition
          disablePortal
          placement="right-start"
          modifiers={[
            {
              name: "offset",
              options: {
                offset: [0, -30],
              },
            },
          ]}
          sx={{ width: 250, maxHeight: 300, zIndex: 999 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper sx={{ overflow: "hidden", py: 2 }}>
                <PerfectScrollbarComponent
                  style={{ maxHeight: 220 }}
                  options={{
                    wheelPropagation: false,
                    suppressScrollX: true,
                  }}
                >
                  <MenuList
                    autoFocusItem={open}
                    id={`menu-${id}`}
                    aria-labelledby={`menu-${id}`}
                    onKeyDown={(event) => event.stopPropagation()}
                  >
                    <MenuItem key={`select-all-${id}`} sx={{ height: 40 }}>
                      <Checkbox
                        checked={selectAllChecked(id)}
                        onChange={() => handleSelectAll(id)}
                        sx={{ color: "#707070", transform: "scale(0.85)" }}
                      />
                      <Typography>Select All</Typography>
                    </MenuItem>
                    {items.map((item) => (
                      <MenuItem
                        key={item.id}
                        disableRipple
                        sx={{
                          height: 40,
                          display: "flex",
                          flexDirection: "row",
                          gap: 1,
                          fontSize: "14px",
                          fontFamily: "Montserrat",
                        }}
                      >
                        <Checkbox
                          checked={selectedItems[id]?.[item.name] || false}
                          onChange={() => handleSelect(id, item.name)}
                          sx={{ color: "#707070", transform: "scale(0.85)" }}
                        />
                        <img
                          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mp&r=g"
                          alt=""
                          style={{ width: 25, height: 25, borderRadius: "50%" }}
                        />
                        <Typography>{item.name}</Typography>
                      </MenuItem>
                    ))}
                  </MenuList>
                </PerfectScrollbarComponent>
              </Paper>
            </Grow>
          )}
        </Popper>
      </ClickAwayListener>
    );
  };

  const renderSidebarSection = (title, items, showAddButton = false) => (
    <Box sx={{ display: "flex", flexDirection: "column", padding: "15px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            fontFamily: "Montserrat",
            color: "#6A6A6A",
          }}
        >
          {title}
        </Typography>
        {showAddButton && (
          <IconButton
            onClick={handleClickOpen}
            disableRipple
            sx={{
              "&:hover": {
                backgroundColor: "#e3e3e3",
              },
            }}
          >
            {/* <Icon
              icon="hugeicons:add-square"
              style={{ color: "#9F9F9F", cursor: "pointer" }}
              height={18}
            /> */}
          </IconButton>
        )}
      </Box>
      {items.map((item) => (
        <SidebarItem
          key={item.id}
          item={item}
          active={activeButton === item.id}
          onClick={handleButtonClick}
          onMenuClick={
            ["Associates", "Tags", "Priority", "Status"].includes(item.id)
              ? handleMenuClick
              : null
          }
          isOpenFilter={openFilter === item.id}
          count={
            ["Associates", "Tags", "Priority", "Status"].includes(item.id)
              ? getSelectedCount(item.id)
              : null
          }
        />
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
        width: "270px",
        height: "100vh",
        backgroundColor: "#ECF1FE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "auto",
      }}
    >
      {renderSidebarSection("", sidebarItems)}
      {renderSidebarSection("Campaigns List", campaignItems, true)}
      {renderSidebarSection("My Space", mySpaceItems)}
      {renderSidebarSection("Filters", filterItems)}
      {renderSidebarSection("", bottomItems)}

      {renderPopover("Associates", associates)}
      {renderPopover("Tags", tags)}
      {renderPopover("Priority", priority)}
      {renderPopover("Status", status)}

      <Dialog
        anchor="right"
        open={open}
        onClose={handleClosePop}
        sx={{
          "& .MuiDialog-paper": {
            top: 0,
            left: "auto !important",
            boxShadow: "none",
            px: 4,
            pt: 3,
            pb: 4,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            backgroundColor: "#FFFFFF",
            border: "1px solid #9F9F9F",
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            sx={{
              width: "345px",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <InputLabel
                htmlFor="campaignName"
                sx={{
                  fontSize: "14px",
                  color: "#474747",
                  position: "static",
                  textAlign: "left",
                  fontWeight: 600,
                  pb: 2.5,
                  ml: -1.2,
                }}
              >
                Campaign Name
              </InputLabel>
              <TextField
                {...register("campaignName")}
                name="campaignName"
                variant="outlined"
                placeholder="Enter Campaign Name"
                size="small"
                fullWidth
                InputProps={{
                  sx: {
                    backgroundColor: "#F3F3F3",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& input::placeholder": {
                      fontSize: "14px",
                      textAlign: "left",
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "14px",
                      textAlign: "left",
                    },
                  },
                }}
              />
              {errors.campaignName && (
                <FormHelperText
                  sx={{ mx: 1, color: "error.main" }}
                  id="validation-basic-dob"
                >
                  {errors.campaignName.message}
                </FormHelperText>
              )}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                width: "100%",
              }}
            >
              <InputLabel
                htmlFor="clientCompany"
                sx={{
                  fontSize: "14px",
                  color: "#474747",
                  position: "static",
                  textAlign: "left",
                  fontWeight: 600,
                  pb: 2,
                  ml: -1.2,
                }}
              >
                Client / Company
              </InputLabel>
              <Controller
                name="clientCompany"
                control={control}
                render={({ field }) => (
                  <FormControl
                    fullWidth
                    size="small"
                    error={!!errors.clientCompany}
                  >
                    <Select
                      {...field}
                      id="clientCompany"
                      displayEmpty
                      renderValue={(selected) =>
                        (selected && selected) || "Internal"
                      }
                      sx={{
                        borderRadius: "5px",
                        backgroundColor: "#F3F3F3",
                        height: "40px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          fontSize: "14px",
                          textAlign: "left",
                        },
                      }}
                    >
                      {roles.map((role) => (
                        <MenuItem key={role} value={role}>
                          <ListItemText
                            primary={role}
                            sx={{
                              "& .MuiTypography-root": { fontSize: "14px" },
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.clientCompany && (
                      <FormHelperText>
                        {errors.clientCompany.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />
            </Box>

            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0058FF",
                  width: "68px",
                  height: "34px",
                  textTransform: "none",
                  fontWeight: 500,
                }}
                type="submit"
              >
                Add
              </Button>
              <Button onClick={handleClosePop} color="primary">
                Cancel
              </Button>
            </Box>
          </FormControl>
        </form>
      </Dialog>
    </Box>
  );
}

export default ProjectSidebar;
