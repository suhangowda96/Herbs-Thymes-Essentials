import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingModal from '../components/BookingModal';
import WhatsAppButton from '../components/WhatsAppButton';
import { products } from '../data/products';

// Add IDs
const productsWithId = products.map((product, index) => ({
  ...product,
  id: index.toString(),
}));

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const currentProduct = productsWithId.find(
    (p) => p.id === selectedProduct
  );

  return (
    <div className="min-h-screen bg-cream pt-24">

      {/* ================= HERO ================= */}
      <section className="relative h-[50vh] flex items-center overflow-hidden -mt-24">

        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/11179541/pexels-photo-11179541.jpeg"
            alt="Organic skincare products"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Premium Collection
            </span>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mt-5">
              Organic Luxury
              <br />
              <span className="text-gold">Skincare Essentials</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Our Products
            </span>

            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-4 mb-5">
              Handcrafted Ayurvedic Range
            </h2>

            <p className="text-soft-gray max-w-2xl mx-auto">
              Each product is made in small batches to preserve purity,
              potency, and freshness.
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {productsWithId.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">

                    {/* Image */}
                    <div className="aspect-[4/5] flex items-center justify-center p-5 bg-white">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 border-t border-beige/30">

                      <h3 className="font-serif text-2xl text-charcoal mb-2 line-clamp-1">
                        {product.name}
                      </h3>

                      <p className="text-gold text-sm font-medium mb-3">
                        {product.size}
                      </p>

                      <p className="text-soft-gray text-sm leading-relaxed line-clamp-3 mb-5">
                        {product.description}
                      </p>

                      <button
                        onClick={() => setSelectedProduct(product.id)}
                        className="w-full py-3 rounded-2xl bg-olive text-white font-medium hover:bg-olive-dark transition-all duration-300"
                      >
                        Book on WhatsApp
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ================= CUSTOM ORDERS ================= */}
      <section className="py-24 bg-white text-center relative overflow-hidden">

        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Custom Orders
            </span>

            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-4 mb-6">
              Personalized Skincare
            </h2>

            <p className="text-soft-gray text-lg mb-8 leading-relaxed">
              Need something specially made for your skin concerns?
              We create custom Ayurvedic formulations tailored just for you.
            </p>

            <WhatsAppButton />
          </motion.div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <BookingModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        productName={currentProduct?.name || ''}
      />
    </div>
  );
};

export default Products;