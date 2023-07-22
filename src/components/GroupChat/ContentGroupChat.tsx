import { Box, Grid, Typography, styled, useTheme } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { socket } from "../..";
import { BASE_COLOR } from "../../constants/color";
import { Toast } from "../../utils/alert";

interface ContentProps {
  name: string;
  message: string;
}

export const ContentGroupChat = () => {
  const theme = useTheme();
  const [chatContent, setChatContent] = useState<ContentProps[]>([
    {
      name: "DatDT",
      message: "Tôi là Đạt",
    },
    {
      name: "LongVM",
      message: "Tôi là Long",
    },
    {
      name: "HungND",
      message: "Tôi là Hùng",
    },
    {
      name: "DatDT",
      message: "Tôi là Đạt",
    },
    {
      name: "LongVM",
      message: "Tôi là Long",
    },
    {
      name: "HungND",
      message: "Tôi là Hùng",
    },
    {
      name: "DatDT",
      message: "Tôi là Đạt",
    },
    {
      name: "LongVM",
      message: "Tôi là Long",
    },
    {
      name: "HungND",
      message: "Tôi là Hùng",
    },
    {
      name: "DatDT",
      message: "Tôi là Đạt",
    },
    {
      name: "LongVM",
      message: "Tôi là Long",
    },
    {
      name: "HungND",
      message: "Tôi là Hùng",
    },
    {
      name: "DatDT",
      message: "Tôi là Đạt",
    },
    {
      name: "LongVM",
      message: "Tôi là Long",
    },
    {
      name: "HungND",
      message: "Tôi là Hùng",
    },
    {
      name: "DatDT",
      message: "Tôi là Đạt",
    },
    {
      name: "LongVM",
      message: "Tôi là Long",
    },
    {
      name: "HungND",
      message: "Tôi là Hùng",
    },
    {
      name: "DatDT",
      message: "Tôi là Đạt",
    },
    {
      name: "LongVM",
      message: "Tôi là Long",
    },
    {
      name: "HungND",
      message: "Tôi là Hùng",
    },
    {
      name: "DatDT",
      message: "Tôi là Đạt",
    },
    {
      name: "LongVM",
      message: "Tôi là Long",
    },
    {
      name: "HungND",
      message: "Tôi là Hùng",
    },
    {
      name: "DatDT",
      message: "Tôi là Đạt",
    },
    {
      name: "LongVM",
      message: "Tôi là Long",
    },
    {
      name: "HungND",
      message: "Tôi là Hùng",
    },
    {
      name: "DatDT",
      message: "Tôi là Đạt",
    },
    {
      name: "LongVM",
      message: "Tôi là Long",
    },
    {
      name: "HungND",
      message: "Tôi là Hùng",
    },
    {
      name: "DatDT",
      message: "Tôi là Đạt",
    },
    {
      name: "LongVM",
      message: "Tôi là Long",
    },
    {
      name: "HungND",
      message: "Tôi là Hùng",
    },
  ]);

  useEffect(() => {
    const handleUserChat = (id: string, username: string, message: string) => {
      setChatContent((prevChatContent) => [
        ...prevChatContent,
        { name: username ?? id, message: message },
      ]);
      if (socket.id !== id) Toast.fire(username ?? id, message, "info");
    };

    socket.on("user-chat", handleUserChat);

    return () => {
      socket.off("user-chat", handleUserChat);
    };
  }, []);

  const renderContent = useCallback(() => {
    return chatContent.map((val, index) => (
      <Grid item container xs={12} key={index}>
        <Grid item xs={"auto"}>
          <BoxImage>
            <img
              src="https://avatars0.githubusercontent.com/u/33479836?v=4"
              alt="profile"
            />
          </BoxImage>
        </Grid>
        <Grid item xs>
          <Grid item xs={12} marginBottom={"7px"}>
            <Typography
              variant="tB16"
              color={theme.palette.common.black}
              marginRight={"5px"}
            >
              {val.name}
            </Typography>
            <Typography variant="tR12" color={BASE_COLOR.cool_grey}>
              20:10 PM
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="tR16">{val.message}</Typography>
          </Grid>
        </Grid>
      </Grid>
    ));
  }, [chatContent, theme.palette.common.black]);

  return (
    <ChatContainer container>
      <Grid item container alignItems={"flex-end"}>
        <Grid item container rowGap={20} xs={12}>
          {renderContent()}
        </Grid>
      </Grid>
    </ChatContainer>
  );
};

const BoxImage = styled(Box)({
  width: "45px",
  height: "45px",
  borderRadius: 8,
  overflow: "hidden",
  marginRight: "5px",
  background: BASE_COLOR.light_grey,
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const ChatContainer = styled(Grid)({
  padding: "10px 30px 20px",
});
