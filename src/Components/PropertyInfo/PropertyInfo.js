import React from "react";
import Container from "../Global/Container";
import Property from "../PropertyCard/Property";
import LeaseTerms from "../LeaseTerms/LeaseTerms";
import TenantsCard from "../TenantsCard/TenantsCard";

class PropertyInfo extends React.Component {
  state = {};
  render() {
    const {
      id,
      rent,
      tenants,
      lease,
      bedrooms,
      bathrooms,
      size,
      furnished,
      propertyAddress
    } = this.props;
    return (
      <Container columns>
        <Property
          id={id}
          size={size}
          bedrooms={bedrooms}
          bathrooms={bathrooms}
          rent={rent}
          address={propertyAddress}
          furnished={furnished}
        />
        <LeaseTerms
          rent={rent}
          startDate={lease.startDate ? lease.startDate : `no`}
          endDate={lease.endDate && lease.endDate}
          type={lease.leaseType}
        />
        <TenantsCard tenants={tenants} addTenant={true} />
      </Container>
    );
  }
}

export default PropertyInfo;
