import styled from "vue-styled-components";

const VUEJS_GREEN = "rgb(55, 173, 112)";
const VUEJS_BLUE_GREEN = "rgb(40, 56, 75)";

const colorProp = ({ color = "primary" }) => {
  if (color === "primary") {
    return VUEJS_GREEN;
  } else if (color === "secondary") {
    return VUEJS_BLUE_GREEN;
  }
  return "";
};

export default styled("button", { color: String })`
  border: 2px solid;
  border-radius: 3px;
  color: ${colorProp};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`;
