import { createTheme, ThemeOptions } from "@mui/material";
import { ExtendedTypographyOptions, typographyTheme } from "./components/font";
import { componentsOverride } from "./components/componentsOverride";

const theme = createTheme({
  typography: typographyTheme as ExtendedTypographyOptions,
  components: componentsOverride,
  spacing: 1,
} as ThemeOptions);

export default theme;
