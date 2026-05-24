import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Leaf,
  Award,
  Droplets,
  Sparkles,
} from 'lucide-react';

import { FaWhatsapp } from 'react-icons/fa';

import { products } from '../data/products';
import heroimage from '../images/hero.jpg';

const Home = () => {
  const heroRef = useRef(null);

  const isHeroInView = useInView(heroRef, {
    once: true,
  });

  // Featured Products
  const featuredProducts = products.slice(0, 3);

  const heroBgImage = heroimage;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroBgImage}
            alt="Luxury Organic Skincare"
            className="w-full h-full object-cover object-center"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(16,24,16,0.72) 0%, rgba(32,20,10,0.45) 45%, rgba(212,175,55,0.15) 100%)',
            }}
          />

          {/* Bottom Fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/20 rounded-full blur-3xl animate-pulse" />

        <div
          className="absolute bottom-10 left-10 w-96 h-96 bg-olive/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-32 md:pb-24">
          <div className="text-center">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
            >
              Nature&apos;s Luxury
              <br />
              <span className="text-gold">For Your Skin</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Experience organic Ayurvedic skincare enriched with saffron,
              turmeric, sandalwood, aloe vera, and precious herbal extracts
              for naturally radiant skin.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-3 flex-wrap"
            >
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-5 md:px-8 py-3 md:py-4 bg-gold text-charcoal rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-2xl text-sm md:text-base"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>

              <a
                href="https://wa.me/919925007996?text=Hello,%20I%20am%20interested%20in%20your%20premium%20skincare%20products.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 md:px-8 py-3 md:py-4 bg-white/10 border border-white/20 backdrop-blur-md text-white rounded-full transition-all duration-300 text-sm md:text-base hover:bg-gold hover:text-charcoal hover:border-gold shadow-xl"
              >
                <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5" />

                <span className="font-medium">
                  Book on WhatsApp
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Featured Collection
            </span>

            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-3 mb-4">
              Our Bestsellers
            </h2>

            <p className="text-soft-gray max-w-2xl mx-auto">
              Handcrafted with love and the purest organic ingredients.
              Each product tells a story of nature&apos;s healing power.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to="/products" className="block">
                  <div className="relative overflow-hidden rounded-3xl bg-beige/30 hover-lift shadow-luxury">
                    {/* Product Image */}
                    <div className="aspect-[4/5] bg-white flex items-center justify-center p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition-all duration-500"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                    {/* Product Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-serif text-2xl mb-1">
                        {product.name}
                      </h3>

                      <p className="text-gold text-sm font-medium mb-2">
                        {product.size}
                      </p>

                      <p className="text-white/80 text-sm line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View All Products

              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-olive/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Why Choose Us
            </span>

            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-3">
              The Herbs&Thymes Difference
            </h2>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: '100% Organic',
                description:
                  'Pure, natural ingredients sourced from trusted organic farms.',
              },
              {
                icon: Shield,
                title: 'Cruelty-Free',
                description:
                  'Never tested on animals. Beauty without harming.',
              },
              {
                icon: Award,
                title: 'Premium Quality',
                description:
                  'Small batch production ensuring the highest standards.',
              },
              {
                icon: Sparkles,
                title: 'Ayurvedic Wisdom',
                description:
                  'Ancient recipes perfected for modern skincare needs.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white shadow-luxury hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-olive/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-olive" />
                </div>

                <h3 className="font-serif text-xl text-charcoal mb-3">
                  {item.title}
                </h3>

                <p className="text-soft-gray text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organic Ingredients */}
      <section className="py-20 md:py-32 bg-olive relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <pattern
              id="leaves2"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M15 0 Q20 15 15 30 Q10 15 15 0"
                fill="currentColor"
              />
            </pattern>

            <rect
              width="100%"
              height="100%"
              fill="url(#leaves2)"
              className="text-white"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Natural Ingredients
              </span>

              <h2 className="font-serif text-4xl md:text-5xl text-white mt-3 mb-6">
                The Power of Nature
              </h2>

              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Our formulations combine the finest organic herbs,
                pure essential oils, and time-honored Ayurvedic
                ingredients. Each component is carefully selected
                for its proven benefits and healing properties.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  'Saffron',
                  'Sandalwood',
                  'Turmeric',
                  'Neem',
                  'Aloe Vera',
                  'Desi Ghee',
                ].map((ing) => (
                  <div
                    key={ing}
                    className="flex items-center gap-2 text-white/90"
                  >
                    <Droplets className="w-4 h-4 text-gold" />

                    <span className="font-medium">{ing}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/23511158/pexels-photo-23511158.jpeg"
                  alt="Natural ingredients"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold/20 rounded-3xl -z-10" />

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;