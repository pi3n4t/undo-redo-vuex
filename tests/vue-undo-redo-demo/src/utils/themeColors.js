const VUEJS_GREEN = "rgb(55, 173, 112)";
const VUEJS_BLUE_GREEN = "rgb(40, 56, 75)";

const COLOR_MAP = {
  primary: {
    color: VUEJS_GREEN,
    class: "u-color--green"
  },
  secondary: {
    color: VUEJS_BLUE_GREEN,
    class: "u-color-blueGreen"
  }
};

export const getColorProp = prop => ({ color = "primary" }) => {
  const colorItem = COLOR_MAP[color];
  if (colorItem && colorItem[prop]) {
    return colorItem[prop];
  }
  return "";
};
