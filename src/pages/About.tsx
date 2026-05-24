import { motion } from 'framer-motion';
import {
  Leaf,
  Flower2,
  Droplets,
  Recycle,
  Trees,
  Gem,
  Sun,
  Droplet,
} from 'lucide-react';

import WhatsAppButton from '../components/WhatsAppButton';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Deeply Nourishing Ayurveda',
      description:
        'Traditional blends of Black Sesame, Almonds, Pistachio, and fresh Turmeric – formulated to cleanse, tone and nourish.',
    },
    {
      icon: Gem,
      title: 'Sanjeevani & 24K Gold',
      description:
        'Ancient Sanjeevani herb infusion restores youthfulness. Real 24 Karat Gold firms and moisturises for a natural facelift.',
    },
    {
      icon: Sun,
      title: 'Natural Sun Protection',
      description:
        'Yashada Bhasma (mineral organic sunscreen) provides SPF 25–50, shielding skin from UVA/UVB and early aging.',
    },
    {
      icon: Droplet,
      title: 'Pure Cow’s Ghee & Honey',
      description:
        'Aged Cow’s Ghee carries active herbs deep into skin. Organic Honey and Buttermilk give a fine porcelain texture.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-cream">

      {/* ================= HERO ================= */}
      <section className="relative h-[50vh] flex items-center overflow-hidden -mt-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7432860/pexels-photo-7432860.jpeg"
            alt="Natural skincare"
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
              ABOUT US
            </span>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mt-5">
              Organic. Ayurvedic.
              <br />
              <span className="text-gold">Radiant Skin.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ================= BRAND STORY ================= */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* IMAGE (DESKTOP ONLY) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7797115/pexels-photo-7797115.jpeg"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                The First Rule of Organic Skin Care
              </span>

              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-4 mb-7">
                Cleanse, Tone & Nourish
              </h2>

              {/* MOBILE IMAGE */}
              <div className="lg:hidden mb-8">
                <img
                  src="https://images.pexels.com/photos/7797115/pexels-photo-7797115.jpeg"
                  alt="Our Story"
                  className="w-full rounded-3xl shadow-2xl object-cover"
                />
              </div>

              <div className="space-y-6 text-soft-gray text-lg leading-relaxed">
                <p>
                  Inspired by ancient Ayurvedic wisdom and modern skincare science, 
                  <strong className="text-charcoal"> Herbs&Thymes Essentials</strong> brings you 
                  potent organic blends – from <strong>Sanjeevani herb infusion</strong> and 
                  <strong> 24K Gold</strong> to <strong>tender Coconut Water</strong> and 
                  <strong> pure Cow’s Ghee</strong> aged with potent herbs.
                </p>

                <p>
                  Every product is handcrafted in small batches using traditional methods: 
                  Black Sesame, Almonds, Pistachio, fresh Turmeric, Buttermilk, floral waters, 
                  and organic Honey for a fine porcelain texture and satin feel.
                </p>

                <p>
                  We believe in sustainability, ethical sourcing, and wellness for all – with 
                  eco‑friendly reusable glass jars and natural mineral sunscreens 
                  (<strong>Yashada Bhasma</strong>) for UVA/UVB protection.
                </p>
              </div>

              {/* FEATURES */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex items-center gap-3 bg-cream p-4 rounded-2xl">
                  <Flower2 className="w-6 h-6 text-olive" />
                  <span>100% Natural & Organic Herbs</span>
                </div>

                <div className="flex items-center gap-3 bg-cream p-4 rounded-2xl">
                  <Droplets className="w-6 h-6 text-olive" />
                  <span>No Harsh Chemicals / Parabens</span>
                </div>

                <div className="flex items-center gap-3 bg-cream p-4 rounded-2xl">
                  <Recycle className="w-6 h-6 text-olive" />
                  <span>Eco‑Friendly Reusable Glass Jars</span>
                </div>

                <div className="flex items-center gap-3 bg-cream p-4 rounded-2xl">
                  <Trees className="w-6 h-6 text-olive" />
                  <span>Sustainably Sourced Ingredients</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-charcoal">
            Our Signature Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-olive/15">
                    <Icon className="w-8 h-8 text-olive" />
                  </div>

                  <h3 className="font-serif text-xl mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-soft-gray">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-beige text-center">
        <h2 className="font-serif text-4xl mb-6">
          Discover Your Natural Glow
        </h2>

        <p className="text-soft-gray mb-8 max-w-xl mx-auto">
          Join a community that trusts Herbs&Thymes Essentials for deeply nourishing, 
          Ayurvedic skincare – crafted with love and tradition.
        </p>

        <WhatsAppButton />
      </section>
    </div>
  );
};

export default About;