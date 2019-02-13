import React, { Component } from "react";
import Container from "../Global/Container";
import Property from "../PropertyCard/Property";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
import Header from "../Global/Header";
import LoadingCard from "../Global/LoadingCard";

const client = new ApolloClient({
  uri: `https://api-uswest.graphcms.com/v1/cjrqs43640jmw01elr4q3nu1y/master`
});

const PROPS_QUERY = gql`
  {
    properties {
      propertyAddress {
        streetAddress
        city
        state
        zipCode
      }
      rent
      size
      bedrooms
      bathrooms
      furnished
      id
      tenants {
        id
        name
        lead
        picture {
          id
          url
        }
      }
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header title="Properties" />
          <Container flex>
            <Query query={PROPS_QUERY}>
              {({ loading, data: { properties } }) => {
                if (loading) {
                  return <LoadingCard />;
                }
                return properties.map(
                  ({
                    propertyAddress,
                    rent,
                    size,
                    bedrooms,
                    bathrooms,
                    furnished,
                    id,
                    tenants
                  }) => (
                    <Property
                      key={id}
                      id={id}
                      address={propertyAddress}
                      rent={rent}
                      size={size}
                      furnished={furnished}
                      bedrooms={bedrooms}
                      bathrooms={bathrooms}
                      tenants={tenants}
                    />
                  )
                );
              }}
            </Query>
          </Container>
        </div>
      </ApolloProvider>
    );
  }
}

export default Home;
