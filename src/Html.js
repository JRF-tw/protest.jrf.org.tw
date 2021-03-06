import React, {Component, PropTypes} from 'react';
import serialize from 'serialize-javascript';
import { footnotes } from './data';
import DocumentMeta from 'react-document-meta';
const cdn = 'https://cdnjs.cloudflare.com/';
import { gtmId } from "./config";
import gtm from "./utils/gtm";

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.object,
    store: PropTypes.object
  }

  render() {
    const {assets, component, store} = this.props;
    const content = React.renderToString(component);
    const gtmStyles = {
      display: 'none',
      visibility: 'hidden'
    };
    // add this to head if you have seperated css file
    // <link href={assets.styles.main} rel="stylesheet" type="text/css" />
    // if you want to transfer data to client javascript, add this and use window.__data as store
    // <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} />
    return (
      <html lang="zh-Hant-TW">
        <head>
          <meta charSet="utf-8"/>
          <base target="_blank" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <link href={cdn + 'ajax/libs/normalize/3.0.3/normalize.min.css'}
            rel="stylesheet" type="text/css" />
          <link href={assets.styles.main} rel="stylesheet" type="text/css" />
          <noscript><iframe src={ '//www.googletagmanager.com/ns.html?id=' + gtmId }
            height="0" width="0" style={gtmStyles}></iframe></noscript>
          <script dangerouslySetInnerHTML={ {__html: gtm.replace('{gtmId}', gtmId)} } />
          {DocumentMeta.renderAsReact()}
        </head>
        <body>
          <div id="content" className="socialMovementCrime" dangerouslySetInnerHTML={{__html: content}}/>
          <div className="footnotes" dangerouslySetInnerHTML={{__html: footnotes}} />
          <footer>
            <div>2015 Judicial Reform Foundation. Source code available on <a href="https://github.com/JRF-tw/law_in_social_movement" rel="external">GitHub</a>.</div>
          </footer>
          <script src={assets.javascript.main}/>
        </body>
      </html>
    );
  }
}
