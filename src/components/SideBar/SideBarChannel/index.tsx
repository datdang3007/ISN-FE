import { Grid } from "@mui/material";
import { useMemo, useState } from "react";
import { HeaderChannel } from "./components/HeaderChannel";
import { MenuMeetingTaskManager } from "./components/MenuMeetingTaskManager";
import { ChannelGroups } from "./components/ChannelGroups";

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
      <MenuMeetingTaskManager />
      <ChannelGroups />
    </Grid>
  );
};
