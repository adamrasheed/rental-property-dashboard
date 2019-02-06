import React from "react";
import Container from "../Global/Container";
import Property from "../PropertyCard/Property";
import LeaseTerms from "../LeaseTerms/LeaseTerms";

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
      <Container flex flexColumn>
        <Property
          id={id}
          size={size}
          bedrooms={bedrooms}
          bathrooms={bathrooms}
          rent={rent}
          tenants={tenants}
          address={propertyAddress}
          furnished={furnished}
        />
        <LeaseTerms
          rent={rent}
          startDate={lease.startDate}
          endDate={lease.endDate}
          type={lease.leaseType}
        />
      </Container>
    );
  }
}

export default PropertyInfo;
