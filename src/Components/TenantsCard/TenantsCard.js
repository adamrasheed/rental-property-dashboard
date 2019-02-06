import React, { Component } from "react";
import styled from "styled-components";
import Card, { CardTitle } from "../Global/Card";
import Tenant from "../Global/Tenant";

const TenantsCard = ({ tenants }) => {
  return (
    <Card>
      <CardTitle>
        {tenants && tenants.length > 0
          ? `Tenants (${tenants.length})`
          : `No Tenants`}
        {tenants &&
          tenants.map(tenant => (
            <Tenant
              key={tenant.id}
              name={tenant.name}
              email={tenant.email}
              lead={tenant.lead}
              phoneNumber={tenant.phoneNumber}
              picture={tenant.picture}
            />
          ))}
      </CardTitle>
    </Card>
  );
};

export default TenantsCard;
