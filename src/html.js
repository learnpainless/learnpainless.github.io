import React from "react"
import PropTypes from "prop-types"
//import './ad.css'

export default function HTML(props) {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <link rel={"stylesheet"} href={'/anti-adblock.css'}/>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <div id="url">{url}</div>
        <div id="fb-root"></div>
        <script src='https://cdn.jsdelivr.net/gh/RockBlogger/Anti-AdBlocker@main/2.0/code.min.js'/>

        {/* <script async defer crossOrigin={"anonymous"} src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v7.0&appId=245392315801658&autoLogAppEvents=1" nonce="9RXWqeSW"></script>
        <script async defer src="https://platform.twitter.com/widgets.js" charSet={"utf-8"}></script>
        <script async defer src="https://apis.google.com/js/platform.js"></script> */}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
