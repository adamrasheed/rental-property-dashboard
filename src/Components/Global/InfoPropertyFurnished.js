import React from "react";
import InfoLine from "./InfoLine";
import PropTypes from "prop-types";

const InfoPropertyFurnished = ({ furnished, noBorder }) => {
  return (
    <InfoLine
      title="Furnished"
      value={furnished ? `Furnished` : `Unfurnished`}
      noBorder={noBorder}
    />
  );
};

InfoPropertyFurnished.propTypes = {
  size: PropTypes.bool
};

export default InfoPropertyFurnished;
