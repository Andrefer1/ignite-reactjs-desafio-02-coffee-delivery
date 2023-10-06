enum SIZE_TITLE {
  extraSmall,
  small,
  medium,
  large,
}

const fontFamily = "Roboto, sans-serif";
const lineHeight = 1.3;
const fontWeightRegular = 400;
const fontWeightBold = 700;

export type TextTypography = {
  [chave in keyof typeof SIZE_TITLE]: {
    fontFamily: typeof fontFamily;
    lineHeight: typeof lineHeight;
    fontSize: string;
    fontWeight: typeof fontWeightRegular | typeof fontWeightBold;
  };
};

export const text: TextTypography = {
  extraSmall: {
    fontFamily,
    fontSize: "0.75rem",
    lineHeight,
    fontWeight: fontWeightBold,
  },
  small: {
    fontFamily,
    fontSize: "0.875rem",
    lineHeight,
    fontWeight: fontWeightRegular,
  },
  medium: {
    fontFamily,
    fontSize: "1rem",
    lineHeight,
    fontWeight: Number() as typeof fontWeightRegular | typeof fontWeightBold,
  },
  large: {
    fontFamily,
    fontSize: "1.25rem",
    lineHeight,
    fontWeight: Number() as typeof fontWeightRegular | typeof fontWeightBold,
  },
};
