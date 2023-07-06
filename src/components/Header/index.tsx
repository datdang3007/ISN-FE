import { Grid, TextField, styled } from "@mui/material";
import { BASE_COLOR } from "../../constants/color";
import { BASE_SIZE } from "../../constants/size";

export default function Header() {
  return (
    <HeaderContainer container sx={{}}>
      <Grid item container xs={11} sm={4}>
        <Grid item xs>
          <CustomTextField
            fullWidth
            placeholder="Tìm kiếm"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </HeaderContainer>
  );
}

const HeaderContainer = styled(Grid)({
  position: "fixed",
  height: BASE_SIZE.HEADER,
  alignItems: "center",
  justifyContent: "center",
  background: BASE_COLOR.main,
  borderBottom: `1px solid rgba(255,255,255, .2)`,
});

const CustomTextField = styled(TextField)(({ theme }) => ({
  height: theme.spacing(35),
  div: {
    height: theme.spacing(35),
    background: "rgba(255,255,255, .2)",
  },
  input: {
    color: "#FFF",
    padding: `0 ${theme.spacing(20)}`,
    fontSize: theme.spacing(16),
    fontFamily: "Noto Sans",
    fontWeight: 400,
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
}));
