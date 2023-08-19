const palette = {
  white: "#F5FFF4",
  black: "#060C06",
  primary: "#3DCE26",
  primaryDark: "#145B12",
  secondary: "#B4C2B4",
} as const;

export const theme = {
  color: {
    background: palette.black,
    text: palette.white,
    brand: palette.primary,
    button: palette.primaryDark,
    cardBackground: palette.secondary,
  },
  fontSize: {
    header: 36,
    text: 18,
    buttonLarge: 36,
    buttonMedium: 24,
    inputLabel: 20,
    cardTitleLarge: 36,
    cardTitleMedium: 24,
  },
  fontFamily: {
    header: "Roboto-Medium",
    text: "Roboto-Regular",
    brand: "OpenSans-Bold",
    buttonLarge: "Roboto-Bold",
    buttonMedium: "Roboto-Bold",
    inputLabel: "Roboto-Regular",
  },
  padding: {
    buttonLargeHorizontal: 30,
    buttonLargeVertical: 20,
    buttonMediumHorizontal: 20,
    buttonMediumVertical: 10,
  },
  opacity: {
    activeOpacity: 0.5,
  },
} as const;
