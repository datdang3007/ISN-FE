import { Grid, styled } from "@mui/material";
import { SideBarGroupProps } from "../../../types/SideBar";
import ItemGroup from "./components/ItemGroup";

export const SideBarGroup = ({
  channelList,
  ChangeChannelList,
}: SideBarGroupProps) => {
  return (
    <Group item container xs={12}>
      <Grid item xs={12}>
        {channelList?.map((item: any) => {
          return (
            <ItemGroup
              id={item.id}
              image={item.image}
              isActive={item.active}
              ChangeChannelList={ChangeChannelList}
            />
          );
        })}
      </Grid>
    </Group>
  );
};

const Group = styled(Grid)({
  height: "100%",
  borderRight: `1px solid rgba(255,255,255, .2)`,
});
