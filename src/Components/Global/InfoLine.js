import React from "react";

import Styled from "styled-components";
import { colors } from "../../Styles";

const StyledInfoLine = Styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
  padding: 18px 0;
  flex: 1;
  max-height: fit-content;
  box-shadow: ${props =>
    props.noBorder ? `none` : `0 1px 0 0 ${colors.border.light}`};
`;

const Value = Styled.p`
  color: ${colors.text};
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.025em;
  line-height: 1;
  margin: 0;

   svg {
     margin-right: 5px;
     opacity: 0.65;
     width: 20px !important;
   }
  `;

const Title = Styled(Value)`
  font-weight: 600;
  letter-spacing: 0.05em;
`;

const InfoLine = ({ title, value, noBorder }) => {
  return (
    <StyledInfoLine noBorder={noBorder}>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledInfoLine>
  );
};

export default InfoLine;
