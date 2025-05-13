import FeaturedRoom from '../components/featuredAssociacao/featuredAssociacao';
import Gallery from '../components/Gallery/Gallery';
import HeroSection from '../components/HeroSection/HeroSection';
import NewsLetter from '../components/Newsletter/Newsletter'
import PageSearch from '../components/PageSearch/PageSearch';
import { getFeaturedAssociacao } from '../components/libs/apis';

const Home = async () => {
  const featuredAssociacao = await getFeaturedAssociacao();

  return (
    <>
      <HeroSection />
      <PageSearch />
      <FeaturedRoom featuredAssociacao={featuredAssociacao} />
      <Gallery />
      <NewsLetter />
    </>
  );
};

export default Home;