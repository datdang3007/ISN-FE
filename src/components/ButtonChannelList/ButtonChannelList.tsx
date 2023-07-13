import { Button, Grid, Typography, styled } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { TEXT_COLOR } from "../../constants/color";
import { ButtonChannelListProps } from "../../types/SideBar";
import { useMemo } from "react";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const ButtonChannelList = ({ title, show, children }: ButtonChannelListProps) => {
  const classActive = useMemo(() => {
    return show ? "active" : "";
  }, [show]);

  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <ButtonShowGroupList
          className={classActive}
          startIcon={<ArrowRightIcon />}
        >
          <Typography variant="tR16">{title}</Typography>
        </ButtonShowGroupList>
      </Grid>
      {children}
    </Grid>
  );
};

const ButtonShowGroupList = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingLeft: "15px",
  textAlign: "left",
  "&:hover": {
    background: "rgba(255,255,255, .1)",
  },
  "&.active": {
    "& .MuiButton-startIcon": {
      transform: "rotate(90deg)",
    },
  },
  "&.alert": {
    span: {
      fontWeight: "bold",
      color: theme.palette.common.white,
    },
  },
  span: {
    color: TEXT_COLOR.DARK_GRAY,
    transition: "0.2s",
  },
  "& .MuiButton-startIcon": {
    transition: "0.2s",
  },
}));
