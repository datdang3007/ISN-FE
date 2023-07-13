import { Box } from "@mui/material";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "auto",
      }}
    >
      <Box>
        <Header />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};
