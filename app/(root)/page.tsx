import ContactForm from "@/components/contact-form";
import DealCountdown from "@/components/deal-countdown";
import FAQPage from "@/components/FAQ";
import IconBoxes from "@/components/icon-boxes";
import ReviewsSection from "@/components/ReviewsSection";
import SafeBrowsingTrust from "@/components/SafeBrowsingTrust";
import ProductCarousel from "@/components/shared/product/product-carousel";
import ProductList from "@/components/shared/product/product-list";
import ViewAllProductsButton from "@/components/view-all-products-button";
import CollectionsSection from "@/components/shared/collections-section";
import CollectionsSkeleton from "@/components/shared/collections-section-skeleton";

import {
  getFeaturedProdcuts,
  getLatestProducts,
} from "@/lib/actions/product.actions";

const Home = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProdcuts();

  return (
    <>
      {featuredProducts.length > 0 && (
        <section className="mb-16">
          <ProductCarousel data={featuredProducts} />
        
        </section>
      )}

      <section className="mb-16">
        <ProductList data={latestProducts} title="Newest Arrivals" />
      </section>

      <section className="mb-16">
        <CollectionsSection />
      </section>

      <div className="mt-16 text-center">
        <ViewAllProductsButton />
      </div>

      <section className="mb-16">
        <SafeBrowsingTrust />
      </section>

      <section className="mb-16">
        <DealCountdown />
      </section>

      <section className="mb-16">
        <ReviewsSection />
      </section>

      <section className="mb-16">
        <IconBoxes />
      </section>

    

      <section className="mb-20">
        <FAQPage />
      </section>
    </>
  );
};

export default Home;
