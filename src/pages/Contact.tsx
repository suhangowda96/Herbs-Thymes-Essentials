import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, Send, CheckCircle, Leaf } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ ONLY CHANGE IS HERE (WHATSAPP REDIRECT)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "919925007996"; // WhatsApp number (no +)

    const message = `
🌿 New Contact Request - Herbs & Thymes

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📌 Subject: ${formData.subject}

💬 Message:
${formData.message}
    `;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Keep your success UI (no style change)
    setIsSubmitted(true);

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 99250 07996'],
      link: 'tel:+919925007996',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@herbsnthymes.com'],
      link: 'mailto:hello@herbsnthymes.com',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM – 7:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-cream">

      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center overflow-hidden -mt-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6724517/pexels-photo-6724517.jpeg"
            alt="Contact Herbs & Thymes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Get in Touch
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-white mt-5">
              Contact Us
            </h1>
            <p className="text-white/80 max-w-xl mx-auto mt-4">
              We’re here to guide you on your Ayurvedic skincare journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-cream rounded-3xl p-7 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-olive/15">
                    <Icon className="w-6 h-6 text-olive" />
                  </div>
                  <h3 className="font-serif text-lg text-charcoal mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-soft-gray text-sm">
                      {info.link ? (
                        <a href={info.link} className="hover:text-gold transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + WhatsApp */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg h-full"
            >
              <div className="flex items-center gap-2 text-gold mb-2">
                <Leaf className="w-4 h-4" />
                <span className="text-xs tracking-[0.2em] uppercase font-medium">
                  Send Message
                </span>
              </div>

              <h2 className="font-serif text-3xl text-charcoal mt-1 mb-3">
                Let’s Connect
              </h2>

              <p className="text-soft-gray text-sm mb-6">
                Have questions about our products, orders, or custom Ayurvedic blends? Drop us a message.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-beige focus:border-olive focus:ring-2 focus:ring-olive/20 outline-none transition bg-cream/30"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-beige focus:border-olive focus:ring-2 focus:ring-olive/20 outline-none transition bg-cream/30"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-beige focus:border-olive focus:ring-2 focus:ring-olive/20 outline-none transition bg-cream/30"
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-beige focus:border-olive focus:ring-2 focus:ring-olive/20 outline-none transition bg-cream/30"
                  >
                    <option value="">Select Subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="custom">Custom Formulation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-beige focus:border-olive focus:ring-2 focus:ring-olive/20 outline-none transition resize-none bg-cream/30"
                />

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-olive text-white font-medium flex items-center justify-center gap-2 hover:bg-olive-dark transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                {isSubmitted && (
                  <div className="flex items-center gap-2 text-olive bg-olive/10 p-3 rounded-xl text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Thank you! We’ll get back to you soon.
                  </div>
                )}
              </form>
            </motion.div>

            {/* WhatsApp Card */}
            <div className="h-full">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden shadow-lg h-full flex flex-col"
              >
                <img
                  src="https://images.pexels.com/photos/4041425/pexels-photo-4041425.jpeg"
                  alt="WhatsApp support"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 flex flex-col justify-between h-full p-7 text-white">
                  <div>
                    <h3 className="font-serif text-2xl mb-2">
                      Quick Support
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      Chat with us on WhatsApp – we reply within minutes.
                    </p>
                  </div>
                  <div>
                    <WhatsAppButton productName="contact support" />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;