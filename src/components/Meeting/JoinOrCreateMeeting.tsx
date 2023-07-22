import { Button, Grid, Tooltip, Typography, useTheme } from "@mui/material";
import { InputTextField } from "../Form";
import { ButtonGreen } from "../../ui";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
import { JoinOrCreateMeetingProps } from "../../types";

export const JoinOrCreateMeeting = ({
  meetingCode,
  handleChangeMeetingCode,
  handleClickButtonCreateMeeting,
}: JoinOrCreateMeetingProps) => {
  const theme = useTheme();

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="tB30">MEETING</Typography>
      </Grid>
      <Grid item xs={4} marginTop={"20px"}>
        <InputTextField
          name="meeting_code"
          placeholder="Nhập mã cuộc họp"
          onChange={handleChangeMeetingCode}
        />
      </Grid>
      <Grid item container columnGap={"10px"} xs={"auto"} marginTop={"12px"}>
        <Tooltip title={meetingCode === "" ? "Bạn cần nhập mã trước" : ""}>
          <span>
            <Button
              type="submit"
              startIcon={<NearMeIcon />}
              variant="contained"
              disabled={Boolean(meetingCode === "")}
            >
              <Typography variant="tR16" color={theme.palette.common.white}>
                Tham gia
              </Typography>
            </Button>
          </span>
        </Tooltip>
        <ButtonGreen
          startIcon={<AddCircleIcon />}
          variant="contained"
          onClick={handleClickButtonCreateMeeting}
        >
          <Typography variant="tR16" color={theme.palette.common.white}>
            Tạo cuộc họp
          </Typography>
        </ButtonGreen>
      </Grid>
    </>
  );
};
