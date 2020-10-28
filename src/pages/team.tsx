import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

interface Details {
    name: string;
    position: string;
    linkedIn: string;
    imagePath: string;
}
const Person: React.FunctionComponent<Details> = (p) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm p-3 d-none d-sm-none d-md-block">
                    <img
                        className="img-fluid avatar"
                        src={p.imagePath}
                        alt={`Portrait of ${p.name}`}
                        style={{ maxHeight: "500px" }}
                    />
                </div>
                <div className="col-8">
                    <h2>
                        <Link to={p.linkedIn}>{p.name}</Link>
                    </h2>
                    <h3>{p.position}</h3>
                    {p.children}
                </div>
            </div>
        </React.Fragment>
    );
};

function leadership_team() {
    return (
        <Layout title="Leadership Team">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8 mt-5">
                        <div>
                            <h2 className="text-center">
                                We Are An Experienced Team With Distinctive
                                Expertise In Software Engineering, Data
                                Governance, People Leadership, Operations,
                                Data Science And Strategy.
                            </h2>
                        </div>
                    </div>
                </div>
                <hr />

                <Person
                    name="Isaac Donnelly"
                    position="Managing Director and Founder"
                    imagePath="img/IMG_1205.jpg"
                    linkedIn="https://linkedin.com/isaac-donnelly"
                >
                    <p className="font_medium mb-4">
                        Isaac leads the direction and operations of Amphora Data
                        as well as ensuring customers get the right outcomes.
                    </p>
                    <p className="font_medium mb-4">
                        He was previously an Engagement Manager at McKinsey &
                        Company specialising in data, analytics and technology
                        strategy and transformation.
                    </p>
                    <p className="font_medium mb-4">
                        Isaac has a Ph.D. in Applied Mathematics from UNSW and
                        was the recipient of the prestigious Fulbright award in
                        2015.
                    </p>
                </Person>

                <Person
                    name="Rian Finnegan"
                    position="Technology Lead and Founder"
                    imagePath="img/IMG_1209.jpg"
                    linkedIn="https://linkedin.com/rian-finnegan"
                >
                    <p className="font_medium mb-4">
                        Rian leads the technology and product development at
                        Amphora Data and also looks after our people.
                    </p>
                    <p className="font_medium mb-4">
                        Prior to starting Amphora Data, he was a Software
                        Engineer at Microsoft focused on building products on
                        Azure for external clients.
                    </p>
                    <p className="font_medium mb-4">
                        He holds a double Bachelor of Electrical Engineering &
                        Arts from UNSW.
                    </p>
                </Person>
            </div>
        </Layout>
    );
}

export default leadership_team;
