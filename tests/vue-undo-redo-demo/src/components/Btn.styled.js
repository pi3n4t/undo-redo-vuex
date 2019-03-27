import styled from "vue-styled-components";
import { getColorProp } from "@/utils/themeColors";

const colorProp = getColorProp("color");

export default styled("button", { color: String })`
  border: 2px solid;
  border-radius: 3px;
  color: ${colorProp};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`;
