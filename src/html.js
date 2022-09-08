import React from "react"
import PropTypes from "prop-types"
//import './ad.css'

export default function HTML(props) {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <html {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/*<script async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7943122633795545"
              crossOrigin="anonymous"/>*/}
      {props.headComponents}
      <link rel={"stylesheet"} href={'/aab/app.css'}/>
    </head>
    <body {...props.bodyAttributes}>
    {props.preBodyComponents}
    <div
      key={`body`}
      id="___gatsby"
      dangerouslySetInnerHTML={{__html: props.body}}
    />
    {props.postBodyComponents}
    <div id="url">{url}</div>
    <div id="fb-root"></div>
    {/*<script src='https://cdn.jsdelivr.net/gh/RockBlogger/Anti-AdBlocker@main/2.0/code.min.js'/>*/}
    <script src='/aab/app.js'/>
    {/*<script data-ad-client="ca-pub-7943122633795545" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>*/}
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
