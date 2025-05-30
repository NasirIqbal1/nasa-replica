import React, { useState } from "react";
import { X } from "lucide-react";

interface GalleryImage {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
}

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const images: GalleryImage[] = [
    {
      id: 1,
      title: "Mars Perseverance Rover",
      imageUrl:
        "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "mars",
    },
    {
      id: 2,
      title: "The Moon",
      imageUrl:
        "https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "moon",
    },
    {
      id: 3,
      title: "International Space Station",
      imageUrl:
        "https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "iss",
    },
    {
      id: 4,
      title: "Galaxy Cluster",
      imageUrl:
        "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "galaxies",
    },
    {
      id: 5,
      title: "Earth from Space",
      imageUrl:
        "https://images.pexels.com/photos/87611/sun-fireball-solar-flare-sunlight-87611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "earth",
    },
    {
      id: 6,
      title: "Nebula Formation",
      imageUrl:
        "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "galaxies",
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "mars", label: "Mars" },
    { id: "moon", label: "Moon" },
    { id: "iss", label: "ISS" },
    { id: "galaxies", label: "Galaxies" },
    { id: "earth", label: "Earth" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((image) => image.category === activeFilter);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-100 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Image Gallery
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore stunning images captured by NASA's various missions and
            telescopes.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-[#0B3D91] text-white"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="rounded-xl overflow-hidden shadow-md cursor-pointer transform transition duration-300 hover:shadow-xl hover:scale-[1.02] group"
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-white font-medium">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-[90vh] overflow-hidden">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 p-2 rounded-full text-white transition-colors z-10"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="bg-black/60 p-4 absolute bottom-0 left-0 right-0">
                <h3 className="text-white font-medium text-xl">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="#explore-more"
            className="inline-block bg-[#0B3D91] hover:bg-[#072d70] text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Explore More Images
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;

