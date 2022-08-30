import { cssVar } from "@chakra-ui/theme-tools";

const $arrowBg = cssVar("popper-arrow-bg");

export const Tooltip = {
  baseStyle: {
    background: "white",
    [$arrowBg.variable]: "white",
    borderRadius: "12px",
    boxShadow: "0px 10px 20px rgba(136, 120, 172, 0.2)",
    color: "black",
    fontFamily: "Blocket Display",
    fontSize: "12px",
    fontWeight: 700,
    padding: "16px",
  },
  variants: {
    black: {
      background: "black",
      [$arrowBg.variable]: "black",
      borderRadius: "12px",
      boxShadow: "0px 10px 20px rgba(136, 120, 172, 0.2)",
      color: "white",
      fontFamily: "Space Grotesk",
      fontSize: "14px",
      fontWeight: 400,
      padding: "5px 12px",
      textAlign: "center",
      zIndex: 9999999999,
    },
  },
};