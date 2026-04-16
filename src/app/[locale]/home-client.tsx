import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import WhyUs from "@/components/home/WhyUs";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import FeaturedKilimanjaro from "@/components/home/FeaturedKilimanjaro";
import FeaturedZanzibar from "@/components/home/FeaturedZanzibar";
import FeaturedAccommodation from "@/components/home/FeaturedAccommodation";
import GallerySection from "@/components/home/GallerySection";
import Testimonials from "@/components/home/Testimonials";
import ReviewsSection from "@/components/home/ReviewsSection";
import RecommendedBy from "@/components/home/RecommendedBy";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhyUs />
      <FeaturedPackages />
      <FeaturedKilimanjaro />
      <FeaturedZanzibar />
      <FeaturedAccommodation />
      <GallerySection />
      <Testimonials />
      <ReviewsSection />
      <RecommendedBy />
      <CTASection />
    </>
  );
}
