import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Leverage your insight</>,
    imageUrl: 'img/data_network.PNG',
    description: (
      <>
        Connect your different data sources instantly. Access your insights remotely and securely.
      </>
    ),
  },
  {
    title: <>Collaborate with others</>,
    imageUrl: 'img/data_network.PNG',
    description: (
      <>
        Integrate with third parties instantly. Access their data and share your own.
      </>
    ),
  },
  {
    title: <>Reduce risk</>,
    imageUrl: 'img/data_infra.PNG',
    description: (
      <>
        Manage access, extract-transfer-load, quality and use from a single workbench.
      </>
    ),
  },
  {
    title: <>Reduce cost</>,
    imageUrl: 'img/data_infra.PNG',
    description: (
      <>
        Focus on what matters to you and leave the data infrastructure to us.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Welcome to Amphora Data ${siteConfig.title}`}
      description="Next gen data storage and integration">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl("https://identity.amphoradata.com/Account/Register")}>
              Register
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
