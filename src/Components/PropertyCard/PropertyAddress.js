import React, { Component } from "react";
import { colors } from "../../Styles";
import Styled from "styled-components";

const StyledAddress = Styled.h2`
	color: ${colors.text};
	font-size: 1rem;
	font-weight: 600;
	 line-height: 1.35;
	 padding: 0;
	 margin: 0 0 1rem;
	 width: fit-content;
`;

const PropertyAddress = ({ address }) => {
  return (
    <StyledAddress>
      {address.streetAddress} <br />
      {address.city}, {address.state} {address.zipCode}
    </StyledAddress>
  );
};

export default PropertyAddress;
