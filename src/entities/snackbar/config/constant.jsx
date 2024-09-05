import { VerifySvg, WarningSvg, DangerSvg } from "shared/lib/assets/icons";

export const HEIGHT_TOAST = 100;
export const WIDTH_TOAST = 400;
export const GAP_TOAST = 20;

export const COLORS_CONDITION = (condition) => {
  switch (condition) {
    case "success":
      return { color: "#42b883", hover: "#379B6E", light: "#87F3C2" };
    case "warning":
      return { color: "#205dd8", hover: "#2051B4", light: "#6999FB" };
    default:
      return { color: "#f73963", hover: "#a72b3b", light: "#fdecee" };
  }
};

export const ICONS = (condition) => {
  const colorPalette = COLORS_CONDITION(condition);
  switch (condition) {
    case "success":
      return {
        icon: (
          <VerifySvg width={30} height={30} strokeColor={colorPalette.color} />
        ),
        title: "Great success!",
      };
    case "warning":
      return {
        icon: (
          <WarningSvg width={30} height={30} strokeColor={colorPalette.color} />
        ),
        title: "Check your input!",
      };
    default:
      return {
        icon: (
          <DangerSvg width={30} height={30} strokeColor={colorPalette.color} />
        ),
        title: "Yikes. Something went wrong!",
      };
  }
};
