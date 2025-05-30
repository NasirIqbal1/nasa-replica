import EarthInfoSection from "../components/EarthInfoSection";
import SubscriptionBanner from "../components/ExploreUniver/SubscriptionBanner";
import FeaturedNews from "../components/FeaturedNews/featurednews";
import NASAFooter from "../components/Footer/NASAFooter";
import Header from "../components/HeaderSection/Header";
import Hero from "../components/HeroSection/Hero";
import {
  heroImageUrls,
  heroSubtitle,
  heroTitle,
} from "../components/HeroSection/HeroContent";
import MarsInfraredSection from "../components/MarsInfraredSection/MarsInfraredSection";
import NasaCards from "../components/MoreNASAImages/nasaCards";
import MoreTopics from "../components/MoreTopicsFromNASA/MoreTopics";
import SimulatingFlight from "../components/SimulatingFlight/SimulatingFlight";

import SolarSystemGrid from "../components/SolarSystem/SolarSystemGrid";
import StarField from "../components/StarField";

function HomePage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <StarField />
      <Header />

      <main>
        <Hero
          title={heroTitle}
          subtitle={heroSubtitle}
          imageUrls={heroImageUrls}
        />

        {/* <MissionHighlights /> */}
        {/* <SpaceImage
          title="Pillars of Creation in the Eagle Nebula"
          date="June 15, 2025"
          explanation="The Eagle Nebula's Pillars of Creation, as captured by the James Webb Space Telescope, reveal in stunning detail the process of star formation within these cosmic structures."
          imageUrl="https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        /> */}
        {/* <NewsSection /> */}
        {/* <ImageGallery /> */}
      </main>
      <FeaturedNews />
      <SimulatingFlight />
      <MarsInfraredSection />

      <SolarSystemGrid />
      <NasaCards />
      <SubscriptionBanner />
      <EarthInfoSection />
      <MoreTopics />

      {/* <Footer /> */}
      <NASAFooter />
    </div>
  );
}

export default HomePage;
