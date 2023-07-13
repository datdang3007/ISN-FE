import { Avatar, Badge, Grid, TextField, styled } from "@mui/material";
import { BASE_COLOR } from "../../constants/color";
import { BASE_SIZE } from "../../constants/size";

export default function Header() {
  return (
    <HeaderContainer container>
      <Grid item container xs={11} sm={8}>
        <Grid item xs={3}></Grid>
        <Grid item container alignItems={'center'} xs>
          <CustomTextField
            fullWidth
            placeholder="Tìm kiếm"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          container
          textAlign={"center"}
          justifyContent={"flex-end"}
          xs={3}
        >
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
        </Grid>
      </Grid>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(Grid)({
  height: BASE_SIZE.HEADER,
  alignItems: "center",
  justifyContent: "center",
  background: BASE_COLOR.main,
  borderBottom: `1px solid rgba(255,255,255, .2)`,
});

const CustomTextField = styled(TextField)(({ theme }) => ({
  height: "90%",
  div: {
    height: "100%",
    background: "rgba(255,255,255, .2)",
  },
  input: {
    color: "#FFF",
    padding: `0 ${theme.spacing(15)}`,
    fontSize: theme.spacing(16),
    fontFamily: "Noto Sans",
    fontWeight: 400,
    height: "100%",
  },
  textFiled: {
    height: "100%",
  },
}));

const AvatarFrame = styled(Badge)(({ theme }) => ({
  width: "30px",
  height: "30px",
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
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  border: `1px solid ${BASE_COLOR.primary}`
});
