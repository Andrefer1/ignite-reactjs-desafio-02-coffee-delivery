enum SIZE_TITLE {
  medium,
  large,
}

const fontFamily = "Roboto, sans-serif";
const lineHeight = 1.6;
const fontWeightRegular = 400;
const fontWeightBold = 700;

export type ButtonTypography = {
  [chave in keyof typeof SIZE_TITLE]: {
    fontFamily: typeof fontFamily;
    lineHeight: typeof lineHeight;
    fontSize: string;
    fontWeight: typeof fontWeightRegular | typeof fontWeightBold;
  };
};

export const button: ButtonTypography = {
  medium: {
    fontFamily,
    fontSize: "0.75rem",
    lineHeight,
    fontWeight: fontWeightRegular,
  },
  large: {
    fontFamily,
    fontSize: "0.875rem",
    lineHeight,
    fontWeight: fontWeightBold,
  },
};
