import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    tB50: true;
    tR50: true;
    tB30: true;
    tR30: true;
    tB16: true;
    tR16: true;
    tB14: true;
    tR14: true;
    tB12: true;
    tR12: true;
  }
}

export interface ExtendedTypographyOptions extends TypographyOptions {
  tB50: React.CSSProperties;
  tR50: React.CSSProperties;
  tB30: React.CSSProperties;
  tR30: React.CSSProperties;
  tB16: React.CSSProperties;
  tR16: React.CSSProperties;
  tB14: React.CSSProperties;
  tR14: React.CSSProperties;
  tB12: React.CSSProperties;
  tR12: React.CSSProperties;
}

export const typographyTheme = {
  tB50: {
    fontSize: 50,
    fontWeight: "bold",
  },
  tR50: {
    fontSize: 50,
    fontWeight: "normal",
  },
  tB30: {
    fontSize: 30,
    fontWeight: "bold",
  },
  tR30: {
    fontSize: 30,
    fontWeight: "normal",
  },
  tB16: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tR16: {
    fontSize: 16,
    fontWeight: "normal",
  },
  tB14: {
    fontSize: 14,
    fontWeight: "bold",
  },
  tR14: {
    fontSize: 14,
    fontWeight: "normal",
  },
  tB12: {
    fontSize: 12,
    fontWeight: "bold",
  },
  tR12: {
    fontSize: 12,
    fontWeight: "normal",
  },
};
