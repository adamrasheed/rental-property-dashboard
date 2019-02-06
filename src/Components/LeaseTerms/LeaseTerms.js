import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card, { CardTitle } from "../Global/Card";

import { formatMoney, numberWithCommas } from "../../utils";
import { colors, P } from "../../Styles";
import LeaseDates from "./LeaseDates";

const Rent = styled(P)`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1;
  padding: 0 2rem;
`;

const HR = styled.hr`
  background: ${colors.ultraLight};
  height: 1px;
  border: none;
  margin: 1rem 0;
  width: 100%;
  display: block;
`;

const LeaseTerms = ({ rent, startDate, endDate, type }) => {
  return (
    <Card>
      <CardTitle>Lease Terms</CardTitle>
      <Rent>${formatMoney(rent)}</Rent>
      <P light small style={{ padding: `0 2rem`, margin: `0.5rem 0 1rem` }}>
        Monthly Rent
      </P>
      <LeaseDates startDate={startDate} endDate={endDate} type={type} />
      <HR />
    </Card>
  );
};

LeaseTerms.propTypes = {
  rent: PropTypes.number,
  startDate: PropTypes.string,
  endDate: PropTypes.string
};

export default LeaseTerms;
