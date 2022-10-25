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
  <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
  </>
  )
}

export default MyApp
