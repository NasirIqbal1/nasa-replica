import NASAFooter from "../components/Footer/NASAFooter";
import Header from "../components/HeaderSection/Header";
import Hero_Nasa_Live from "../components/HeroSectionNasaLive/Hero_Nasa_Live";

import Mainpagedata from "../components/PageContent/Mainpagedata";
import NasaAppBanner from "../components/PageContent/NasaAppBanner";

function NasaLive() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#17171b] ">
      {/* <StarField /> */}
      <Header />

      <main>
        <Hero_Nasa_Live />
      </main>

      <Mainpagedata />
      <NasaAppBanner />
      <NASAFooter />
    </div>
  );
}

export default NasaLive;
