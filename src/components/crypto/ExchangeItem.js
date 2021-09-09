import React from "react";
import PropTypes from "prop-types";

const ExchangeItem = ({
  id,
  image,
  name,
  website,
  trustCompany,
  yearEstablished,
}) => {
  return (
    <div className="card-group">
      <div className="card mb-4" key={id}>
        <img
          src={image}
          className="card-img-top"
          style={{ width: "50px" }}
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <a href={website} className="card-text">
            {website}
          </a>
          <p className="card-text">Year Established: {yearEstablished}</p>
          <p className="card-text">Trust Score: {trustCompany}</p>
        </div>
      </div>
    </div>
  );
};

ExchangeItem.propTypes = {
  key: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  trustCompany: PropTypes.number.isRequired,
  yearEstablished: PropTypes.number.isRequired,
};

export default ExchangeItem;
