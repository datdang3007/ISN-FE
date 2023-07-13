import { Button, Grid, Typography, styled } from "@mui/material";
import { BASE_COLOR, TEXT_COLOR } from "../../../../constants/color";
import GroupsIcon from "@mui/icons-material/Groups";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

export const MenuMeetingTaskManager = () => {
  return (
    <GridMenu container justifyContent={"center"} rowGap={10}>
      <Grid item xs={12}>
        <ButtonOption startIcon={<GroupsIcon />} className="active" fullWidth>
          <Typography variant="tR14">Cuộc họp</Typography>
        </ButtonOption>
      </Grid>
      <Grid item xs={12}>
        <ButtonOption startIcon={<PlaylistAddCheckIcon />} fullWidth>
          <Typography variant="tR14">Quản lý tiến độ</Typography>
        </ButtonOption>
      </Grid>
    </GridMenu>
  );
};

const GridMenu = styled(Grid)({
  width: "100%",
  borderBottom: "1px solid rgba(255,255,255, .2)",
  padding: `10px 15px`,
});

const ButtonOption = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingLeft: '15px',
  textAlign: 'left',
  "&:hover": {
    background: "rgba(255,255,255, .1)",
  },
  "&.active": {
    background: BASE_COLOR.primary,
    span: {
      color: theme.palette.common.white,
    },
  },
  span: {
    color: TEXT_COLOR.DARK_GRAY,
  },
}));
