import React, { Component } from "react";
import { colors, P } from "../../Styles";
import styled from "styled-components";

const StyledAddress = styled.h2`
  color: ${colors.text};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.35;
  padding: 0;
  margin: 0 0 1rem;
  width: fit-content;
`;

const PlaceHolder = styled(StyledAddress)`
  display: block;
  height: 1.25rem;
  width: 100%;
`;

const PropertyAddress = ({ address }) => {
  return (
    <StyledAddress>
      {address ? (
        `${address.streetAddress}
						${address.city}, ${address.state} ${address.zipCode}`
      ) : (
        <PlaceHolder>Loading...</PlaceHolder>
      )}
    </StyledAddress>
  );
};

export default PropertyAddress;
