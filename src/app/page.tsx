
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import Banner from "@/components/Banner";
import HomeProducts from "@/components/HomeProducts";
import HeaderSlider from "@/components/HeaderSlider";
import FeaturedProduct from "@/components/FeaturedProduct";

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider/>
        <HomeProducts/>
        <FeaturedProduct/>
        <Banner />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
}
