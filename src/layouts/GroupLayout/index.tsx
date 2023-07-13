import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { BASE_COLOR } from "../../constants/color";
import { SideBarChannel } from "../../components/SideBar";
import { Outlet } from "react-router-dom";

export const GroupLayout = () => {
  return (
    <Grid container height={1}>
      <GridNavbar item xs={2}>
        <SideBarChannel />
      </GridNavbar>
      <GridContent item xs>
        <Outlet />
      </GridContent>
    </Grid>
  );
};

const GridNavbar = styled(Grid)({
  background: BASE_COLOR.second,
});

const GridContent = styled(Grid)({
  background: "#FFF",
});
