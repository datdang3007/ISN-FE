import { Grid, TextField, styled } from "@mui/material";
import { BASE_COLOR } from "../../../constants/color";

export const ChatBox = () => {
  return (
    <ChatBoxContainer item xs={12}>
      <ChatBoxField fullWidth multiline maxRows={10} />
    </ChatBoxContainer>
  );
};

const ChatBoxContainer = styled(Grid)({
  padding: "30px",
});

const ChatBoxField = styled(TextField)({
  div: {
    "&.Mui-focused": {
      fieldset: {
        "&.MuiOutlinedInput-notchedOutline": {
          borderColor: `${BASE_COLOR.primary} !important`,
        },
      },
    },
  },
});
