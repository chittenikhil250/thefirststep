import '../styles/index.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Web site created using create-react-app"/>
    <title>The First Step </title>
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
