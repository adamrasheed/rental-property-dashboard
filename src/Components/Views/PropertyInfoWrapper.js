import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

import PropertyInfo from "../PropertyInfo/PropertyInfo";
import Header from "../Global/Header";

import { getPathName } from "../../utils";

const client = new ApolloClient({
  uri: `https://api-uswest.graphcms.com/v1/cjrqs43640jmw01elr4q3nu1y/master`
});

const PROPERTY_QUERY = gql`
  query SingleProperty($id: ID!) {
    property(where: { id: $id }) {
      id
      propertyAddress {
        streetAddress
        city
        state
        zipCode
      }
      rent
      size
      lease {
        depositAmount
        rent
        leaseType
        startDate
        endDate
      }
      furnished
      bedrooms
      bathrooms
      tenants(orderBy: lead_DESC) {
        id
        name
        picture {
          url
        }
        email
        phoneNumber
        lead
      }
    }
  }
`;

class PropertyInfoWrapper extends Component {
  state = { id: getPathName() };
  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <Query
            query={PROPERTY_QUERY}
            variables={{ id: this.props.match.params.propertyId }}
          >
            {({ loading, data, error }) => {
              if (error) {
                console.error(error);
                return <p>noo...</p>;
              }
              if (loading) {
                return "loading...";
              }
              const {
                id,
                rent,
                tenants,
                lease,
                bedrooms,
                size,
                bathrooms,
                propertyAddress
              } = data.property;
              return (
                <>
                  <Header title={propertyAddress.streetAddress} />
                  <PropertyInfo
                    id={id}
                    rent={rent}
                    size={size}
                    tenants={tenants}
                    lease={lease}
                    bedrooms={bedrooms}
                    bathrooms={bathrooms}
                    address={propertyAddress}
                  />
                </>
              );
            }}
          </Query>
        </ApolloProvider>
      </div>
    );
  }
}

export default PropertyInfoWrapper;
