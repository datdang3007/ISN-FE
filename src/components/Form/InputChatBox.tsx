import {
  TextField,
  TextFieldProps,
  InputLabelProps,
  Grid,
  styled,
  Button,
} from "@mui/material";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { FormHelpText } from "./FormHelpText";
import { BASE_COLOR } from "../../constants/color";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useRef } from "react";

export const InputChatBox = (
  props: InputLabelProps & TextFieldProps & UseControllerProps<FieldValues>
) => {
  const { name, control, rules, variant, ...rest } = props;
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });
  const error = Boolean(fieldState.error);

  const buttonSubmit = useRef<HTMLButtonElement>(null);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!event.shiftKey && event.key === "Enter") {
      event.preventDefault();
      buttonSubmit.current?.click();
    }
  };

  return (
    <Grid item container flexDirection={"column"}>
      <ChatBoxContainer item xs={12}>
        <TextField
          variant={variant}
          {...field}
          {...rest}
          error={error}
          fullWidth
          multiline
          maxRows={10}
          onKeyPress={handleKeyPress}
          placeholder="Tin nhắn..."
        />
        <ChatBoxTools item container alignItems={"center"} xs={12}>
          <Grid item xs={6}>
            <ButtonOption type="submit">
              <FormatBoldIcon />
            </ButtonOption>
            <ButtonOption type="submit">
              <FormatItalicIcon />
            </ButtonOption>
            <ButtonOption type="submit">
              <FormatUnderlinedIcon />
            </ButtonOption>
          </Grid>
          <Grid item container justifyContent={"flex-end"} xs={6}>
            <ButtonOption
              type="submit"
              sx={{ minWidth: "60px" }}
              ref={buttonSubmit}
            >
              <SendIcon />
            </ButtonOption>
          </Grid>
        </ChatBoxTools>
      </ChatBoxContainer>
      <FormHelpText fieldState={fieldState} />
    </Grid>
  );
};

const ChatBoxContainer = styled(Grid)(({ theme }) => ({
  borderRadius: 4,
  boxSizing: "border-box",
  border: `1px solid ${BASE_COLOR.cool_grey}`,
  overflow: "hidden",
  "&:focus-within": {
    border: `1px solid ${BASE_COLOR.primary}`,
  },
  div: {
    div: {
      border: "0px solid transparent !important",
      "&:hover": {
        border: "0px solid transparent !important",
      },
      fieldset: {
        border: "0px solid transparent !important",
      },
    },
  },
}));

const ChatBoxTools = styled(Grid)({
  height: "40px",
  background: BASE_COLOR.light_grey,
});

const ButtonOption = styled(Button)({
  minWidth: "40px",
  color: BASE_COLOR.dark_gray,
  "&:hover": {
    color: BASE_COLOR.primary,
  },
});
