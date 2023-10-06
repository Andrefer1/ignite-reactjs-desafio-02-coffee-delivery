enum SIZE_TITLE {
  extraSmall,
  small,
  medium,
  large,
  extraLarge,
}

export const fontFamily = "'Baloo 2', sans-serif";
const lineHeight = 1.3;
const fontWeightBold = 700;
const fontWeightExtraBold = 800;

export type TitlesTypography = {
  [chave in keyof typeof SIZE_TITLE]: {
    fontFamily: typeof fontFamily;
    lineHeight: typeof lineHeight;
    fontSize: string;
    fontWeight: typeof fontWeightBold | typeof fontWeightExtraBold;
  };
};

export const titles: TitlesTypography = {
  extraSmall: {
    fontFamily,
    fontSize: "1.125rem",
    lineHeight,
    fontWeight: fontWeightBold,
  },
  small: {
    fontFamily,
    fontSize: "1.25rem",
    lineHeight,
    fontWeight: fontWeightBold,
  },
  medium: {
    fontFamily,
    fontSize: "1.5rem",
    lineHeight,
    fontWeight: fontWeightExtraBold,
  },
  large: {
    fontFamily,
    fontSize: "2rem",
    lineHeight,
    fontWeight: fontWeightExtraBold,
  },
  extraLarge: {
    fontFamily,
    fontSize: "3rem",
    lineHeight,
    fontWeight: fontWeightExtraBold,
  },
};
