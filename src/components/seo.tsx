import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import urljoin from 'url-join';

type SEOProps = {
  description?: string
  lang?: string
  meta?: any
  keywords?: any
  title: string,
  isHome?: boolean
  tagLine?: string
  dateModified?: string
  datePublished?: string
  postUrl?: string
  thumbnail?: string
  slug?: string
}

const SEO: React.FunctionComponent<SEOProps> = ({
  description,
  lang,
  meta,
  keywords,
  title,
  isHome,
  tagLine,
  dateModified,
  datePublished,
  postUrl,
  thumbnail,
  slug,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            tagLine
            about
          }
        }
      }
    `
  )

  const logoUrl = urljoin(site.siteMetadata.siteUrl, 'logo.png');

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${isHome ? tagLine : site.siteMetadata.title}`}
      link={[
        {
          rel: `canonical`,
          href: (isHome || slug == null) ? site.siteMetadata.siteUrl : urljoin(site.siteMetadata.siteUrl, slug)
        }
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `article`,
        },
        {
          property: `og:url`,
          content: (isHome || slug == null) ? site.siteMetadata.siteUrl : urljoin(site.siteMetadata.siteUrl, slug),
        },
        {
          property: `og:image`,
          content: thumbnail != null ? thumbnail : logoUrl,
        },
        {
          property: `og:site_name`,
          content: process.env.TITLE,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          property: `article:publisher`,
          content: urljoin('https://www.facebook.com', process.env.FACEBOOK),
        },
        {
          property: `article:author`,
          content: urljoin('https://www.facebook.com', process.env.FACEBOOK),
        },
        {
          property: `fb:app_id`,
          content: process.env.FACEBOOK_APP_ID,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: `@${process.env.TWITTER}`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:site`,
          content: `@${process.env.TWITTER}`,
        },
        {
          name: `twitter:image`,
          content: thumbnail != null ? thumbnail : logoUrl,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
            : []
        )
        .concat(meta)}
    >
      {/*{
        isHome ? <script></script> : <script data-ad-client="ca-pub-7943122633795545" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      }*/}
      {
        isHome ?
          <script type="application/ld+json">
            {`
            {
              "@context": "http://schema.org",
              "@type": "WebSite",
              "url": "${site.siteMetadata.siteUrl}",
              "name": "${title}",
              "description": "${metaDescription}",
              "mainEntityOfPage": {
                  "@context": "http://schema.org",
                  "@type": "WebPage",
                  "@id": "${site.siteMetadata.siteUrl}"
              },
              "alternateName": "${tagLine}",
              "potentialAction": {
                  "@context": "http://schema.org",
                  "@type": "SearchAction",
                  "target": "${site.siteMetadata.siteUrl}/search-result.html?cx=partner-pub-7943122633795545%3A3898700314&cof=FORID%3A10&ie=UTF-8&q={search_term_string}",
                  "query-input": "required name=search_term_string"
              },
              "sameAs": [
                "https://www.facebook.com/LearnPainLess/",
                "https://twitter.com/LearnPainLess",
                "https://www.instagram.com/learnpainless/",
                "https://in.pinterest.com/learnpainless/",
                "https://learnpainless.tumblr.com/",
                "https://www.linkedin.com/company/prolong-services/"
              ]
            },
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "url": "${site.siteMetadata.siteUrl}",
              "name": "${title}",
              "description": "${metaDescription}",
              "logo": {
                  "@context": "http://schema.org",
                  "@type": "ImageObject",
                  "url": "${logoUrl}",
                  "width": 257,
                  "height": 150
              },
              "sameAs": [
                "https://www.facebook.com/LearnPainLess/",
                "https://twitter.com/LearnPainLess",
                "https://www.instagram.com/learnpainless/",
                "https://in.pinterest.com/learnpainless/",
                "https://learnpainless.tumblr.com/",
                "https://www.linkedin.com/company/prolong-services/"
              ]
            },
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "url": "https://prolongservices.com/",
              "name": "Pawneshwer Gupta",
              "description": "${site.siteMetadata.about}",
              "image": [
                  {
                      "@context": "http://schema.org",
                      "@type": "ImageObject",
                      "url": "${logoUrl}",
                      "width": 512,
                      "height": 512
                  }
              ],
              "sameAs": [
                "https://www.facebook.com/ProlongServices/",
                "https://twitter.com/ProlongServices",
                "https://www.linkedin.com/company/prolong-services/",
                "https://www.instagram.com/prolong.services/",
                "https://www.reddit.com/user/prolongservices",
                "https://www.youtube.com/c/ProlongServices",
                "https://github.com/prolongservices"
              ]
            }
          `}
          </script>
          :
          <script type="application/ld+json">
            {`
            {
              "@context": "http://schema.org",
              "@type": "TechArticle",
              "url": "${postUrl}",
              "name": "${title}",
              "description": "${metaDescription}",
              "mainEntityOfPage": {
                  "@context": "http://schema.org",
                  "@type": "WebPage",
                  "@id": "${postUrl}"
              },
              "headline": "${title}",
              "datepublished": "${datePublished}",
              "datemodified": "${dateModified}",
              "inLanguage": "en_US",
              "publisher": {
                  "@context": "http://schema.org",
                  "@type": "Organization",
                  "url": "${site.siteMetadata.siteUrl}",
                  "name": "${title}",
                  "description": "${metaDescription}",
                  "logo": {
                      "@context": "http://schema.org",
                      "@type": "ImageObject",
                      "url": "${logoUrl}",
                      "width": 257,
                      "height": 150
                  }
              },
              "sameAs": [
                "https://www.facebook.com/LearnPainLess/",
                "https://twitter.com/LearnPainLess",
                "https://www.instagram.com/learnpainless/",
                "https://in.pinterest.com/learnpainless/",
                "https://learnpainless.tumblr.com/",
                "https://www.linkedin.com/company/prolong-services/"
              ],
              "author": [
                  {
                      "@context": "http://schema.org",
                      "@type": "Person",
                      "url": "https://prolongservices.com/",
                      "name": "Pawneshwer Gupta",
                      "description": "${site.siteMetadata.about}",
                      "image": [
                          {
                              "@context": "http://schema.org",
                              "@type": "ImageObject",
                              "url": "${logoUrl}",
                              "width": 512,
                              "height": 512
                          }
                      ],
                      "sameAs": [
                      "https://www.facebook.com/ProlongServices/",
                      "https://twitter.com/ProlongServices",
                      "https://www.linkedin.com/company/prolong-services/",
                      "https://www.instagram.com/prolong.services/",
                      "https://www.reddit.com/user/prolongservices",
                      "https://www.youtube.com/c/ProlongServices",
                      "https://github.com/prolongservices"
                    ]
                  }
              ],
              "image": [
                  {
                      "@context": "http://schema.org",
                      "@type": "ImageObject",
                      "url": "${thumbnail}",
                      "width": 500,
                      "height": 500
                  }
              ]
            }
          `}
          </script>

      }
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y5PL7MWQFT"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GOOGLE_ANALYTICS}');
        `}
      </script>
      {
        isHome
          ?
          <script></script>
          :
          <script async defer crossOrigin={"anonymous"} src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v7.0&appId=245392315801658&autoLogAppEvents=1" nonce="9RXWqeSW"></script>

      }
      {/* {
        isHome
          ?
          <script></script>
          :
          <script async defer src="https://platform.twitter.com/widgets.js" charSet={"utf-8"}></script>

      } */}
      {
        isHome
          ?
          <script></script>
          :
          <script async defer src="https://apis.google.com/js/platform.js"></script>

      }

    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

export default SEO
