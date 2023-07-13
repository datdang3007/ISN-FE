import { Avatar, Box, Grid, Typography, styled, useTheme } from "@mui/material";
import { BASE_COLOR } from "../../../constants/color";
import PublicIcon from "@mui/icons-material/Public";
import { StackAvatar } from "../../StackAvatar";
import { useCallback } from "react";

// const users = [
//   {
//     key: "1",
//     email: "example@gmail.com",
//     name: "Test 01",
//     href: "https://www.google.com/",
//     image: "",
//   },
// ];

export const HeaderGroupChat = () => {
  const theme = useTheme();
  // const publicIcon = useMemo(() => {
  //   return isPrivate ? <VpnLockIcon /> : <PublicIcon />;
  // }, [isPrivate]);

  // const userList = users.map((user, index) => ({
  //   key: user.email,
  //   email: user.email,
  //   name: user.name,
  //   href: user.href,
  //   src: user.image,
  // }));

  const GroupChatLayout = useCallback(() => {
    return (
      <>
        <Grid item xs={6}>
          <ChannelName>
            <PublicIcon />
            <Typography
              marginLeft={"5px"}
              variant="tB20"
              color={theme.palette.common.black}
            >
              ISN
            </Typography>
          </ChannelName>
        </Grid>
        <Grid item container justifyContent={"flex-end"} xs={6}>
          <StackAvatar />
        </Grid>
      </>
    );
  }, [theme.palette.common.black]);

  const UserChatLayout = useCallback(() => {
    return (
      <>
        <Grid item xs={12}>
          <ChannelName>
            <Box width={30} height={30}>
              <CustomAvatar
                src="https://avatars0.githubusercontent.com/u/33479836?v=4"
                alt="profile"
              ></CustomAvatar>
            </Box>
            <Typography
              marginLeft={"5px"}
              variant="tB20"
              color={theme.palette.common.black}
            >
              LongVM
            </Typography>
          </ChannelName>
        </Grid>
      </>
    );
  }, [theme.palette.common.black]);

  return (
    <HeaderBar item container alignItems={"center"} xs={12}>
      {/* {GroupChatLayout()} */}
      {UserChatLayout()}
    </HeaderBar>
  );
};

const HeaderBar = styled(Grid)({
  //   background: "red",
  height: "66px",
  maxHeight: "66px",
  padding: "10px 20px",
  borderBottom: `2px solid ${BASE_COLOR.light_grey}`,
});

const ChannelName = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const CustomAvatar = styled(Avatar)({
  cursor: "pointer",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  border: `1px solid ${BASE_COLOR.primary}`,
});
