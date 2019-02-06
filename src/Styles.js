import styled from "styled-components";

export const colors = {
  text: `#4A4A4A`,
  textLight: `#868383`,
  ultraLight: `#e2e4e4`,
  border: {
    light: `rgba(0,0,0,0.08)`
  }
};

export const container = {
  regular: `80rem`,
  small: `64rem`
};

export const breakpoints = {
  sml: `375px`,
  med: `480px`,
  lrg: `768px`,
  xl: `1080px`,
  xxl: `1440px`
};

export const P = styled.p`
  margin: 0;
  padding: 0;
  color: ${props => (props.light ? colors.textLight : colors.text)};
  font-size: 1rem;
  ${props =>
    props.small &&
    `font-size: 0.875rem; font-weight: 600; letter-spacing: 0.05em;`}
`;

export const A = styled.a`
  color: ${colors.text};
  text-decoration: none;
`;
