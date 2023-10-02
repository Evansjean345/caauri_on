import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Anime_page from "./pages/Anime_page";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Page_Four from "./pages/Page_Four";
import Page_five from "./pages/Page_five";
import Page_six from "./pages/Page_six";
import Page_three from "./pages/Page_three";
import Page_two from "./pages/Page_two";
import Page_Seven from "./pages/Page_Seven";
import Contact_page from "./pages/Contact_page";
import Navbar from "./Navbar";
import ScrollToTop from "./assets/ScrollToTop";
// ..
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function App() {
  const [menu, setMenu] = useState(true);

  const handleMenuChange = (newMenuValue) => {
    setMenu(newMenuValue);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar onMenuChange={handleMenuChange} />
      <div
        className={
          menu ? "App m-0 p-0 bg-white " : "blur-[7.5px] App m-0 p-0 bg-white "
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/caaurimuniquez" element={<Anime_page />} />
          <Route path="/services" element={<Page_two />} />
          <Route path="/portfolio" element={<Page_three />} />
          <Route path="/client/:id" element={<Page_Four />} />
          <Route path="/blog" element={<Page_five />} />
          <Route path="/blog/:id" element={<Page_six />} />
          <Route path="/carriere" element={<Page_Seven />} />
          <Route path="/contact" element={<Contact_page />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
