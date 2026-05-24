import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  productName?: string;
  className?: string;
  variant?: 'floating' | 'inline';
}

const WhatsAppButton = ({
  productName,
  className = '',
  variant = 'inline',
}: WhatsAppButtonProps) => {
  const phoneNumber = '919925007996';

  const handleClick = () => {
    const message = productName
      ? `Hello, I am interested in booking ${productName}. Please share more details.`
      : 'Hello, I am interested in your premium skincare products. Please share more details.';

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (variant === 'floating') {
    return (
      <motion.button
        onClick={handleClick}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center shadow-lg hover-glow ${className}`}
        style={{ boxShadow: '0 4px 20px rgba(34, 197, 94, 0.4)' }}
      >
        <FaWhatsapp className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulsate" />
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-sans text-sm font-medium tracking-wide hover-glow transition-all ${className}`}
      style={{ boxShadow: '0 4px 16px rgba(34, 197, 94, 0.3)' }}
    >
      <FaWhatsapp className="w-5 h-5" />
      Book on WhatsApp
    </motion.button>
  );
};

export default WhatsAppButton;
