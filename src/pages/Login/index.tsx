import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  styled,
} from "@mui/material";
import { useTheme } from "@mui/system";
import { useCallback, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { rules } from "../../components/Form/validation";
import LogoImg from "../../assets/Logo_Light_Basic.png";
import InputTextField from "../../components/Form/InputTextField";

export interface LoginProps {
  user_email: string;
  user_password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { validateEmail, validatePassword } = rules;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = useCallback(
    (values: any) => {
      const { user_email, user_password } = values;
      console.log("login", user_email, user_password);
      navigate("/");
    },
    [navigate]
  );

  const changeDirectionToRegisterPage = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const methods = useForm<LoginProps>({
    defaultValues: {
      user_email: "",
      user_password: "",
    },
  });

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
                <Typography variant="tB30">Đăng Nhập</Typography>
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

              <Grid item xs={12} textAlign={"center"} marginTop={"50px"}>
                <LoginButton type="submit" variant="contained" fullWidth>
                  <Typography variant="tR14" color={theme.palette.common.white}>
                    Đăng Nhập
                  </Typography>
                </LoginButton>
              </Grid>
              <Grid
                item
                container
                xs={12}
                alignItems={"center"}
                justifyContent={"center"}
                marginTop={"115px"}
              >
                <Typography variant="tR12">Bạn chưa có tài khoản?</Typography>
                <Button onClick={changeDirectionToRegisterPage}>
                  <Typography variant="tB14" color={theme.palette.primary.main}>
                    Đăng Ký
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

const LoginButton = styled(Button)(({ theme }) => ({
  color: "#FFF",
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
