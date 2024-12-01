import React from "react";
import "./Product.css";

const Product = () => {
    const products = [
        {
            id: 1,
            name: "Apple iphone 13 (Blue 128 GB)",
            price: 69000,
            discouont: 14,
            exchangeValue: 32000,
            image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg",
            rating: 4.6,
            bestseller: true,
            ratingCount: 2000,
            reviewCount: 7000,
            productDescription: [
                "128 GB ROMM",
                '6.7" Screen Super Retina XDR Display',
                "12MP + 12MP | 12MP Front Camera",
                "A15 Bionic Chip",
                "12MP + 8MP | 8MP Front Camera",
            ],
        },
        {
            id: 2,
            name: "Apple iphone 13 (White 128 GB)",
            price: 69000,
            discouont: 14,
            exchangeValue: 32000,
            image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_.jpg",
            rating: 4.6,
            bestseller: false,
            ratingCount: 2000,
            reviewCount: 7000,
            productDescription: [
                "128 GB ROMM",
                '6.7" Screen Super Retina XDR Display',
                "12MP + 12MP | 12MP Front Camera",
                "A15 Bionic Chip",
                "12MP + 8MP | 8MP Front Camera",
            ],
        },
    ];
    return (
        <div className="products">
            {products.map((product) => (
                <div className="product">
                    <div className="image-container">
                        <img src={product.image} alt="iphone" />
                        {product.bestseller ? (
                            <div className="bestseller">Bestseller</div>
                        ) : (
                            <div></div>
                        )}
                    </div>

                    <div className="description-container">
                        <h3>{product.name}</h3>
                        <div className="rating-details">
                            <div className="rating">{product.rating}</div>
                            <p style={{ marginRight: "6px" }}>
                                {" "}
                                {product.ratingCount} Ratings
                            </p>
                            <p>& {product.reviewCount} Reviews</p>
                        </div>
                        <ul className="product-description">
                            {product.productDescription.map((desc) => (
                                <li>{desc}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="price-container">
                        <div className="current-price">
                            ₹{" "}
                            {product.price -
                                (product.price * product.discouont) / 100}
                        </div>
                        <div className="previous-price">
                            <p>₹ {product.price}</p>
                            <p className="discount"> {product.discouont} %</p>
                        </div>
                        <p>Free Delivery</p>
                        <p className="offer">Save extra with No Cost EMI</p>
                        <p>Upto {product.exchangeValue} off on exchange</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;
