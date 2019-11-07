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

  const supportLinks = [
    {
      image: `${baseUrl}img/undraw_reading_list_4boi.svg`,
      imageAlign: 'left',
      content: `Learn how to use Amphora Data`,
      title: `[Browse Docs](${docUrl( 'doc1.html',)})`,
    },
    {
      image: `${baseUrl}img/undraw_community_8nwl.svg`,
      imageAlign: 'right',
      content: 'Ask questions about the documentation and project',
      title: '[Join the community](https://gitter.im/amphoradata/community)',
    },
    // {
    //   image: `${baseUrl}img/undraw_new_message_2gfk.svg`,
    //   imageAlign: 'left',
    //   content: "Find out what's new with this project",
    //   title: 'Stay up to date',
    // },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>This project is maintained by a dedicated group of people.</p>
          <GridBlock contents={supportLinks} layout="twoColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
