import {
  Button,
  Grid,
  Menu,
  MenuItem,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import { BASE_COLOR } from "../../../../constants/color";
import { HeaderChannelProps } from "../../../../types/SideBar";

export const HeaderChannel = ({menuGroupProfile, menuGroupProfileOpen, handleClickMenuGroupChannel, handleCloseMenuGroupChannel}: HeaderChannelProps) => {
  const theme = useTheme();
  return (
    <HeaderSideBarChannel>
      <Grid item container alignItems={"center"} xs={12}>
        <Grid item xs={6}>
          <ButtonGroupProfile
            aria-controls={"menu-group-profile"}
            aria-haspopup="true"
            aria-expanded={"true"}
            onClick={handleClickMenuGroupChannel}
          >
            <Typography variant="tB20" color={theme.palette.common.white}>
              ISN
            </Typography>
            <ArrowDown />
          </ButtonGroupProfile>
          <CustomMenuGroupProfile
            id="menu-group-profile"
            open={menuGroupProfileOpen}
            anchorEl={menuGroupProfile}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <CustomMenuItemGroupProfile onClick={handleCloseMenuGroupChannel}>
              News
            </CustomMenuItemGroupProfile>
            <CustomMenuItemGroupProfile onClick={handleCloseMenuGroupChannel}>
              Edit Profile
            </CustomMenuItemGroupProfile>
          </CustomMenuGroupProfile>
        </Grid>
        <Grid item container justifyContent={"flex-end"} xs={6}>
          <ButtonRegisterChannel>
            <AddIcon />
          </ButtonRegisterChannel>
        </Grid>
      </Grid>
    </HeaderSideBarChannel>
  );
};

const HeaderSideBarChannel = styled(Grid)({
  width: "100%",
  overflowX: "hidden",
  overflowY: "scroll",
  padding: `5px 15px`,
  borderBottom: "1px solid rgba(255,255,255, .2)",
});

const ButtonGroupProfile = styled(Button)({
  "&:hover": {
    background: "rgba(255,255,255, .1)",
  },
});

const ArrowDown = styled(KeyboardArrowDownIcon)({
  color: "#FFF",
});

const CustomMenuGroupProfile = styled(Menu)({
  "& .MuiPaper-root": {
    width: "300px",
  },
});

const ButtonRegisterChannel = styled(Button)({
  minWidth: "0",
  height: "40px",
  borderRadius: "50%",
  background: "rgba(255,255,255, .1)",
  color: "#FFF",
  "&:hover": {
    color: BASE_COLOR.primary,
  },
});

const CustomMenuItemGroupProfile = styled(MenuItem)({
  width: "100%",
});
