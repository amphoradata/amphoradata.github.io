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

  const valuesList = [
    {
      title: '1. We hold information securely and responsibly',
    },
    {
      title: '2. We hold ourselves to the highest standards of integrity',
    },
    {
      title: '3. We deliver and measure impact for us and our customers',
    },
    {
      title: '4. We operate honestly and transparently',
    },
    {
      title: '5. We seek out diverse opinions',
    },
    {
      title: '6. We consistently challenge ourselves to be the best',
    },
    {
      title: '7. We support our team, customers, and farmers to achieve more',
    },
    {
      title: '8. We will only succeed together.',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Vision and values</h1>
          </header>
          <p>Our vision is to operate the leading agricultural data market globally. To do this, we operate by 8 values.</p>
          <GridBlock contents={valuesList} layout="oneColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
