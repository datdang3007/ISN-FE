import { Grid } from "@mui/material";
import { ReactNode } from "react";

interface NavbarChannelProps {
  children?: ReactNode;
}

export default function NavbarChannel({ children }: NavbarChannelProps) {
  return (
    <>
      <Grid item container xs>
        {children}
      </Grid>
    </>
  );
}
