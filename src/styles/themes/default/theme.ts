import { ColorsType, colors } from "./colors";
import {
  button,
  ButtonTypography,
  tag,
  TagTypography,
  text,
  TextTypography,
  titles,
  TitlesTypography,
} from "./typographies";

export type ThemeProps = {
  colors: ColorsType;
  typographies: {
    button: ButtonTypography;
    tag: TagTypography;
    text: TextTypography;
    titles: TitlesTypography;
  };
};

export const defaultTheme: ThemeProps = {
  colors: colors,
  typographies: {
    button,
    tag,
    text,
    titles,
  },
};
