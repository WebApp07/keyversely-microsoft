import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/actions/product.actions";
import ProductPrice from "@/components/shared/product/product-price";
import ProductImages from "@/components/shared/product/product-images";
import AddToCart from "@/components/shared/product/add-to-cart";
import { getMyCart } from "@/lib/actions/cart.actions";
import ReviewList from "./review-list";
import { auth } from "@/auth";
import Rating from "@/components/shared/product/rating";
import RelatedProducts from "@/components/RelatedProducts";
import ProductFeatures from "@/components/shared/product/product-features";

// --- Availability Badge Component (for digital products) ---
const AvailabilityBadge = ({ available }: { available: boolean }) => {
  if (!available) {
    return (
      <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700 dark:bg-red-900 dark:text-red-300">
        ❌ Temporarily unavailable
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
      ✅ Available now
    </span>
  );
};

// --- Delivery Notice ---
const DeliveryNotice = ({ title }: { title: string }) => {
  const hasLifetime = /lifetime/i.test(title);

  return (
    <div
      role="status"
      aria-label={`Digital delivery within 5-30 minutes${
        hasLifetime ? ", plus lifetime activation" : ""
      }`}
      className="inline-flex items-center space-x-4 rounded-full 
        bg-gradient-to-r from-blue-100 to-blue-50 
        px-5 py-2 shadow-sm transition-shadow hover:shadow-md focus:shadow-md
        dark:from-blue-900 dark:to-blue-800"
    >
      <Badge
        variant="outline"
        className="rounded-full border-blue-300 bg-white px-3 py-1 text-blue-700 font-medium
          dark:border-blue-700 dark:bg-blue-950 dark:text-blue-300"
      >
        🚀 Instant Digital Delivery
      </Badge>
      {hasLifetime && (
        <Badge
          variant="outline"
          className="rounded-full border-yellow-400 bg-yellow-50 px-3 py-1 text-yellow-700 font-medium
            dark:border-yellow-600 dark:bg-yellow-900 dark:text-yellow-400"
        >
          🔒 Lifetime Activation
        </Badge>
      )}
      <p className="m-0 text-sm text-gray-700 dark:text-gray-300">
        Delivered via email within{" "}
        <span className="font-semibold">5-30 minutes</span>
        {hasLifetime && <> with lifetime activation</>}
      </p>
    </div>
  );
};

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = (
    await getRelatedProducts(product.category, product.id)
  ).map((relatedProduct) => ({
    ...relatedProduct,
    price: relatedProduct.price.toString(),
    image: relatedProduct.images[0],
  }));

  const session = await auth();
  const userId = session?.user?.id;
  const cart = await getMyCart();

  // For digital products, stock > 0 means "available"
  const isAvailable = product.stock > 0;

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Product Images */}
          <div className="col-span-2">
            <ProductImages images={product.images} />
          </div>

          {/* Product Details */}
          <div className="col-span-2 p-5 sm:p-8">
            <div className="flex flex-col gap-6">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {product.brand} {product.category}
              </p>
              <h1 className="h3-bold text-gray-900 dark:text-gray-100">
                {product.name}
              </h1>

              <DeliveryNotice title={product.name} />

              <ProductFeatures title={product.name} />

              <Rating value={Number(product.rating)} />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {product.numReviews} reviews
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <ProductPrice
                  value={Number(product.price)}
                  className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2
                    dark:bg-green-900 dark:text-green-300"
                />

                {/* Availability Indicator (not stock count) */}
                <AvailabilityBadge available={isAvailable} />
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Product Description
              </h2>
              <div className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
                {product.description.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Action Panel */}
          <div className="col-span-1 sticky top-24 self-start">
            <Card
              className="shadow-sm hover:shadow-md transition-shadow
                bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-700
                text-gray-700 dark:text-gray-300"
            >
              <CardContent className="p-4 space-y-4 text-sm">
                {/* Price */}
                <div className="flex justify-between items-center text-base">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Price
                  </span>
                  <ProductPrice value={Number(product.price)} />
                </div>

                {/* Availability */}
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-base text-gray-900 dark:text-gray-100">
                    Status
                  </span>
                  <AvailabilityBadge available={isAvailable} />
                </div>

                {/* Delivery Info */}
                <section aria-labelledby="delivery-info-title">
                  <h3
                    id="delivery-info-title"
                    className="font-semibold text-base text-gray-900 dark:text-gray-100"
                  >
                    Digital Delivery
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    📧 Delivered via email
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    <strong>Typical delivery:</strong> 5-30 minutes
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Maximum delivery time: 24 hours. Check spam folder if not
                    received.
                  </p>
                </section>

                {/* Return Policy */}
                <section
                  aria-labelledby="return-policy-title"
                  className="mt-4 border-t pt-4"
                >
                  <h3
                    id="return-policy-title"
                    className="font-semibold text-base text-gray-900 dark:text-gray-100"
                  >
                    Returns & Refunds
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    🔁 7-day return policy for defective products
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    See our full{" "}
                    <a
                      href="/return-policy"
                      className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700"
                    >
                      return policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="/refund-policy"
                      className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700"
                    >
                      refund policy
                    </a>
                    .
                  </p>
                </section>

                {/* Confidence Badge */}
                <section
                  aria-labelledby="confidence-badge-title"
                  className="border-t pt-4 mt-4"
                >
                  <h3
                    id="confidence-badge-title"
                    className="font-semibold text-base text-gray-900 dark:text-gray-100"
                  >
                    Shop with confidence
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    ✅ <strong>Genuine Microsoft licenses</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    🛡️ <strong>Secure payment processing</strong>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    📧 <strong>Instant email delivery</strong>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    All licenses are authentic and properly sourced. See our{" "}
                    <a
                      href="/about"
                      className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700"
                    >
                      About Us
                    </a>{" "}
                    page for more information.
                  </p>
                </section>

                {/* Add to Cart */}
                {isAvailable ? (
                  <div className="pt-4">
                    <AddToCart
                      cart={cart}
                      item={{
                        productId: product.id,
                        name: product.name,
                        slug: product.slug,
                        price: product.price,
                        qty: 1,
                        image: product.images![0],
                      }}
                    />
                  </div>
                ) : (
                  <div className="pt-2">
                    <p className="text-sm text-red-600 dark:text-red-400 mb-2">
                      This product is temporarily unavailable.
                    </p>
                    <a
                      href="/contact"
                      className="text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-700"
                    >
                      Contact us for availability
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mt-10">
        <h2 className="h2-bold mb-5 text-gray-900 dark:text-gray-100">
          Customer Reviews
        </h2>
        <ReviewList
          userId={userId || ""}
          productId={product.id}
          productSlug={product.slug}
        />
      </section>

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />
    </>
  );
};

export default ProductDetailsPage;
