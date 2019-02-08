import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import Card from "../Global/Card";
import { ButtonLink } from "../Global/Button";
import InfoPropertySize from "../Global/InfoPropertySize";
import PropertyAddress from "./PropertyAddress";
import Features from "./Features";
import Tenants from "./Tenants";

import { colors } from "../../Styles";
import { numberWithCommas, handleize } from "../../utils";
import reImg from "../../Assets/real-estate-picture.jpg";

const Content = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const Rent = styled.p`
  color: ${colors.text};
  font-size: 1.375rem;
  line-height: 1;
`;

const Vacant = styled.p`
  font-size: 1rem;
  line-height: 1;
  color: #c0392b;
`;

class Property extends Component {
  render() {
    const {
      id,
      address,
      rent,
      size,
      bedrooms,
      bathrooms,
      furnished,
      tenants
    } = this.props;

    // console.log(address);

    return (
      <Card flex Picture>
        <Link
          to={`/properties/${id}`}
          style={{ display: `block`, textDecoration: `none` }}
        >
          <Img src={reImg} alt="" />
        </Link>
        <Content>
          {address && (
            <Link
              style={{
                textDecoration: `none`,
                color: `${colors.text}`,
                width: `fit-content`
              }}
              to={`/properties/${id}`}
            >
              <PropertyAddress address={address} />
            </Link>
          )}
          {rent && <Rent>{`$${numberWithCommas(rent)} /mo.`}</Rent>}
          <InfoPropertySize size={size} />
          <Features
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            furnished={furnished}
          />
          {tenants && tenants.length && <Tenants tenants={tenants} />}
          {tenants && tenants.length === 0 && <Vacant>Vacant</Vacant>}
          {address && (
            <ButtonLink
              to={`/properties/${id}`}
              primary="true"
              large="true"
              style={{ margin: `auto 0 1rem` }}
            >
              Details
            </ButtonLink>
          )}
        </Content>
      </Card>
    );
  }
}

Property.propTypes = {
  id: PropTypes.string,
  address: PropTypes.object,
  rent: PropTypes.number,
  size: PropTypes.number,
  bedrooms: PropTypes.number,
  bathrooms: PropTypes.number,
  furnished: PropTypes.bool,
  tenants: PropTypes.array
};

export default Property;
