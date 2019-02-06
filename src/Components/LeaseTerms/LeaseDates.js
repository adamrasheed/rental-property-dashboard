import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faLongArrowAltRight
} from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../Styles";
import moment from "moment";

const leaseTypeForMat = leaseType => {
  switch (leaseType) {
    case `Six_months`:
      return `6 Mo.`;

    case `Month_to_month`:
      return `Monthly`;

    case `Twelve_months`:
      return `12 Mo.`;

    case `Sixteen_months`:
      return `16 Mo.`;
    default:
      return;
  }
};

const StyledLeaseDates = styled.div`
  color: ${colors.textLight};
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  padding: 1rem 2rem;

  svg {
    margin-right: 0.5rem;
  }
`;

const EndDate = ({ date }) => {
  return (
    <span>
      <FontAwesomeIcon
        icon={faLongArrowAltRight}
        style={{ marginLeft: `0.5rem` }}
      />
      {moment(date).format("DD MMM, YYYY")}
    </span>
  );
};

const LeaseDates = ({ startDate, endDate, leaseType }) => {
  return (
    <StyledLeaseDates>
      <FontAwesomeIcon icon={faCalendarAlt} />
      {startDate ? (
        <span>{moment(startDate).format("DD MMM, YYYY")}</span>
      ) : null}
      {endDate && <EndDate date={endDate} />}
      {leaseType && (
        <span style={{ marginLeft: `0.75rem` }}>
          ({leaseTypeForMat(leaseType)})
        </span>
      )}
    </StyledLeaseDates>
  );
};

export default LeaseDates;
