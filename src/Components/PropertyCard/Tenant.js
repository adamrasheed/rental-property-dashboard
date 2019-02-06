import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../Styles";

const StyledTenant = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 18px 0;
`;

const TenantImg = styled.img`
  border-radius: 50%;
  max-width: 2.5rem;
  margin-right: 1rem;
`;

const TenantContent = styled.div`
  flex: 1;
`;

const TenantContentValue = styled.p`
  font-size: ${props => (props.large ? `1rem` : `0.75rem`)};
  line-height: 1;
  margin: 0.5rem 0;
  color: ${({ large }) => (large ? colors.text : colors.textLight)};

  a {
    color: ${({ large }) => (large ? colors.text : colors.textLight)};
    text-decoration: none;

    &:focus,
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LeadTag = styled.span`
  display: inline-block;
  background: #2ecc71;
  color: white;
  font-variant-caps: all-small-caps;
  font-size: 0.675rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.05em;
  padding: 1px 4px 3px;
  transform: translateY(-1px);
  margin: 0 0.5rem;
`;

const Tenant = ({ name, email, lead, phoneNumber, picture }) => (
  <StyledTenant>
    {picture ? <TenantImg src={picture.url} alt="" /> : null}
    <TenantContent>
      <TenantContentValue large>
        {name}
        {lead && <LeadTag>Lead</LeadTag>}
      </TenantContentValue>
      <TenantContentValue>
        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          {email}
        </a>
      </TenantContentValue>

      <TenantContentValue>{phoneNumber}</TenantContentValue>
    </TenantContent>
  </StyledTenant>
);

export default Tenant;
