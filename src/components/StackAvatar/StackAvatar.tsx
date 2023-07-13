import { Avatar, AvatarGroup, Stack, styled } from "@mui/material";
import { BASE_COLOR } from "../../constants/color";

export const StackAvatar = () => {
  return (
    <Stack>
      <Stack direction="row">
        <AvatarGroup max={4}>
          <CustomAvatar
            src="https://avatars0.githubusercontent.com/u/33479836?v=4"
            alt="profile"
          ></CustomAvatar>
          <CustomAvatar
            src="https://avatars0.githubusercontent.com/u/33479836?v=4"
            alt="profile"
          ></CustomAvatar>
          <CustomAvatar
            src="https://avatars0.githubusercontent.com/u/33479836?v=4"
            alt="profile"
          ></CustomAvatar>
          <CustomAvatar
            src="https://avatars0.githubusercontent.com/u/33479836?v=4"
            alt="profile"
          ></CustomAvatar>
          <CustomAvatar
            src="https://avatars0.githubusercontent.com/u/33479836?v=4"
            alt="profile"
          ></CustomAvatar>
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

const CustomAvatar = styled(Avatar)({
  cursor: "pointer",
  boxSizing: "border-box",
  background: BASE_COLOR.dark_gray,
});