/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const team = [
    {
      content: "Managing Director and Co-founder. Isaac leads the direction and operations of Amphora Data as well as ensuring customers get the right outcomes. \n Prior to starting Amphora Data, he was an Engagement Manager at McKinsey & Company specialising in data, analytics and technology strategy and transformation. He worked with many of Australia and New Zealand’s largest companies. He also led the start up practice and worked with over 50 early stage companies. \n Isaac has a Ph.D. in Applied Mathematics from UNSW and was the recipient of the prestigious Fulbright award in 2015. His academic work focused on probability in complex systems and he published widely in the area. \n He has previously been involved in the development of IoT hardware and software for yacht racing. \n He grew up on a small farm in Northern NSW where his family still grows citrus",
      title: 'Isaac Donnelly',
      image: siteConfig.baseUrl + 'img/IMG_1205.jpg'
    },
    {
      content: "CTO and Co-Cofounder. \n Rian leads the technology and product development at Amphora Data and also looks after our people. \n Prior to starting Amphora Data, he was a Software Engineer at Microsoft focused on building products on Azure for external clients. \n He holds a double Bachelor of Electrical Engineering & Arts from UNSW and previously worked for a leading industrial IoT solutions provider and software vendor. \n Rian is from Albury-Wodonga, a regional centre located on the Victorian/NSW border where his family still lives.",
      title: 'Rian Finnegan',
      image: siteConfig.baseUrl + 'img/IMG_1211.jpg'
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>We are an experienced team with distinctive expertise in software engineering, data governance, people leadership, operations, agriculture, data science and strategy.</h1>
          </header>
          <GridBlock contents={team} layout="twoRow" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
