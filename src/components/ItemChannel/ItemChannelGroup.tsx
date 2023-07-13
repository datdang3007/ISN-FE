import { Button, Grid, Typography, styled } from "@mui/material";
import { BASE_COLOR, TEXT_COLOR } from "../../constants/color";
import { ItemChannelGroupProps } from "../../types/SideBar";
import { useMemo } from "react";
import PublicIcon from "@mui/icons-material/Public";
import VpnLockIcon from "@mui/icons-material/VpnLock";

export const ItemChannelGroup = ({
  title,
  alert,
  isPrivate,
}: ItemChannelGroupProps) => {
  const classAlert = useMemo(() => {
    return alert ? "alert" : "";
  }, [alert]);

  const publicIcon = useMemo(() => {
    return isPrivate ? <VpnLockIcon /> : <PublicIcon />;
  }, [isPrivate]);

  return (
    <Grid item xs={12}>
      <ButtonOption startIcon={publicIcon} fullWidth className={classAlert}>
        <Typography variant="tR15">{title}</Typography>
      </ButtonOption>
    </Grid>
  );
};

const ButtonOption = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingLeft: "15px",
  textAlign: "left",
  "&:hover": {
    background: "rgba(255,255,255, .1)",
  },
  "&.active": {
    background: BASE_COLOR.primary,
    span: {
      color: theme.palette.common.white,
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
  },
}));

