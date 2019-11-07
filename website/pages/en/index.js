/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig.tagline} />
          <PromoSection>
            <Button href={docUrl('overview/about.html')}>Basics</Button>
            <Button href={docUrl('quickstarts/quickstart-web.html')}>Quickstart</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const DataGovernance = () => (
      <Block id="try">
        {[
          {
            content:'Data privacy and security is critical. It is a core part of our operations and who we are. We give you the ability to enable only companies who you want to use your data and all market participants are verified. We operate by the principles outlined in the General Data Protection Regulation.',
            image: `${baseUrl}img/GDPR.jpg`,
            imageAlign: 'right',
            title: 'We offer secure and transparent escrow and trade of data',
          },
        ]}
      </Block>
    );

    const DataIntegration = () => (
      <Block>
        {[
          {
            content: 'Most of a data scientist’s time is spent on basic data engineering and wrangling. This increases development cost and delays release. Our platform provides simple access to many data sources in data scientist ready formats. ',
            image: `${baseUrl}img/Integration_Picture.jpg`,
            imageAlign: 'left',
            title: 'Simplify your data integration through a single portal',
          },
        ]}
      </Block>
    );

    const ProductFeatures0 = () => (
      <Block layout="twoColumn">
        {[
          {
            content: 'Amphora Data is a cloud native application built for data scientists and software engineers. You can interact with Amphorae programmatically via modern web APIs, by using one of our client SDKs, or by using the Amphora Data platform on the web. Amphora Data can be integrated with any modern analytics platform and into any data pipeline.',
            title: 'We are a single point for your data needs',
          },
          {
            content: 'We offer more than just technical integration. We handle the commercials through transparent pricing with money going direct to the data owner. We also surface the terms and conditions for using the data.',
            title: 'We do the commerical and governance parts too',
          },
        ]}
      </Block>
    );

    const ProductFeatures1 = () => (
      <Block layout="twoColumn">
        {[
          {
            content: 'We can handle a range of data sources and types. This includes time series, imagery, 3D models, graphs and more. We have historical data as well as live data feeds. We also show the quality, description and other meta data so you know the data you get is what you need.',
            title: 'We can handle any data you want',
          },
          {
            content: 'We are commodity agnostic and can handle GPS tracking from livestock, soil moisture data from ground crops, plant health from orchards, pest prevelance in sugar cane, yield production in dairy and many more. We also have related non-farm data sources including weather, electricity prices and water flows.',
            title: 'We operate across all agricultural commodities',
          },
        ]}
      </Block>
    );

    const ProductFeatures2 = () => (
      <Block layout="twoColumn">
        {[
          {
            content: 'Data privacy is critical. It is a core part of our operations and who we are. We give you the ability to enable only companies who you want to use your data and all market participants are verified. We operate by the principles outlined in the General Data Protection Regulation.',
            title: 'We provide transparent governance of data',
          },
          {
            content: 'We operate entirely on Microsoft Azure and benefit from their leading security and identity management. We utilise Microsoft 256 bit AES encryption, keep data locally with specific regions, and verify all users and organisations on the platform.',
            title: 'Your data is held securely in escrow',
          },
        ]}
      </Block>
    );

    const ProductFeatures3 = () => (
      <Block layout="twoColumn">
        {[
          {
            content: 'Amphora Data exists to improve the analytics provided for farmers. We do this through increasing the amount of data for analytics and incentivising more data to be collected. All users are verified and can only use data they have permissions for. That means sensitive data is not sold to banks, insurance or seed companies.',
            title: 'We put the farmers first',
          },
          {
            content: 'Pricing is by transaction, not subscription. Data is charged on a one-off or monthly fee and can be set at any price. Prices are set depending on user needs as well as the quality, size and utility of the data contained within the Amphora. We are also offering sizable financial benefits for first time users.',
            title: 'Our pricing is transparent',
          },
        ]}
      </Block>
    );

    const DataTypes = () => (
      <Block>
        {[
          {
            content:
              'We can handle a range of data sources and types. This includes time series, imagery, 3D models, graphs and more. We also can handle many produce types.',
            image: `${baseUrl}img/Data_Source_Icons.jpg`,
            imageAlign: 'left',
            title: 'We can handle any operational data',
          },
        ]}
      </Block>
    );
    
    const PageIntro = () => (
      <Block>
        {[
          {
            // image: `${baseUrl}img/IMG_9353.jpeg`,
            image: `${baseUrl}img/undraw_blooming_jtv6.svg`,
            imageAlign: 'left', 
            title: 'A platform to discover, package, and trade data to improve the sustainability and profitability of farms.',
          },
        ]}
      </Block>
    );

    const DescriptionOverview = () => (
      <Block background = "dark" layout="fourColumn">
        {[
          {
            content: 'Find the data you need to improve your analytics and reporting software for farmers.',
            image: `${baseUrl}img/undraw_map_1r69.svg`,
            imageAlign: 'top',
            title: 'Come and discover new sources',
          },
          {
            content: 'Containerise data to easily share and integrate across the agricultural ecosystem.',
            image: `${baseUrl}img/undraw_deliveries_131a.svg`,
            imageAlign: 'top',
            title: 'Package your data for easy handling and integration',
          },
          {
            content: 'Monetise your data by trading it with verified parties that will improve outcomes on farm.',
            image: `${baseUrl}img/undraw_Container_ship_ok1c.svg`,
            imageAlign: 'top',
            title: 'Trade your data to increase revenue',
          },
        ]}
      </Block>
    );


    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    const AmphoraCounter = () => (
      <div className="amphora-count">
        <div>
          <iframe src="https://beta.amphoradata.com/api/amphoraestats/count?iFrame=true" width="120" height="70">
            Sorry, your browser must support iFrames to see this.
          </iframe>
        </div>
        <div>
          <p>Amphorae and counting!</p>
        </div>
      </div>
    );

    const divStyle = {
      margin: '-70px',
      border: '1px solid white'
    };
    const pStyle = {
      fontSize: '15px',
      textAlign: 'left'
    };
    
    const RemoveGaps = () => (
      <div style={divStyle}>
      </div>
    );

    return (
        <div className="mainContainer">
          <PageIntro />
          <DescriptionOverview />
          <AmphoraCounter />
          <ProductFeatures0 />
          <RemoveGaps />
          <ProductFeatures1 />
          <RemoveGaps />
          <ProductFeatures2 />
          <RemoveGaps />
          <ProductFeatures3 />
        </div>
    );
  }
}

module.exports = Index;