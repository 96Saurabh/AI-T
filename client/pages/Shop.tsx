import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ShoppingCart,
  Heart,
  Star,
  Filter,
  Grid3X3,
  List,
  X,
} from "lucide-react";

// Product data
const products = [
  {
    id: 1,
    name: "Classic Round Neck T-Shirt",
    price: 24.99,
    originalPrice: 29.99,
    image: "/api/placeholder/300/400",
    colors: ["black", "white", "navy", "gray"],
    styles: ["round-neck"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviews: 124,
    isNew: false,
    isBestseller: true,
  },
  {
    id: 2,
    name: "Premium Polo Shirt",
    price: 34.99,
    originalPrice: null,
    image: "/api/placeholder/300/400",
    colors: ["black", "white", "navy", "red", "green"],
    styles: ["polo"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviews: 89,
    isNew: true,
    isBestseller: false,
  },
  {
    id: 3,
    name: "Cozy Cotton Hoodie",
    price: 49.99,
    originalPrice: 59.99,
    image: "/api/placeholder/300/400",
    colors: ["black", "gray", "navy", "green"],
    styles: ["hoodie"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    reviews: 203,
    isNew: false,
    isBestseller: true,
  },
  {
    id: 4,
    name: "Athletic Fit T-Shirt",
    price: 27.99,
    originalPrice: null,
    image: "/api/placeholder/300/400",
    colors: ["black", "white", "gray", "blue"],
    styles: ["round-neck"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 67,
    isNew: false,
    isBestseller: false,
  },
  {
    id: 5,
    name: "Vintage Wash T-Shirt",
    price: 32.99,
    originalPrice: null,
    image: "/api/placeholder/300/400",
    colors: ["brown", "green", "blue", "gray"],
    styles: ["round-neck"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.5,
    reviews: 156,
    isNew: true,
    isBestseller: false,
  },
  {
    id: 6,
    name: "Business Casual Polo",
    price: 39.99,
    originalPrice: 45.99,
    image: "/api/placeholder/300/400",
    colors: ["white", "navy", "black", "gray"],
    styles: ["polo"],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    rating: 4.8,
    reviews: 94,
    isNew: false,
    isBestseller: true,
  },
];

const colorMap = {
  black: "#000000",
  white: "#ffffff",
  navy: "#1e40af",
  gray: "#6b7280",
  red: "#dc2626",
  green: "#16a34a",
  blue: "#3b82f6",
  brown: "#92400e",
};

const filterOptions = {
  colors: ["black", "white", "navy", "gray", "red", "green", "blue", "brown"],
  styles: ["round-neck", "polo", "hoodie"],
  sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
  priceRanges: [
    { label: "Under $25", min: 0, max: 24.99 },
    { label: "$25 - $35", min: 25, max: 35 },
    { label: "$35 - $50", min: 35, max: 50 },
    { label: "Over $50", min: 50, max: 999 },
  ],
};

// Product Card Component
function ProductCard({ product }: { product: any }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 shadow-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-gray-50">
        {/* Product Image */}
        <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-6xl text-gray-400">👕</div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
          )}
          {product.isBestseller && (
            <Badge className="bg-orange-500 hover:bg-orange-600">
              Bestseller
            </Badge>
          )}
          {product.originalPrice && (
            <Badge variant="destructive">
              -
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100,
              )}
              %
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          size="sm"
          variant="ghost"
          className={`absolute top-3 right-3 w-8 h-8 p-0 bg-white/80 hover:bg-white transition-all duration-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Heart className="w-4 h-4" />
        </Button>

        {/* Quick View Overlay */}
        <div
          className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button size="sm" className="bg-white text-black hover:bg-gray-100">
            Quick View
          </Button>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600 ml-1">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 text-lg leading-tight">
          {product.name}
        </h3>

        {/* Colors */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Colors:</span>
          <div className="flex space-x-1">
            {product.colors.slice(0, 4).map((color: string) => (
              <div
                key={color}
                className="w-5 h-5 rounded-full border-2 border-gray-300"
                style={{
                  backgroundColor: colorMap[color as keyof typeof colorMap],
                }}
                title={color}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-gray-500 ml-1">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Size Selection */}
        <div className="space-y-2">
          <Label className="text-sm text-gray-600">Size:</Label>
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {product.sizes.map((size: string) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full bg-ai-gradient hover:opacity-90 text-white border-0 mt-4"
          disabled={!selectedSize}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Shop() {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Color filter
      if (selectedColors.length > 0) {
        if (!selectedColors.some((color) => product.colors.includes(color))) {
          return false;
        }
      }

      // Style filter
      if (selectedStyles.length > 0) {
        if (!selectedStyles.some((style) => product.styles.includes(style))) {
          return false;
        }
      }

      // Size filter
      if (selectedSizes.length > 0) {
        if (!selectedSizes.some((size) => product.sizes.includes(size))) {
          return false;
        }
      }

      // Price filter
      if (selectedPriceRange) {
        const priceRange = filterOptions.priceRanges.find(
          (range) => range.label === selectedPriceRange,
        );
        if (priceRange) {
          if (
            product.price < priceRange.min ||
            product.price > priceRange.max
          ) {
            return false;
          }
        }
      }

      return true;
    });
  }, [selectedColors, selectedStyles, selectedSizes, selectedPriceRange]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "rating":
        return sorted.sort((a, b) => b.rating - a.rating);
      case "newest":
        return sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

  const handleColorFilter = (color: string, checked: boolean) => {
    if (checked) {
      setSelectedColors([...selectedColors, color]);
    } else {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    }
  };

  const handleStyleFilter = (style: string, checked: boolean) => {
    if (checked) {
      setSelectedStyles([...selectedStyles, style]);
    } else {
      setSelectedStyles(selectedStyles.filter((s) => s !== style));
    }
  };

  const handleSizeFilter = (size: string, checked: boolean) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, size]);
    } else {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    }
  };

  const clearAllFilters = () => {
    setSelectedColors([]);
    setSelectedStyles([]);
    setSelectedSizes([]);
    setSelectedPriceRange("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Shop T-Shirts
              </h1>
              <p className="text-gray-600 mt-1">
                Premium quality t-shirts for every style
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="hidden sm:flex border rounded-lg p-1">
                <Button
                  size="sm"
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  onClick={() => setViewMode("grid")}
                  className="px-3"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant={viewMode === "list" ? "default" : "ghost"}
                  onClick={() => setViewMode("list")}
                  className="px-3"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>

              {/* Sort Dropdown */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>

              {/* Mobile Filter Button */}
              <Button
                className="lg:hidden"
                variant="outline"
                onClick={() => setShowMobileFilters(true)}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div
            className={`lg:block ${showMobileFilters ? "block" : "hidden"} w-80 flex-shrink-0`}
          >
            <Card className="sticky top-8 shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Filters
                  </h2>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearAllFilters}
                      className="text-gray-600"
                    >
                      Clear All
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="lg:hidden"
                      onClick={() => setShowMobileFilters(false)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Color Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Color</h3>
                    <div className="grid grid-cols-4 gap-3">
                      {filterOptions.colors.map((color) => (
                        <div
                          key={color}
                          className="flex flex-col items-center space-y-2"
                        >
                          <div
                            className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-all ${
                              selectedColors.includes(color)
                                ? "border-blue-500 ring-2 ring-blue-200"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                            style={{
                              backgroundColor:
                                colorMap[color as keyof typeof colorMap],
                            }}
                            onClick={() =>
                              handleColorFilter(
                                color,
                                !selectedColors.includes(color),
                              )
                            }
                          />
                          <span className="text-xs text-gray-600 capitalize">
                            {color}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Style Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Style</h3>
                    <div className="space-y-3">
                      {filterOptions.styles.map((style) => (
                        <div
                          key={style}
                          className="flex items-center space-x-3"
                        >
                          <Checkbox
                            id={`style-${style}`}
                            checked={selectedStyles.includes(style)}
                            onCheckedChange={(checked) =>
                              handleStyleFilter(style, checked as boolean)
                            }
                          />
                          <Label
                            htmlFor={`style-${style}`}
                            className="text-gray-700 capitalize cursor-pointer"
                          >
                            {style.replace("-", " ")}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Size Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Size</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {filterOptions.sizes.map((size) => (
                        <Button
                          key={size}
                          variant={
                            selectedSizes.includes(size) ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() =>
                            handleSizeFilter(
                              size,
                              !selectedSizes.includes(size),
                            )
                          }
                          className="h-10"
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Price Range
                    </h3>
                    <div className="space-y-3">
                      {filterOptions.priceRanges.map((range) => (
                        <div
                          key={range.label}
                          className="flex items-center space-x-3"
                        >
                          <Checkbox
                            id={`price-${range.label}`}
                            checked={selectedPriceRange === range.label}
                            onCheckedChange={(checked) =>
                              setSelectedPriceRange(checked ? range.label : "")
                            }
                          />
                          <Label
                            htmlFor={`price-${range.label}`}
                            className="text-gray-700 cursor-pointer"
                          >
                            {range.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {sortedProducts.length} of {products.length} products
              </p>
              {(selectedColors.length > 0 ||
                selectedStyles.length > 0 ||
                selectedSizes.length > 0 ||
                selectedPriceRange) && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Active filters:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedColors.map((color) => (
                      <Badge
                        key={color}
                        variant="secondary"
                        className="capitalize"
                      >
                        {color}
                        <button
                          className="ml-1 hover:text-red-500"
                          onClick={() => handleColorFilter(color, false)}
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                    {selectedStyles.map((style) => (
                      <Badge key={style} variant="secondary">
                        {style.replace("-", " ")}
                        <button
                          className="ml-1 hover:text-red-500"
                          onClick={() => handleStyleFilter(style, false)}
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Products Grid */}
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* No Results */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl text-gray-300 mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search criteria
                </p>
                <Button onClick={clearAllFilters} variant="outline">
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
