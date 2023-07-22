import { Grid, styled } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { LayoutGroupChatResizeProps } from "../../types";
import { BASE_SIZE } from "../../constants/size";
import { scrollToEndElement } from "../../utils/common";
import { socket } from "../..";

export const LayoutGroupChatResize = (props: LayoutGroupChatResizeProps) => {
  const { Header, children, ChatBox } = props;

  const divHeaderRef = useRef<HTMLDivElement>(null);
  const divChatBoxRef = useRef<HTMLDivElement>(null);

  const containerContent = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

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
    const parentElement = containerContent.current;
    const childrenElement = content.current;

    // RESIZE EVENT:
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

    // SCROLL EVENT:
    function handleScroll() {
      if (parentElement && childrenElement) {
        const isBottom =
          parentElement.scrollTop + parentElement.clientHeight >=
          childrenElement.clientHeight - 60;
        console.log(isBottom);
        setIsAtBottom(isBottom);
      }
    }
    if (parentElement) {
      parentElement.addEventListener("scroll", handleScroll);
    }

    const handleUserChatScroll = (id: string) => {
      if (socket.id === id) {
        setTimeout(() => {
          scrollToEndElement(content.current);
        }, 300);
        return;
      }
      if (isAtBottom) {
        setTimeout(() => {
          scrollToEndElement(content.current);
        }, 300);
      }
    };
    socket.on("user-chat", handleUserChatScroll);

    window.addEventListener("load", () =>
      setTimeout(() => {
        scrollToEndElement(content.current);
      }, 300)
    );

    return () => {
      // RESIZE:
      window.removeEventListener("resize", handleHeaderHeight);
      window.removeEventListener("resize", handleChatBoxHeight);
      if (divChatBoxRef.current) {
        resizeObserver.unobserve(divChatBoxRef.current);
      }
      resizeObserver.disconnect();

      // SCROLL:
      socket.off("user-chat", handleUserChatScroll);
      window.removeEventListener("load", () =>
        setTimeout(() => {
          scrollToEndElement(content.current);
        }, 300)
      );
      if (parentElement) {
        parentElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleChatBoxHeight, handleHeaderHeight, isAtBottom]);

  return (
    <>
      <div ref={divHeaderRef}>{Header}</div>
      <ContentContainer
        container
        alignItems={"flex-end"}
        sx={{
          height: `calc(100vh - ${headerHeight}px - ${chatBoxHeight}px - ${BASE_SIZE.HEADER}px)`,
        }}
        ref={containerContent}
      >
        <div ref={content}>{children}</div>
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
