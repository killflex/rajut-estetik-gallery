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
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      badge: "Terlaris",
      colors: ["Coklat", "Hitam", "Cream"],
    },
    {
      id: 2,
      name: "Dompet Rajut Mini",
      category: "dompet",
      price: "Rp 45.000",
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80",
      badge: "Baru",
      colors: ["Merah", "Biru", "Hijau"],
    },
    {
      id: 3,
      name: "Sandal Rajut Casual",
      category: "sandal",
      price: "Rp 75.000",
      image:
        "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80",
      badge: "",
      colors: ["Abu-abu", "Putih", "Navy"],
    },
    {
      id: 4,
      name: "Bros Rajut Bunga",
      category: "aksesori",
      price: "Rp 25.000",
      image:
        "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=400&q=80",
      badge: "Limited",
      colors: ["Pink", "Kuning", "Ungu"],
    },
    {
      id: 5,
      name: "Tas Rajut Bohemian",
      category: "tas",
      price: "Rp 150.000",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&q=80",
      badge: "Premium",
      colors: ["Coklat Tua", "Tan", "Burgundy"],
    },
    {
      id: 6,
      name: "Dompet Rajut Panjang",
      category: "dompet",
      price: "Rp 65.000",
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
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

          {/* Sort */}
          {/* <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="terbaru">Terbaru</option>
              <option value="terlaris">Terlaris</option>
              <option value="harga-rendah">Harga Terendah</option>
              <option value="harga-tinggi">Harga Tertinggi</option>
            </select>
          </div> */}
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

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-8 w-8 bg-white/90 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-8 w-8 bg-white/90 hover:bg-white"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Colors */}
                <div className="flex gap-1 mb-3">
                  {product.colors.slice(0, 3).map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-border bg-gradient-to-br from-gray-300 to-gray-500"
                      title={color}
                    />
                  ))}
                  {product.colors.length > 3 && (
                    <span className="text-xs text-muted-foreground ml-1">
                      +{product.colors.length - 3}
                    </span>
                  )}
                </div>

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

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Muat Lebih Banyak Produk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
