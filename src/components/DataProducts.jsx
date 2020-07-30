import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import classnames from "classnames";

import "./data-products.css";

export const DataProducts = ({ products }) => {
    return (
        <React.Fragment>
            <div>
                {products && products.length && (
                    <section className="data-products">
                        <div className="container">
                            <div>
                                {products.map((props, idx) => (
                                    <Product key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </React.Fragment>
    );
};

function Product({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div
            className={classnames("row")}
            style={{ paddingBottom: "30px", paddingLeft: "60px" }}
        >
            {imgUrl && (
                <div
                    className="text--center"
                    style={{ paddingLeft: "30px", paddingRight: "30px" }}
                >
                    <img src={imgUrl} alt={title} />
                </div>
            )}
            <div style={{ paddingRight: "30px", width: "400px" }}>
                <h3 className="font_large">{title}</h3>
                <p className="font_medium">{description}</p>
            </div>
        </div>
    );
}
