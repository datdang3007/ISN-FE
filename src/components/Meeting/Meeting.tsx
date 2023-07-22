import { Divider, Grid } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { JoinOrCreateMeeting } from "./JoinOrCreateMeeting";
import { ListMeetingForYou } from "./ListMeetingForYou";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../routes/path";
import Swal from "sweetalert2";

export interface MeetingProps {
  meeting_code: string;
}

export const Meeting = () => {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const methods = useForm<MeetingProps>({
    defaultValues: {
      meeting_code: "",
    },
  });

  const handleChangeMeetingCode = useCallback(
    (event: any) => {
      const value = event.target.value;
      setMeetingCode(value);
      methods.setValue("meeting_code", value);
    },
    [methods]
  );

  const handleClickButtonCreateMeeting = useCallback(() => {
    fetch("http://localhost:4000/create-meeting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const responseMeetingCode = data.meetingCode;
        navigate({
          pathname: PATH.MEETING_ROOM,
          search: `?meeting_code=${responseMeetingCode}`,
        });
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API create-meeting:", error);
      });
  }, [navigate]);

  const onSubmit = methods.handleSubmit(
    useCallback(
      (values) => {
        const methodsValueMeetingCode = values.meeting_code;
        fetch("http://localhost:4000/join-meeting-room", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            meetingCode: methodsValueMeetingCode,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            const isMeetingRoomExist = data.isExist;
            if (isMeetingRoomExist) {
              navigate({
                pathname: PATH.MEETING_ROOM,
                search: `?meeting_code=${methodsValueMeetingCode}`,
              });
              return;
            }
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Mã phòng họp không tồn tại!",
            });
          })
          .catch((error) => {
            console.error("Lỗi khi gọi API create-meeting:", error);
          });
      },
      [navigate]
    )
  );

  return (
    <Grid container padding={"40px"}>
      <Grid item xs={12}>
        <FormProvider {...methods}>
          <Grid component={"form"} onSubmit={onSubmit}>
            <JoinOrCreateMeeting
              meetingCode={meetingCode}
              handleChangeMeetingCode={handleChangeMeetingCode}
              handleClickButtonCreateMeeting={handleClickButtonCreateMeeting}
            />
          </Grid>
        </FormProvider>
        <Grid item xs={12} marginTop={"30px"}>
          <Divider />
        </Grid>
        <ListMeetingForYou />
      </Grid>
    </Grid>
  );
};
