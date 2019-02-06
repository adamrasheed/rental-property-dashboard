import React, { Component } from "react";
import styled from "styled-components";
import Tenant from "./Tenant";

const StyledTenants = styled.div`
  font-size: 1rem;
  line-height: 1;
`;

const Tenants = ({ tenants }) => (
  <StyledTenants>
    {tenants.map(tenant => (
      <Tenant
        key={tenant.id}
        id={tenant.id}
        name={tenant.name}
        email={tenant.email}
        picture={tenant.picture}
        phone={tenant.phoneNumber}
        lead={tenant.lead}
      />
    ))}
  </StyledTenants>
);

export default Tenants;
