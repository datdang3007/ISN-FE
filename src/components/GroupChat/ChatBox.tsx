import { Grid } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { useCallback } from "react";
import { socket } from "../..";
import { InputChatBox } from "../Form";

interface ChatBoxProps {
  name: "";
  message: "";
}

export const ChatBox = () => {
  const name = prompt("Hãy nhập tên của Bạn:");
  const methods = useForm<ChatBoxProps>({
    defaultValues: { name: "", message: "" },
  });

  const onSubmit = methods.handleSubmit(
    useCallback(
      (values) => {
        if (values.message !== "") {
          socket.emit("on-chat", { name: name, message: values.message });
          methods.setValue("message", "");
        }
      },
      [methods, name]
    )
  );

  return (
    <FormProvider {...methods}>
      <Grid
        item
        xs={12}
        component={"form"}
        padding={"0 30px 30px"}
        onSubmit={onSubmit}
      >
        <InputChatBox name="message" />
      </Grid>
    </FormProvider>
  );
};
