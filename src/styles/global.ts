import styled, { createGlobalStyle } from "styled-components";
import background from "../images/background.png";

export const AppColors = {
  gray: "#212529",
  purple: "slateblue",
  cream: "gainsboro",
  orange: "darkorange",
  grayGlass: `rgba(33,33,33,0.93)`,
};

export const GlobalStyle = createGlobalStyle`
html,body,p,span,h1,h2,h3,h4,h5,h6,figure {
    margin: 0;
    padding: 0;
}
body{
  color:${AppColors.cream};
  background-color: ${AppColors.gray};
}
`;

export const ApplicationWraper = styled.div((props): string => {
  return `
  display:block;
  height:auto;
  background-color: ${AppColors.grayGlass};
  `;
});
