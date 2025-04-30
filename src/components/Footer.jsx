import { FaXTwitter, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-center py-6 border-t border-gray-100 mt-10">
      <p className="text-gray-600">Copyright © 2025 JoeCode.</p>
      <div className="flex justify-center gap-6 mt-4 text-xl text-gray-700">
        <a href="https://x.com/jctech001" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href="https://wa.me/qr/7AQDB3GTR3MOB1" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://github.com/JoeCode001" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:jctech333@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
