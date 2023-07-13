import { Grid } from "@mui/material";
import { LayoutGroupChatResizeProps } from "../../../types";
import { useCallback, useEffect, useRef, useState } from "react";

export const LayoutGroupChatResize = (props: LayoutGroupChatResizeProps) => {
  const { Header, children, ChatBox } = props;

  const divHeaderRef = useRef<HTMLDivElement>(null);
  const divChatBoxRef = useRef<HTMLDivElement>(null);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [chatBoxHeight, setChatBoxHeight] = useState(0);

  const handleHeaderHeight = useCallback(() => {
    if (divHeaderRef.current) {
      const divHeaderHeight = divHeaderRef.current.clientHeight;
      setHeaderHeight(divHeaderHeight);
    }
  }, []);

  const handleChatBoxHeight = useCallback(() => {
    if (divChatBoxRef.current) {
      const divChatBoxHeight = divChatBoxRef.current.clientHeight;
      setChatBoxHeight(divChatBoxHeight);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      handleHeaderHeight();
      handleChatBoxHeight();
    };
    const resizeObserver = new ResizeObserver(handleResize);
    setTimeout(() => {
      handleResize();
      if (divChatBoxRef.current) {
        resizeObserver.observe(divChatBoxRef.current);
      }
    }, 200);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleHeaderHeight);
      window.removeEventListener("resize", handleChatBoxHeight);
      if (divChatBoxRef.current) {
        resizeObserver.unobserve(divChatBoxRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [handleChatBoxHeight, handleHeaderHeight]);

  console.log("headerHeight: ", headerHeight);
  console.log("chatBoxHeight: ", chatBoxHeight);

  return (
    <>
      <div ref={divHeaderRef}>{Header}</div>
      <Grid
        container
        alignItems={"flex-end"}
        sx={{
          height: `calc(100% - ${headerHeight}px - ${chatBoxHeight}px)`,
        }}
      >
        {children}
      </Grid>
      <div ref={divChatBoxRef}>{ChatBox}</div>
    </>
  );
};
