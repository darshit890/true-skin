import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import ProductSection from "@/components/ProductSection";
import VarnayaBlendsSection from "@/components/Product2";
import { ParallaxBeautySection } from "@/components/BeautySection";
import { ProductShowcase } from "@/components/ProductShowcase";
import CleanJournal from "@/components/Journal";
import ConnectSection from "@/components/Connection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <ProductSection />
      <VarnayaBlendsSection />
      <ParallaxBeautySection />
      <ProductShowcase />
      <CleanJournal />
      <ConnectSection />
      <Footer />
    </>
  );
}
