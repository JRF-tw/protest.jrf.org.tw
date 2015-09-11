import React, {Component, PropTypes} from 'react';
import serialize from 'serialize-javascript';
import DocumentMeta from 'react-document-meta';
const cdn = 'https://cdnjs.cloudflare.com/';

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
    return (
      <html lang="zh-Hant-TW">
        <head>
          <meta charSet="utf-8"/>
          <link href={cdn + 'ajax/libs/normalize/3.0.3/normalize.min.css'}
            rel="stylesheet" type="text/css" />
          {DocumentMeta.renderAsReact()}
          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, i) =>
            <link href={assets.styles[style]} key={i} media="screen, projection"
                  rel="stylesheet" type="text/css"/>
          )}
        </head>
        <body>
          <div id="content" className="socialMovementCrime" dangerouslySetInnerHTML={{__html: content}}/>
          <footer>
            <div>2015 Judicial Reform Foundation. Source code available on <a href="https://github.com/JRF-tw/law_in_social_movement" rel="external">GitHub</a>.</div>
          </footer>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} />
          <script src={assets.javascript.main}/>
        </body>
      </html>
    );
  }
}
