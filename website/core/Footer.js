/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="68"
              />
            )}
          </a>
          <div>
           <h5>Developers</h5>
            <a className="github-button" href="https://github.com/amphoradata" data-color-scheme="no-preference: dark; light: light; dark: dark;" aria-label="Follow @amphoradata on GitHub">Follow @amphoradata</a>
            <a href="https://gitter.im/amphoradata/community" target="_blank">Gitter</a>
          </div>
          <div>
            <h5>Quick Links</h5>
              <a href="https://beta.amphoradata.com" target="_blank">Amphora App</a>
              <a href="https://beta.amphoradata.com/swagger/index.html" target="_blank">Open API Definition</a>
          </div>
          <div>
           <h5>About</h5>
            {/* <a href={`${this.props.config.baseUrl}blog`}>Blog</a> */}
            <a href={this.pageUrl('team', this.props.language)}>Team</a>
            <a href={this.pageUrl('careers', this.props.language)}>Careers</a>
            <a href={this.pageUrl('values', this.props.language)}>Values</a>
          </div>
        </section>

        <a
          href="https://amphoradata.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/Amphora_Data_Logo_white.png`}
            alt="Amphora Data"
            width="170"
            height="35"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
