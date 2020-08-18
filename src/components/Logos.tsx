import React from "react";

const logosStyle: React.CSSProperties = {
    backgroundColor: "var(--amphora-white)",
};
const imgStyle: React.CSSProperties = {
    maxHeight: "10rem",
};
interface Supporter {
    imgPath: string;
    website: string;
}
const supporters: Supporter[] = [
    {
        imgPath: "/img/logos/Sentek.png",
        website: "https://sentektechnologies.com/",
    },
    {
        imgPath: "/img/logos/UNSW_founders.png",
        website: "https://www.yellowstoneresearch.org/",
    },
    {
        imgPath: "/img/logos/YERC.png",
        website: "https://www.founders.unsw.edu.au/",
    },
];

export const Logos = () => {
    return (
        <div className="container">
            {/* <div className="row mt-3">
                <div className="col text-center">
                    <h5>Amphora works with</h5>
                </div>
            </div> */}
            <div
                style={logosStyle}
                className="row text-center align-items-center ml-2 mr-2"
            >
                {supporters.map((s, i) => (
                    <div key={i} className="col-sm">
                        <a href={s.website}>
                            <img
                                style={imgStyle}
                                className="img-fluid"
                                src={s.imgPath}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
