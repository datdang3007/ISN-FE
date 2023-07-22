import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { useMemo } from "react";

const MeetingListExample = [
  {
    title: "Báo cáo doanh thu tháng 12",
    owner: "LongVM",
    timeStart: "14:00",
  },
  {
    title: "Triển Khai dự án ISN (Internet Social Media)",
    owner: "DatDT",
    timeStart: "20:10",
  },
];

export const ListMeetingForYou = () => {
  const listMeetingComponent = useMemo(() => {
    return MeetingListExample.map((val, index) => (
      <Grid item xs={2.5} key={index}>
        <Tooltip title={val.title}>
          <Button fullWidth sx={{ padding: "0" }}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <Grid item xs={12} textAlign={"left"}>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                  >
                    <Typography variant="tB16">{val.title}</Typography>
                  </Grid>
                  <Grid item xs={12} marginTop={"5px"}>
                    <Divider></Divider>
                  </Grid>
                  <Grid item xs={12} marginTop={"12px"}>
                    <Typography variant="tR14">
                      Người tổ chức: {val.owner}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} marginTop={"5px"}>
                    <Typography variant="tR14">
                      Bắt đầu lúc: {val.timeStart}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Button>
        </Tooltip>
      </Grid>
    ));
  }, []);

  return (
    <Grid item xs={12} marginTop={"20px"}>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Typography variant="tB20">Cuộc họp dành cho Bạn</Typography>
        </Grid>
        <Grid
          item
          container
          spacing={"10px"}
          rowGap={"10px"}
          xs={12}
          marginTop={"12px"}
        >
          {listMeetingComponent}
        </Grid>
      </Grid>
    </Grid>
  );
};
