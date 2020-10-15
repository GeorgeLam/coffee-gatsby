import React from 'react';

const BuyButton = ({node}) => {
    return (
    <button
        className="snipcart-add-item"
        data-item-id={node.slug}
        data-item-price={node.price}
        data-item-url={`/store/${node.slug}`}
        data-item-name={node.productTitle}
        data-item-image={node.image.fluid.src}
        data-item-description={node.description.description}
        style={{width: "50%",
    margin: "0px auto",
    backgroundColor: "rgba(239, 221, 196, 0.4)",
    border: "1px solid",
    borderRadius: 5,
    cursor: "pointer",
    padding: 2}}
  >
        Add to cart
    </button>
    );
};

export default BuyButton;