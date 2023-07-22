import { Grid, styled } from "@mui/material";
import { useMemo, useState } from "react";
import { HeaderChannel } from "./components/HeaderChannel";
import { MenuMeetingTaskManager } from "./components/MenuMeetingTaskManager";
import { ChannelGroups } from "./components/ChannelGroups";
import { BASE_SIZE } from "../../../constants/size";

export const SideBarChannel = () => {
  const [menuGroupProfile, setMenuGroupProfile] = useState<null | HTMLElement>(
    null
  );
  const menuGroupProfileOpen = useMemo(() => {
    return Boolean(menuGroupProfile);
  }, [menuGroupProfile]);

  const handleClickMenuGroupChannel = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setMenuGroupProfile(event.currentTarget);
  };
  const handleCloseMenuGroupChannel = () => {
    setMenuGroupProfile(null);
  };

  return (
    <Grid item container height={"auto"} xs={12}>
      <HeaderChannel
        menuGroupProfile={menuGroupProfile}
        menuGroupProfileOpen={menuGroupProfileOpen}
        handleClickMenuGroupChannel={handleClickMenuGroupChannel}
        handleCloseMenuGroupChannel={handleCloseMenuGroupChannel}
      />
      <ScrollGrid item container xs={12}>
        <MenuMeetingTaskManager />
        <ChannelGroups />
      </ScrollGrid>
    </Grid>
  );
};

const ScrollGrid = styled(Grid)({
  maxHeight: `calc(100vh - ${BASE_SIZE.HEADER}px - ${BASE_SIZE.HEADER_CHANNEL}px)`,
  overflowX: "unset",
  overflowY: "auto",
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    background: "rgba(0,0,0, 0.15)",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(255,255,255, 0.4)",
  },
});
