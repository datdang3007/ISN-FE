import { Box, CardMedia, Grid, styled } from "@mui/material";
import { useMemo } from "react";
import { IMAGE_DEFAULT } from "../../constants";
import { BASE_COLOR } from "../../constants/color";
import theme from "../../theme";

interface ItemChannelProps {
  image?: string;
  isActive?: string;
}

export default function ItemChannel({ image, isActive }: ItemChannelProps) {
  image = useMemo(() => {
    return image ? image : IMAGE_DEFAULT.EMPTY_IMAGE_LOGO;
  }, [image]);

  isActive = useMemo(() => {
    return isActive ? "active" : "";
  }, [isActive]);

  return (
    <ChannelItem item xs={12}>
      <BoxImage className={isActive} sx={{ background: "#FFF" }}>
        <Image image={image} />
      </BoxImage>
    </ChannelItem>
  );
}

const ChannelItem = styled(Grid)({
  aspectRatio: "1/1",
  padding: 10,
});

const BoxImage = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  position: "relative",
  width: "100%",
  height: "100%",
  padding: 5,
  borderRadius: 12,
  boxSizing: "border-box",
  "&:hover": {
    "&:before": {
      width: "90%",
      height: "90%",
    },
  },
  "&.active": {
    "&:before": {
      width: "90%",
      height: "90%",
    },
  },
  "&:before": {
    zIndex: "1",
    content: "''",
    position: "absolute",
    width: "110%",
    height: "110%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: BASE_COLOR.second,
    borderRadius: 12,
    transition: "0.2s",
  },
  "&:after": {
    zIndex: "1",
    content: "''",
    position: "absolute",
    height: "40%",
    top: "50%",
    left: "120%",
    transform: "translateY(-50%)",
    background: theme,
    borderRadius: 12,
    transition: "0.2s",
  },
}));

const Image = styled(CardMedia)({
  position: "relative",
  zIndex: 2,
  width: "100%",
  height: "100%",
  borderRadius: 10,
});
