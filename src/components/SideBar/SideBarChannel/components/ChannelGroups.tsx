import { Grid, styled } from "@mui/material";
import { ButtonChannelList } from "../../../ButtonChannelList";
import { ItemChannelGroup, ItemChannelMessage } from "../../../ItemChannel";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const ChannelGroups = () => {
  return (
    <GroupContainer item container xs={12} rowGap={10}>
      <ButtonChannelList title={"Kênh Chat"} show={true}>
        <Grid item container xs={12} rowGap={5} marginTop={10}>
          <ItemChannelGroup title={"chat chung"} alert />
          <ItemChannelGroup title={"ý tưởng"} isPrivate />
        </Grid>
      </ButtonChannelList>
      <ButtonChannelList title={"Tin Nhắn"} show={true}>
        <Grid item container xs={12} rowGap={5} marginTop={10}>
          <ItemChannelMessage title={"LongVM"} />
          <ItemChannelMessage title={"HungND"} />
        </Grid>
      </ButtonChannelList>
    </GroupContainer>
  );
};

const GroupContainer = styled(Grid)({
  width: "100%",
  padding: `10px 15px`,
});
