import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Leaf } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const BookingModal = ({ isOpen, onClose, productName }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    quantity: '1',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '919925007996';
    const message = `Hello, I am interested in booking ${productName}.
Name: ${formData.name}
Phone: ${formData.phone}
Quantity: ${formData.quantity}
${formData.message ? `Message: ${formData.message}` : ''}
Please share more details.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            <div className="bg-gradient-to-r from-olive to-olive-dark px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white">Book Now</h3>
                  <p className="text-white/80 text-xs">Premium Skincare Collection</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="p-6">
              <div className="bg-beige/30 rounded-xl p-4 mb-6">
                <p className="text-sm text-soft-gray">Selected Product:</p>
                <p className="font-serif text-lg text-olive font-medium">{productName}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-beige/50 bg-cream/50 focus:border-olive focus:ring-2 focus:ring-olive/20 outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-beige/50 bg-cream/50 focus:border-olive focus:ring-2 focus:ring-olive/20 outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Quantity
                  </label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-beige/50 bg-cream/50 focus:border-olive focus:ring-2 focus:ring-olive/20 outline-none transition-all"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Item' : 'Items'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-beige/50 bg-cream/50 focus:border-olive focus:ring-2 focus:ring-olive/20 outline-none transition-all resize-none"
                    placeholder="Any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-medium tracking-wide"
                  style={{ boxShadow: '0 4px 16px rgba(34, 197, 94, 0.3)' }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Continue to WhatsApp
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
