const BASE_COLORS = {
  white: "#FFFFFF",
  background: "#FAFAFA",
  card: "#F3F2F2",
  input: "#EDEDED",
  button: "#E6E5E5",
  hover: "#D7D5D5",
  label: "#8D8686",
  text: "#574F4D",
  subtitle: "#403937",
  title: "#272221",
};

const BRAND_COLORS = {
  purpleLight: "#EBE5F9",
  purple: "#8047F8",
  purpleDark: "#4B2995",

  yellowLight: "#F1E9C9",
  yellow: "#DBAC2C",
  yellowDark: "#C47F17",
};

export type ColorsType = {
  base: {
    [chave in keyof typeof BASE_COLORS]: string;
  };
  brand: {
    [chave in keyof typeof BRAND_COLORS]: string;
  };
};

export const colors: ColorsType = {
  base: BASE_COLORS,
  brand: BRAND_COLORS,
};
