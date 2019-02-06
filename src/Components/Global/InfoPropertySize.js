import React, { Component } from "react";
import InfoLine from "./InfoLine";
import { numberWithCommas } from "../../utils";
import PropTypes from "prop-types";

const InfoPropertySize = ({ size }) => {
  return <InfoLine title="Size" value={`${numberWithCommas(size)} Sq. Ft.`} />;
};

InfoPropertySize.propTypes = {
  size: PropTypes.number
};

export default InfoPropertySize;
