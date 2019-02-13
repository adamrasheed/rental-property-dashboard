import React from "react";
import styled from "styled-components";
import Card from "./Card";
import PropertyAddress from "../PropertyCard/PropertyAddress";

const LoadingImg = styled.div`
  background: #333;
  height: 15rem;
`;

const Content = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
`;

const LoadingCard = () => {
  return (
    <Card>
      <LoadingImg />
      <Content>
        <PropertyAddress placeholder="placeholder" />
      </Content>
    </Card>
  );
};

export default LoadingCard;
