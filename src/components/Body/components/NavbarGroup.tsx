import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { ReactNode } from "react";

interface NavbarGroupProps {
  children?: ReactNode;
}

export default function NavbarGroup({ children }: NavbarGroupProps) {
  return (
    <>
      <GridNavBar item container xs={2.5}>
        {children}
      </GridNavBar>
    </>
  );
}

const GridNavBar = styled(Grid)({
  height: '100%',
  borderRight: `1px solid rgba(255,255,255, .2)`,
});
