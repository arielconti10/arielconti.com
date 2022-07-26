/**
 * File used by next-seo
 *
 * @see https://github.com/garmeeh/next-seo
 */
export default {
  titleTemplate: '%s - Next Boilerplate',
  openGraph: {
    type: 'website',
    locale: 'en',
    url: 'https://arielconti.vercel.app',
    site_name: 'Next Boilerplate',
    title: 'Next Boilerplate',
    images: [
      {
        url: 'https://raw.githubusercontent.com/vinihvc/next-boilerplate/master/public/img/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Next Boilerplate'
      }
    ]
  },
  twitter: {
    handle: '@arielsp11',
    site: 'http',
    cardType: 'summary_large_image'
  }
}
