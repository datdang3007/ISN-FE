import { Avatar, Badge, Button, Grid, Typography, styled } from "@mui/material";
import { BASE_COLOR, TEXT_COLOR } from "../../constants/color";
import { ItemChannelGroupProps } from "../../types/SideBar";
import { useMemo } from "react";

export const ItemChannelMessage = ({ title, alert }: ItemChannelGroupProps) => {
  const classAlert = useMemo(() => {
    return alert ? "alert" : "";
  }, [alert]);

  return (
    <Grid item xs={12}>
      <ButtonOption fullWidth className={classAlert}>
        <AvatarFrame
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <CustomAvatar
            src="https://avatars0.githubusercontent.com/u/33479836?v=4"
            alt="profile"
          ></CustomAvatar>
        </AvatarFrame>
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

const AvatarFrame = styled(Badge)(({ theme }) => ({
  width: "30px",
  height: "30px",
  marginRight: "7.5px",
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: "1px solid currentColor",
      content: '""',
    },
  },
}));

const CustomAvatar = styled(Avatar)({
  cursor: "pointer",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  border: `1px solid ${BASE_COLOR.primary}`,
});