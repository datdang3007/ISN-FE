import { ReactNode } from "react";

export interface ChannelProps {
  id: string;
  active: boolean;
  name: string;
  image: string;
}

export interface LayoutGroupChatResizeProps {
  Header: ReactNode,
  children: ReactNode,
  ChatBox: ReactNode,
}