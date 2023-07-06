import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import LogoImg from "../../../assets/Logo_Light_Basic.png";
import { ArrowRight, Visibility, VisibilityOff } from "@mui/icons-material";
import { FormProvider, useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { rules } from "../../../components/Form/validation";
import InputTextField from "../../../components/Form/InputTextField";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface UserProps {
  user_email: string;
  user_password: string;
  user_password_confirm: string;
}

interface InputPasswordProps {
  userEmail: string;
  handlePassword: (password: string) => void;
}

export default function InputPassword({
  userEmail,
  handlePassword,
}: InputPasswordProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { validateEmail, validatePassword } = rules;

  const methods = useForm<UserProps>({
    defaultValues: {
      user_email: userEmail,
      user_password: "",
      user_password_confirm: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleClickShowPassword = useCallback(
    () => setShowPassword((show) => !show),
    []
  );
  const handleClickShowPasswordConfirm = useCallback(
    () => setShowPasswordConfirm((show) => !show),
    []
  );

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseDownPasswordConfirm = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = useCallback(
    (values: any) => {
      const { user_email, user_password, user_password_confirm } = values;
      if (user_password !== user_password_confirm) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Mật khẩu xác minh không khớp",
        });
        return;
      }
      handlePassword(user_password);
      console.log("register success", user_email, user_password);
    },
    [handlePassword]
  );

  const changeDirectionToLoginPage = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <FormProvider {...methods}>
      <Container
        maxWidth="xs"
        component={"form"}
        onSubmit={methods.handleSubmit(handleSubmit)}
      >
        <Body>
          <CardForm>
            <Grid container>
              <Grid item xs={12} textAlign={"center"} marginTop={"20px"}>
                <Typography variant="tB30">Đăng Ký</Typography>
              </Grid>
              <Grid
                item
                container
                justifyContent={"center"}
                xs={12}
                marginTop={"26px"}
              >
                <Grid item xs={4}>
                  <BoxLogo>
                    <img src={LogoImg} alt="" />
                  </BoxLogo>
                </Grid>
              </Grid>
              <Grid item xs={12} textAlign={"center"} marginTop={"48px"}>
                <InputTextField
                  name={"user_email"}
                  label="Email"
                  type="email"
                  variant="standard"
                  fullWidth
                  value={userEmail}
                  disabled
                  InputProps={{
                    sx: {
                      padding: "4px 8px",
                    },
                  }}
                  rules={{
                    required: {
                      value: true,
                      message: "Email không được để trống",
                    },
                    validate: { validateEmail },
                  }}
                />
              </Grid>
              <Grid item xs={12} textAlign={"center"} marginTop={"38px"}>
                <InputTextField
                  name={"user_password"}
                  label="Mật khẩu"
                  variant="standard"
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    sx: {
                      padding: "4px 8px",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  rules={{
                    required: {
                      value: true,
                      message: "Mật khẩu không được để trống",
                    },
                    validate: { validatePassword },
                  }}
                />
              </Grid>
              <Grid item xs={12} textAlign={"center"} marginTop={"38px"}>
                <InputTextField
                  name={"user_password_confirm"}
                  label="Nhập lại mật khẩu"
                  variant="standard"
                  fullWidth
                  type={showPasswordConfirm ? "text" : "password"}
                  InputProps={{
                    sx: {
                      padding: "4px 8px",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPasswordConfirm}
                          onMouseDown={handleMouseDownPasswordConfirm}
                          edge="end"
                        >
                          {showPasswordConfirm ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  rules={{
                    required: {
                      value: true,
                      message: "Mật khẩu xác nhận không được để trống",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} textAlign={"center"} marginTop={"50px"}>
                <ContinueButton type="submit" variant="contained" fullWidth>
                  <Typography variant="tR14" color={theme.palette.common.white}>
                    Tiếp tục
                  </Typography>
                  <ArrowRight />
                </ContinueButton>
              </Grid>
              <Grid
                item
                container
                xs={12}
                alignItems={"center"}
                justifyContent={"center"}
                marginTop={"115px"}
              >
                <Typography variant="tR12">Bạn đã có tài khoản?</Typography>
                <Button onClick={changeDirectionToLoginPage}>
                  <Typography variant="tB14" color={theme.palette.primary.main}>
                    Đăng Nhập
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </CardForm>
        </Body>
      </Container>
    </FormProvider>
  );
}

const Body = styled(Box)({
  display: "flex",
  width: "100%",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
});

const CardForm = styled(Card)({
  background: "#FFF",
  boxShadow: `0 5px 10px 0 rgba(0,0,0,.1)`,
  padding: "55px",
});

const BoxLogo = styled(Box)({
  borderRadius: 8,
  overflow: "hidden",
  img: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const ContinueButton = styled(Button)(({ theme }) => ({
  position: "relative",
  height: "50px",
  borderRadius: "40px",
  background: theme.palette.primary.main,
  overflow: "hidden",
  "&:hover": {
    background: theme.palette.primary.light,
    "&::before": {
      left: "120%",
      transform: "translateY(-50%)",
    },
  },
  "&::before": {
    content: `""`,
    position: "absolute",
    left: "-20%",
    top: "50%",
    width: "5px",
    height: "200%",
    background: "rgba(255,2255,255, .75)",
    boxShadow: "0 0 10px 10px rgba(255,255,255, .5)",
    transform: "translateY(-50%) rotate(-20deg)",
    transition: "0.6s",
  },
}));
