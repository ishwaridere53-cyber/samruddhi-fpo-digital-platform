import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Brands />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}
