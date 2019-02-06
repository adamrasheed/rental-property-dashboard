import React, { Component } from "react";
import { colors } from "../../Styles";
import Styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";

const StyledFurnished = Styled.div`
	color: ${colors.text};
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.025em;
  line-height: 1;
	margin: 0;
	padding: 18px 0;
	
	svg {
		width: 20px;
		margin-right: 6px;
		opacity: 0.86 !important;
	}
`;

const Furnished = () => (
  <StyledFurnished>
    <FontAwesomeIcon icon={faCouch} />
    Furnished
  </StyledFurnished>
);

export default Furnished;
