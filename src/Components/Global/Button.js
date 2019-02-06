import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  display: block;
  width: fit-content;
  border: none;
  color: ${({ light }) => (light ? `#333` : `white`)};
  text-decoration: none;
  font-size: 0.875rem;
  font-variant-caps: all-small-caps;
  font-weight: 600;
  padding: ${props => (props.large ? `8px 36px 12px` : `2px 8px 4px`)};
  border-radius: 4px;
  text-align: center;
  letter-spacing: 0.05em;
  ${props =>
    props.primary &&
    `background-image: linear-gradient(to right,#74b8bf 0%,#1ed4a8 100%)`}
`;

export const ButtonLink = styled(Link)`
  display: block;
  width: fit-content;
  border: none;
  color: ${({ light }) => (light ? `#333` : `white`)};
  text-decoration: none;
  font-size: 0.875rem;
  font-variant-caps: all-small-caps;
  font-weight: 600;
  padding: ${props => (props.large ? `8px 36px 12px` : `2px 8px 4px`)};
  border-radius: 4px;
  text-align: center;
  letter-spacing: 0.05em;
  ${props =>
    props.primary &&
    `background-image: linear-gradient(to right,#74b8bf 0%,#1ed4a8 100%)`};
`;

export default Button;
