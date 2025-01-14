import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from 'next/head';

const imageWidth = 600;
const imageHeight = 600;
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Core Web Vitals</title>
        <meta name="description" content="Test for core web vitals" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://next-seo-pi.vercel.app/article/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Core Web Vitals" />
        <meta property="og:description" content="Test for core web vitals" />
        <meta property="og:image" content="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZZU8Z7TMKXmzZT2mCjJU.svg" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="next-seo-pi.vercel.app" />
        <meta property="twitter:url" content="https://next-seo-pi.vercel.app/article/" />
        <meta name="twitter:title" content="Core Web Vitals" />
        <meta name="twitter:description" content="Test for core web vitals" />
        <meta name="twitter:image" content="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZZU8Z7TMKXmzZT2mCjJU.svg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://google.com/article"
            },
            "headline": "Core Web Vitals",
            "image": [
              "https://example.com/photos/1x1/photo.jpg",
              "https://example.com/photos/4x3/photo.jpg",
              "https://example.com/photos/16x9/photo.jpg"
            ],
            "datePublished": "2015-02-05T08:00:00+08:00",
            "dateModified": "2015-02-05T09:20:00+08:00",
            "author": {
              "@type": "Person",
              "name": "John Doe",
              "url": "http://example.com/profile/johndoe123"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Google",
              "logo": {
                "@type": "ImageObject",
                "url": "https://google.com/logo.jpg"
              }
            }
          }`}}/>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Core Web Vitals
        </h1>

        <p>
          Core Web Vitals are the subset of Web Vitals that apply to all web pages, should be measured 
          by all site owners, and will be surfaced across all Google tools. Each of the Core Web Vitals 
          represents a distinct facet of the user experience, is measurable in the field, and reflects 
          the real-world experience of a critical user-centric outcome.
        </p>

        <p>
          The metrics that make up Core Web Vitals will evolve over time. The current set for 2020 focuses 
          on three aspects of the user experience—loading, interactivity, and visual stability—and includes 
          the following metrics (and their respective thresholds):
        </p>

        <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZZU8Z7TMKXmzZT2mCjJU.svg" alt="largest content pain" width={imageWidth} height={imageHeight} />

        <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/iHYrrXKe4QRcb2uu8eV8.svg" alt="first input dealy" width={imageWidth} height={imageHeight} />

        <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dgpDFckbHwwOKdIGDa3N.svg" alt="comulative layout shifts" width={imageWidth} height={imageHeight} />

        <ul>
          <li>
            <strong><a href="/lcp/">Largest Contentful Paint (LCP)</a></strong>: measures <em>loading</em> 
            performance. To provide a good user experience, LCP should occur within <strong>2.5 seconds</strong> of 
            when the page first starts loading.
          </li>
          <li>
            <strong><a href="/fid/">First Input Delay (FID)</a></strong>: measures <em>interactivity</em>. 
            To provide a good user experience, pages should have a FID of <strong>100 
            milliseconds</strong> or less.
          </li>
          <li>
            <strong><a href="/cls/">Cumulative Layout Shift (CLS)</a></strong>: measures 
            <em>visual stability</em>. To provide a good user experience, pages should maintain a 
            CLS of <strong>0.1.</strong> or less.
          </li>
        </ul>

        <p>
          For each of the above metrics, to ensure you&apos;re hitting the recommended target for most 
          of your users, a good threshold to measure is the 75th percentile of page loads, segmented 
          across mobile and desktop devices.
        </p>

        <p>This is a fragment of a <Link href="https://web.dev/i18n/en/vitals/">blog post</Link> by Philip Walton on web.dev</p>
      </main>
    </div>
  )
}
