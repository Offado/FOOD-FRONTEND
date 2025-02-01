import React from "react";

const Price = ({ price }) => {
  // Affichage du prix
  const formatPrice = () =>
    new Intl.NumberFormat('fr-FR', {
      style: "currency",
      currency: "XOF",
    }).format(price);

  return <div>{formatPrice()}</div>;
};

export default Price;

