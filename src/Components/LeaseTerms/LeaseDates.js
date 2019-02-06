import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faLongArrowAltRight
} from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../Styles";
import moment from "moment";

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
      <FontAwesomeIcon icon={faLongArrowAltRight} />
      {moment(date).format("DD MMM, YYYY")}
    </span>
  );
};

const LeaseDates = ({ startDate, endDate, leaseType }) => {
  return (
    <StyledLeaseDates>
      <FontAwesomeIcon icon={faCalendarAlt} />
      {startDate && <span>{moment(startDate).format("DD MMM, YYYY")}</span>}
      {endDate && <EndDate date={endDate} />}
      {leaseType && <span>{leaseType}</span>}
    </StyledLeaseDates>
  );
};

export default LeaseDates;
