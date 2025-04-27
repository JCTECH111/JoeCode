import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Import your images
import MainImage from "../assets/project-7.png";
import project_1 from '../assets/project-1.png';
import project_2 from '../assets/project-2.png';
import project_3 from '../assets/project-3.png';
import project_4 from '../assets/project-4.png';
import project_5 from "../assets/project-5.png"


function ProductImage({ image, onExpand, isActive }) {
  return (
    <motion.div
      className={`relative cursor-pointer ${isActive ? 'ring-4 ring-blue-500' : 'hover:ring-2 ring-gray-200'}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onExpand(image)}
      layout
    >
      <motion.img
        src={image}
        alt="Gallery item"
        className="w-full h-full object-cover"
        layoutId={`product-${image}`}
        transition={{ duration: 0.3 }}
      />
      {isActive && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <span className="bg-white px-3 py-1 rounded-full text-sm font-medium">
            Current View
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function ImageGallery() {
  // Use your actual imported images
  const [galleryImages, setGalleryImages] = useState([project_1, project_2, project_3, project_4, project_5]);
  const [primaryImage, setPrimaryImage] = useState(MainImage);

  function setAsPrimary(image) {
    const currentImage = primaryImage;
    const newGalleryImages = [
      ...galleryImages.filter(img => img !== image),
      currentImage
    ];

    setPrimaryImage(image);
    setGalleryImages(newGalleryImages);
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <main className="mb-8 rounded-xl overflow-hidden shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={primaryImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            layout
          >
            <motion.img
              className="w-full h-auto max-h-[70vh] object-cover"
              src={primaryImage}
              alt="Featured gallery item"
              layoutId={`product-${primaryImage}`}
            />
          </motion.div>
        </AnimatePresence>
      </main>

      <aside className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {galleryImages.map((image, index) => (
          <ProductImage 
            key={index} 
            image={image}
            onExpand={setAsPrimary}
            isActive={image === primaryImage}
          />
        ))}
      </aside>
    </div>
  );
}