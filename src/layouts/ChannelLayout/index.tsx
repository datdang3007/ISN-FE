import { useCallback, useState } from "react";
import { SideBarGroup } from "../../components/SideBar";
import { ChannelProps } from "../../types";
import { Grid, styled } from "@mui/material";
import { BASE_COLOR } from "../../constants/color";
import { Outlet } from "react-router-dom";
import { BASE_SIZE } from "../../constants/size";

let ChannelListTest = [
  {
    id: "1",
    active: true,
    name: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVqneS32MI4-7ujeGVP7ZNa4XFn_V8QgymdQ&usqp=CAU",
  },
  {
    id: "2",
    active: false,
    name: "",
    image:
      "https://dynamic.brandcrowd.com/asset/logo/b11ac827-a79e-41b2-94ff-968636dcd840/logo-search-grid-1x?logoTemplateVersion=1&v=637949125702170000",
  },
] as ChannelProps[];

export const ChannelLayout = () => {
  const [channelList, setChannelList] = useState(ChannelListTest);
  const ChangeChannelList = useCallback(
    (id: string) => {
      const channelExisted = channelList.filter((value) => value.id === id);
      if (!id || !channelExisted) {
        return;
      }
      const newChannelList = channelList.map((value) => {
        value.id === id ? (value.active = true) : (value.active = false);
        return value;
      });
      setChannelList(newChannelList);
    },
    [channelList]
  );

  return (
    <BodyContainer container>
      <GridNavbar item container xs={0.5}>
        <SideBarGroup
          channelList={channelList}
          ChangeChannelList={ChangeChannelList}
        />
      </GridNavbar>
      <Grid item xs>
        <Outlet />
      </Grid>
    </BodyContainer>
  );
};

const BodyContainer = styled(Grid)({
  boxSizing: 'border-box',
  height: `calc(100vh - ${BASE_SIZE.HEADER}px)`,
  background: "black",
});

const GridNavbar = styled(Grid)({
  background: BASE_COLOR.second,
});
