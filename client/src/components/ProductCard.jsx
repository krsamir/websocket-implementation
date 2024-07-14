import React from "react";
import propTypes from "prop-types";
import { Card } from "../data/styles";
import { useNavigate } from "react-router-dom";
import { CONSTANT } from "../data/Constants";

function ProductCard({
  data: { id, name, description, actualCost, cost, image },
}) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Card.Container
        key={id}
        onClick={() => navigate(`/product/${id}`)}
        size={CONSTANT.SMALL}
      >
        <Card.Image
          src={`data:image/*;base64,${image}`}
          size={CONSTANT.SMALL}
        />
        <Card.Name>{name}</Card.Name>
        <Card.Description>{description}</Card.Description>
        <Card.Price>
          <Card.Actual>RS. {cost}</Card.Actual>
          <Card.Cost>RS.{actualCost}</Card.Cost>
          <Card.Discount>
            {((actualCost - cost) / actualCost).toFixed(2) * 100}% OFF
          </Card.Discount>
        </Card.Price>
      </Card.Container>
    </React.Fragment>
  );
}

ProductCard.propTypes = {
  data: propTypes.object,
};
export default ProductCard;
