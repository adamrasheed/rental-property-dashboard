import React, { Component } from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faToilet, faCouch } from "@fortawesome/free-solid-svg-icons";

const BedBathContainer = Styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: stretch;
	padding: 18px 0;
	box-shadow: 0 1px 0 0 ${colors.border.light};
`;

const Feature = Styled.div`
	colors: ${colors.text};
	font-weight: 400;
	max-width: calc(33.33% - 0.125rem);
	flex: calc(33.33% - 0.25rem);
	font-size: 0.875rem;
	

	svg {
		width: 20px !important;
		opacity: 0.64 !important;
	}
`;

const Features = ({ bedrooms, bathrooms, furnished }) => {
  return (
    <BedBathContainer>
      <Feature>
        <FontAwesomeIcon icon={faBed} /> {bedrooms} Bed
      </Feature>
      <Feature>
        <FontAwesomeIcon icon={faToilet} /> {bathrooms} Bath
      </Feature>
      {furnished && (
        <Feature>
          <FontAwesomeIcon icon={faCouch} /> Furnished
        </Feature>
      )}
    </BedBathContainer>
  );
};

Features.propTypes = {
  bedrooms: PropTypes.number,
  bathrooms: PropTypes.number
};

export default Features;
