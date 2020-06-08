import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";

function FindData() {
  return (
    <Layout title="Data Catalogue">
      <div className="container container--fluid">
        <div className={classnames("row mt-12", styles.justifyContentCenter)}>
          <div className="col col--9">
            <p className="font_large">You can get the insights you need in 30 seconds</p>
            <div className={classnames("row mt-4", styles.spaceEvenly)}>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="find-data"
                >
                  Vegetation
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium_bold text--black"
                  to="find-data-weather"
                >
                  Weather
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="find-data-water"
                >
                  Water
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="find-data-soil"
                >
                  Soil
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="find-data-economic"
                >
                  Economic
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="find-data-other"
                >
                  Other
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classnames("row", styles.justifyContentCenter)}>
          <div className="col col--9">
            <hr
              style={{
                borderWidth: "0.5px",
              }}
            />
          </div>
        </div>

        <div>
          {features && features.length && (
            <section className={styles.features}>
              <div className="container">
                <div>
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>  
      </div>
      
    </Layout>
  );
}

const features = [
  {
    title: <>Weather forecasts</>,
    imageUrl: 'img/26_Kings_rd_NDVI_180220.png',
    description: (
      <>
        7 day weather forecasts for any location in Australia

        100s of locations available now for $2 per month. More available on request.
      </>
    ),
  },
  {
    title: <>Weather actuals</>,
    imageUrl: 'img/Forest_image.PNG',
    description: (
      <>
        Real-time actuals of weather parameters for any location in Australia

        100s of locations available now for $2 per month. More available on request. 
      </>
    ),
  },
  {
    title: <>Solar Irradiance</>,
    imageUrl: 'img/weed_image.PNG',
    description: (
      <>
        Real-time actuals of solar irradiance for any location in Australia
        Any location available on request for $2 per month.
      </>
    ),
  },
  {
    title: <>Comparison of actuals to month forecast﻿</>,
    imageUrl: 'img/weed_image.PNG',
    description: (
      <>
        Comparison of actual rainfall and temperature to BOM month forecast across Australia.

        Any location available on request for $2 per month.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('row', styles.feature)} style={{ paddingBottom: "30px"}}>
      {imgUrl && (
        <div className="text--center" style={{ paddingLeft: "60px",  paddingRight: "60px"}}>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div style={{paddingRight: "60px", width: "600px"}}>
        <h3 className = "font_large">{title}</h3>
        <p className = "font_medium">{description}</p>
      </div>
      <div className={styles.buttons} >
        <Link
          className="font_medium text--white"
          to={useBaseUrl("https://identity.amphoradata.com/Account/Register")}
        >
          Get data
        </Link>
      </div>
    </div>
  );
}

export default FindData;