import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { BASE_SIZE } from "../../constants/size";
import { BASE_COLOR } from "../../constants/color";
import NavbarGroup from "./components/NavbarGroup";
import NavbarChannel from "./components/NavbarChannel";
import ItemChannel from "../Navbar/ItemChannel";

const ChannelList = [
  {
    active: true,
    text: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVqneS32MI4-7ujeGVP7ZNa4XFn_V8QgymdQ&usqp=CAU",
  },
  {
    text: "",
  },
];

export default function Body() {
  return (
    <BodyContainer container>
      <GridNavbar item xs={12} sm={2.5}>
        <NavbarGroup>
          <Grid item xs={12}>
            {ChannelList?.map((item: any) => {
              return <ItemChannel image={item.image} isActive={item.active} />;
            })}
          </Grid>
        </NavbarGroup>
        <NavbarChannel></NavbarChannel>
      </GridNavbar>
      <GridContent item xs={0} sm></GridContent>
    </BodyContainer>
  );
}

const BodyContainer = styled(Grid)({
  paddingTop: BASE_SIZE.HEADER,
  height: `100vh`,
  background: "black",
});

const GridNavbar = styled(Grid)({
  background: BASE_COLOR.second,
});

const GridContent = styled(Grid)({
  background: "#FFF",
});
