import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'swiper/css';
import 'swiper/css/pagination';
// import '../styles/animate.css'
import '../styles/themify-icons.css';
import '../styles/sass/style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../components/software-company-components/Footer/Footer";
import Scrollbar from "../components/scrollbar/scrollbar";
import WhatsAppIcon from "../components/software-company-components/WhatsApp/WhatsAppIcon";
import Header from "../components/header/Header";
import Loader from "../components/loader";
import { LoaderProvider } from "../contexts/LoaderContext";
import Landing_Footer from "../components/landing_page/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isLandingPage = router.pathname === "/software-development-company";
  return (
    <LoaderProvider>
      <div>
        <Head>
          <title>Digital Minds On Solutions & Software Company</title>
          <link rel="icon" href="images/site_logo/favicon.png" />
        </Head>
        <Loader />
        <Header />
        <Component {...pageProps} />
       {/* conditionally render footer */}
      {isLandingPage ? <Landing_Footer /> : <Footer />}
        <Scrollbar />
        <WhatsAppIcon />
      </div>
    </LoaderProvider>
  );
}

export default MyApp;
