import MainLayout from '../components/layouts/MainLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || MainLayout
  return <Layout><Component {...pageProps} /> </Layout>
}

export default MyApp
