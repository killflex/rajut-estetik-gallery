import { useState } from "react";
import { Heart, Eye, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [sortBy, setSortBy] = useState("terbaru");

  const categories = [
    { id: "semua", name: "Semua Produk" },
    { id: "tas", name: "Tas" },
    { id: "dompet", name: "Dompet" },
    { id: "sandal", name: "Sandal" },
    { id: "aksesori", name: "Aksesori" },
  ];

  const products = [
    {
      id: 1,
      name: "Tas Rajut Vintage",
      category: "tas",
      price: "Rp 125.000",
      image: "product/1.webp",
      badge: "Terlaris",
      colors: ["Hijau"],
    },
    {
      id: 2,
      name: "Dompet Rajut Mini",
      category: "dompet",
      price: "Rp 45.000",
      image: "product/2.webp",
      badge: "Baru",
      colors: ["Cream"],
    },
    {
      id: 3,
      name: "Sandal Rajut Casual",
      category: "sandal",
      price: "Rp 75.000",
      image: "product/3.webp",
      badge: "",
      colors: ["Abu-abu", "Putih", "Navy"],
    },
    {
      id: 4,
      name: "Bros Rajut Bunga",
      category: "aksesori",
      price: "Rp 25.000",
      image: "product/4.webp",
      badge: "Limited",
      colors: ["Pink", "Kuning", "Ungu"],
    },
    {
      id: 5,
      name: "Tas Rajut Bohemian",
      category: "tas",
      price: "Rp 150.000",
      image: "product/5.webp",
      badge: "Premium",
      colors: ["Coklat Tua", "Tan", "Burgundy"],
    },
    {
      id: 6,
      name: "Dompet Rajut Panjang",
      category: "dompet",
      price: "Rp 65.000",
      image: "product/6.webp",
      badge: "",
      colors: ["Hitam", "Coklat", "Maroon"],
    },
    {
      id: 6,
      name: "Dompet Rajut Panjang",
      category: "dompet",
      price: "Rp 65.000",
      image: "product/7.webp",
      badge: "",
      colors: ["Hitam", "Coklat", "Maroon"],
    },
    {
      id: 6,
      name: "Dompet Rajut Panjang",
      category: "dompet",
      price: "Rp 65.000",
      image: "product/8.webp",
      badge: "",
      colors: ["Hitam", "Coklat", "Maroon"],
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "semua" || product.category === selectedCategory
  );

  return (
    <section id="produk" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-serif">
            Koleksi Produk Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan beragam produk rajut berkualitas tinggi yang dibuat dengan
            penuh cinta dan ketelitian
          </p>
        </div>

        {/* Filter and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="card-hover border-border overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Badge */}
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                )}
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">
                    {product.price}
                  </span>
                  <Button size="sm" className="btn-primary">
                    Lihat Detail
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
