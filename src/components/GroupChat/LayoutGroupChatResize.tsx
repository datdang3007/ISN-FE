import { Grid, styled } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { LayoutGroupChatResizeProps } from "../../types";
import { BASE_SIZE } from "../../constants/size";

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

  return (
    <>
      <div ref={divHeaderRef}>{Header}</div>
      <ContentContainer
        container
        alignItems={"flex-end"}
        sx={{
          height: `calc(100vh - ${headerHeight}px - ${chatBoxHeight}px - ${BASE_SIZE.HEADER}px)`,
        }}
      >
        {children}
      </ContentContainer>
      <div ref={divChatBoxRef}>{ChatBox}</div>
    </>
  );
};

const ContentContainer = styled(Grid)({
  overflowX: "unset",
  overflowY: "auto",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
});
