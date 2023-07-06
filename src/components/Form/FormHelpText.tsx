import { Typography } from "@mui/material";
import { ControllerFieldState } from "react-hook-form";

interface Props {
  fieldState: ControllerFieldState;
}

export const FormHelpText = ({ fieldState }: Props) => {
  return (
    <>
      {fieldState.error ? (
        <Typography marginTop={'5px'} color={"error"} sx={{ textAlign: "left" }} variant="tB14">
          {`${fieldState.error.message ?? fieldState.error?.root?.message}`}
        </Typography>
      ) : null}
    </>
  );
};
