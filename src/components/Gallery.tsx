import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "product/1.webp",
      alt: "Tas rajut vintage dengan detail indah",
      category: "Tas",
    },
    {
      id: 2,
      src: "product/2.webp",
      alt: "Koleksi dompet rajut warna-warni",
      category: "Dompet",
    },
    {
      id: 3,
      src: "product/3.webp",
      alt: "Sandal rajut casual untuk sehari-hari",
      category: "Sandal",
    },
    {
      id: 4,
      src: "product/4.webp",
      alt: "Aksesori rajut unik dan menarik",
      category: "Aksesori",
    },
    {
      id: 5,
      src: "product/5.webp",
      alt: "Suasana workshop pembuatan rajut",
      category: "Proses",
    },
    {
      id: 6,
      src: "product/6.webp",
      alt: "Detail rajutan tangan berkualitas",
      category: "Detail",
    },
    {
      id: 7,
      src: "product/7.webp",
      alt: "Kombinasi warna benang natural",
      category: "Material",
    },
    {
      id: 8,
      src: "product/8.webp",
      alt: "Produk rajut dalam kehidupan sehari-hari",
      category: "Lifestyle",
    },
  ];

  return (
    <section id="galeri" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-serif">
            Galeri Karya Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat koleksi foto produk rajut kami dalam berbagai setting dan gaya
            hidup
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">
                  {image.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-[700px] max-h-[700px] object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/shanandabiz.official"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-primary">
              Lihat Lebih Banyak di Instagram
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
