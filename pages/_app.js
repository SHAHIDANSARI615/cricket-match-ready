import '../styles/globals.css'
import Navbar from '../components/Navbar' // ✅ Import Navbar component

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar /> {/* ✅ Navbar will appear on all pages */}
      <Component {...pageProps} />
    </>
  )
}
