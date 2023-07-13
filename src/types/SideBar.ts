import { ReactNode } from "react";
import { ChannelProps } from ".";

export interface ItemSideBarGroupProps {
    id: string;
    image?: string;
    isActive?: string;
    ChangeChannelList: (value: string) => void;
}

export interface SideBarGroupProps {
    channelList: ChannelProps[],
    ChangeChannelList: (id: string) => void,
}

export interface HeaderChannelProps {
  menuGroupProfile: null | HTMLElement,
  menuGroupProfileOpen: boolean,
  handleClickMenuGroupChannel: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleCloseMenuGroupChannel: () => void
}

export interface ButtonChannelListProps {
  title: string,
  show?: boolean,
  children?: ReactNode,
}

export interface ItemChannelGroupProps {
  title: string,
  alert?: boolean,
  isPrivate?: boolean, 
}