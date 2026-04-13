import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Star,
  ShieldCheck,
  Truck,
  ShoppingCart,
  X,
  Check,
  ChevronRight,
  Zap,
} from "lucide-react";
import { useCart } from "@/hooks/use-cart";

import chairGaming1 from "@/assets/chair-gaming-1.jpg";
import chairGaming2 from "@/assets/chair-gaming-2.jpg";
import chairGaming3 from "@/assets/chair-gaming-3.jpg";
import chairOffice1 from "@/assets/chair-office-1.jpg";
import chairOffice2 from "@/assets/chair-office-2.jpg";
import chairOffice3 from "@/assets/chair-office-3.jpg";
import deskMahogany from "@/assets/desk-mahogany.jpg";
import deskWhite from "@/assets/desk-white.jpg";
import deskTeak from "@/assets/desk-teak.jpg";
import productMdfWhite from "@/assets/product-mdf-white.jpg";
import accessoryCableTray from "@/assets/accessory-cable-tray.jpg";
import accessoryLamp from "@/assets/accessory-lamp.jpg";
import accessoryFootrest from "@/assets/accessory-footrest.jpg";
import accessoryMonitorRiser from "@/assets/accessory-monitor-riser.jpg";

export const Route = createFileRoute("/product/$id")({
  component: ProductLandingPage,
});

interface Accessory {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

interface Product {
  id: string;
  name: string;
  tagline?: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  images: string[];
  image: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  specs?: string[];
  color?: string;
  category: "chair" | "desk";
}

const chairsData: Record<string, Product> = {
  "titan-pro": {
    id: "titan-pro",
    name: "Titan Pro Gaming Chair",
    tagline: "Engineered for your comfort, designed for your style.",
    subtitle: "Black & Red",
    category: "chair",
    price: 89500,
    originalPrice: 105000,
    images: [chairGaming1, chairGaming2, chairGaming3],
    image: chairGaming1,
    rating: 4.9,
    reviews: 124,
    color: "Black & Red",
    description:
      "Experience ultimate gaming comfort with the Titan Pro Gaming Chair. Featuring 4D armrests, 180° recline capability, and premium memory foam lumbar support. Engineered for extended gaming marathons with a robust steel frame.",
    features: [
      "4D Armrests",
      "180° Recline",
      "Memory Foam Lumbar",
      "Steel Frame",
      "Premium Materials",
      "Heavy-Duty Base",
    ],
    specs: [
      "Max Weight: 150kg",
      "Height Adjustable: 48-58cm",
      "Warranty: 2 Years",
    ],
  },
  "phantom-x": {
    id: "phantom-x",
    name: "Phantom X Gaming Chair",
    tagline: "The perfect balance of style and performance.",
    subtitle: "Black & Blue",
    category: "chair",
    price: 78500,
    originalPrice: 92000,
    images: [chairGaming2, chairGaming1],
    image: chairGaming2,
    rating: 4.8,
    reviews: 89,
    color: "Black & Blue",
    description:
      "The Phantom X combines style and comfort with its sleek black and blue design. Perfect for gamers who want professional-grade ergonomics without the premium price.",
    features: ["3D Armrests", "155° Recline", "Lumbar Pillow", "Nylon Base"],
    specs: [
      "Max Weight: 140kg",
      "Height Adjustable: 45-55cm",
      "Warranty: 2 Years",
    ],
  },
  "arctic-elite": {
    id: "arctic-elite",
    name: "Arctic Elite Gaming Chair",
    tagline: "Premium comfort in pristine white.",
    subtitle: "White & Black",
    category: "chair",
    price: 95000,
    images: [chairGaming3],
    image: chairGaming3,
    rating: 4.7,
    reviews: 56,
    color: "White & Black",
    description:
      "Stand out with the Arctic Elite Gaming Chair. Premium white finish with black accents, enhanced cooling via cold-cure foam, and an aluminium base for durability.",
    features: [
      "4D Armrests",
      "180° Recline",
      "Cold-Cure Foam",
      "Aluminium Base",
    ],
    specs: [
      "Max Weight: 160kg",
      "Height Adjustable: 50-60cm",
      "Warranty: 2 Years",
    ],
  },
  "ergo-mesh-pro": {
    id: "ergo-mesh-pro",
    name: "ErgoMesh Pro Office Chair",
    tagline: "Professional comfort for all-day productivity.",
    subtitle: "Black & Silver",
    category: "chair",
    price: 72500,
    originalPrice: 85000,
    images: [chairOffice1],
    image: chairOffice1,
    rating: 4.9,
    reviews: 203,
    color: "Black & Silver",
    description:
      "Professional office comfort redefined. The ErgoMesh Pro features a breathable mesh back, adjustable lumbar support, and synchro-tilt mechanism.",
    features: [
      "Mesh Back",
      "Adjustable Lumbar",
      "Synchro-Tilt",
      "Aluminium Base",
    ],
    specs: [
      "Max Weight: 120kg",
      "Height Adjustable: 44-54cm",
      "Warranty: 2 Years",
    ],
  },
  "executive-one": {
    id: "executive-one",
    name: "Executive One Chair",
    tagline: "Executive excellence meets ergonomics.",
    subtitle: "All Black",
    category: "chair",
    price: 85000,
    images: [chairOffice2],
    image: chairOffice2,
    rating: 4.8,
    reviews: 147,
    color: "All Black",
    description:
      "The Executive One exudes professionalism and comfort. With a premium headrest, adjustable armrests, and Class 4 gas lift.",
    features: ["Headrest", "Adjustable Arms", "Seat Slide", "Class 4 Gas Lift"],
    specs: [
      "Max Weight: 130kg",
      "Height Adjustable: 46-56cm",
      "Warranty: 2 Years",
    ],
  },
  "task-flex": {
    id: "task-flex",
    name: "TaskFlex Workstation Chair",
    tagline: "Affordable ergonomics for modern workstations.",
    subtitle: "Black",
    category: "chair",
    price: 58500,
    originalPrice: 68000,
    images: [chairOffice3],
    image: chairOffice3,
    rating: 4.6,
    reviews: 92,
    color: "Black",
    description:
      "An affordable yet ergonomic solution for modern workstations. The TaskFlex features a mid-back mesh design, flip-up arms, and breathable fabric.",
    features: [
      "Mid-Back Mesh",
      "Flip-Up Arms",
      "Tilt Lock",
      "Breathable Fabric",
    ],
    specs: [
      "Max Weight: 110kg",
      "Height Adjustable: 42-52cm",
      "Warranty: 2 Years",
    ],
  },
};

const desksData: Record<string, Product> = {
  "mahogany-black": {
    id: "mahogany-black",
    name: "Pro Station — Mahogany",
    tagline: "Timeless elegance meets modern functionality.",
    subtitle: "Standard Black Frame",
    category: "desk",
    price: 138500,
    images: [deskMahogany],
    image: deskMahogany,
    rating: 4.9,
    reviews: 47,
    description:
      "The Pro Station with Mahogany top combines traditional elegance with modern functionality. Featuring dual motors, 120kg capacity, and smooth height adjustment from sitting to standing.",
    features: [
      "Dual Motor System",
      "120kg Weight Capacity",
      "5-Year Warranty",
      "Smooth Adjustment",
      "Durable Mahogany Top",
      "Integrated Cable Management",
    ],
    specs: ["Height Range: 72-120cm", "Top Size: 160×80cm", "Weight: 45kg"],
  },
  "mdf-white-silver": {
    id: "mdf-white-silver",
    name: "Pro Station — MDF White",
    tagline: "Clean minimalism with premium performance.",
    subtitle: "Silver Frame",
    category: "desk",
    price: 138500,
    images: [deskWhite],
    image: deskWhite,
    rating: 4.8,
    reviews: 32,
    description:
      "Clean and minimalist design with MDF white top and silver frame. The Pro Station offers the same premium features for all desk configurations.",
    features: [
      "Dual Motor System",
      "120kg Weight Capacity",
      "5-Year Warranty",
      "Smooth Adjustment",
      "Scratch-Resistant Surface",
      "Integrated Cable Management",
    ],
    specs: ["Height Range: 72-120cm", "Top Size: 160×80cm", "Weight: 45kg"],
  },
  "teak-custom": {
    id: "teak-custom",
    name: "Pro Station — Teak",
    tagline: "Premium luxury, truly customized.",
    subtitle: "Custom Size Available",
    category: "desk",
    price: 138500,
    images: [deskTeak],
    image: deskTeak,
    rating: 5.0,
    reviews: 18,
    description:
      "Premium Teak wood top with customizable dimensions. Perfect for those who want luxury and personalization with all standard Pro Station premium features.",
    features: [
      "Dual Motor System",
      "120kg Weight Capacity",
      "5-Year Warranty",
      "Custom Sizing",
      "Premium Teak Wood",
      "Full Customization Available",
    ],
    specs: ["Height Range: 72-120cm", "Custom Size Available", "Weight: 50kg"],
  },
  "mdf-white-black": {
    id: "mdf-white-black",
    name: "Pro Station — Compact",
    tagline: "Full power in a compact design.",
    subtitle: "Black Frame • Compact 120×60cm",
    category: "desk",
    price: 138500,
    images: [productMdfWhite],
    image: productMdfWhite,
    rating: 4.7,
    reviews: 14,
    description:
      "Compact version of the Pro Station perfect for smaller spaces. Same premium dual motor technology in a space-saving 120×60cm configuration.",
    features: [
      "Dual Motor System",
      "120kg Weight Capacity",
      "5-Year Warranty",
      "Compact Space-Saving Size",
      "Scratch-Resistant Surface",
      "Cable Management",
    ],
    specs: ["Height Range: 72-120cm", "Top Size: 120×60cm", "Weight: 35kg"],
  },
};

const accessoriesData: Accessory[] = [
  {
    id: "cable-tray",
    name: "Large Cable Tray Grove (4‒6 ft)",
    price: 16850,
    image: accessoryCableTray,
    description: "Organize cables and keep your workspace clean",
  },
  {
    id: "pdu",
    name: "PDU (8 Universal Sockets, 3m Cable)",
    price: 8900,
    image: accessoryMonitorRiser,
    description: "Power management with 8 outlets",
  },
  {
    id: "table-lamp-15w",
    name: "Table Lamp (15W)",
    price: 13900,
    image: accessoryLamp,
    description: "Warm ambient lighting for your desk",
  },
  {
    id: "table-lamp-24w",
    name: "Table Lamp (24W)",
    price: 16900,
    image: accessoryLamp,
    description: "Bright focused lighting for tasks",
  },
  {
    id: "caster-wheels",
    name: "High-Quality Caster Wheels",
    price: 3900,
    image: accessoryMonitorRiser,
    description: "Smooth mobility for your setup",
  },
  {
    id: "wireless-charger",
    name: "KPON Invisible Wireless Charger",
    price: 13900,
    image: accessoryMonitorRiser,
    description: "Charge your devices seamlessly",
  },
  {
    id: "monitor-riser-90",
    name: "Monitor Riser Stand (90cm)",
    price: 8700,
    image: accessoryMonitorRiser,
    description: "Elevated monitor viewing angle",
  },
  {
    id: "monitor-riser-120",
    name: "Monitor Riser Stand (120cm)",
    price: 9900,
    image: accessoryMonitorRiser,
    description: "Extra space with monitor elevation",
  },
  {
    id: "foot-rest",
    name: "Foot Rest",
    price: 11800,
    image: accessoryFootrest,
    description: "Ergonomic foot support and comfort",
  },
  {
    id: "cup-holder",
    name: "Cup Holder",
    price: 2900,
    image: accessoryMonitorRiser,
    description: "Keep your beverage within reach",
  },
];

function ProductLandingPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const allProducts = { ...chairsData, ...desksData };
  const product = allProducts[id];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedAccessories, setSelectedAccessories] = useState<
    Record<string, boolean>
  >({});
  const [quantity, setQuantity] = useState(1);
  const [showAddedNotification, setShowAddedNotification] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [expandAddOns, setExpandAddOns] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button variant="gold" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const selectedAccessoryItems = accessoriesData.filter(
    (a) => selectedAccessories[a.id],
  );
  const accessoriesTotal = selectedAccessoryItems.reduce(
    (sum, a) => sum + a.price,
    0,
  );
  const totalPrice = (product.price + accessoriesTotal) * quantity;

  const handleAddToCart = () => {
    const itemId =
      selectedAccessoryItems.length > 0
        ? `${product.id}-with-accessories-${Date.now()}`
        : product.id;

    const subtitle =
      selectedAccessoryItems.length > 0
        ? `${product.subtitle || product.name} + ${selectedAccessoryItems.length} accessories`
        : product.subtitle || product.color;

    addItem(
      {
        id: itemId,
        name: product.name,
        subtitle,
        price: totalPrice,
        image: product.image,
      },
      false,
    );

    setShowAddedNotification(true);
    setTimeout(() => setShowAddedNotification(false), 2000);
  };

  const handleBuyNow = () => {
    const itemId =
      selectedAccessoryItems.length > 0
        ? `${product.id}-with-accessories-${Date.now()}`
        : product.id;

    const subtitle =
      selectedAccessoryItems.length > 0
        ? `${product.subtitle || product.name} + ${selectedAccessoryItems.length} accessories`
        : product.subtitle || product.color;

    addItem(
      {
        id: itemId,
        name: product.name,
        subtitle,
        price: totalPrice,
        image: product.image,
      },
      false,
    );

    navigate({ to: "/checkout" });
  };

  const faqItems = [
    {
      id: "assembly",
      question: "How long does assembly take?",
      answer:
        "Most products can be assembled in 20-30 minutes with the included tools and clear instructions. We also offer professional assembly services.",
    },
    {
      id: "warranty",
      question: "What does the warranty cover?",
      answer:
        "Our warranty covers manufacturing defects, structural issues, and mechanical components. It does not cover normal wear and tear or accidental damage.",
    },
    {
      id: "customization",
      question: "Can I customize the desk after purchase?",
      answer:
        "Yes! You can add accessories, upgrade to motorized systems, or extend the warranty at any time after purchase.",
    },
    {
      id: "shipping",
      question: "How long is shipping?",
      answer:
        "We offer free delivery in Colombo within 1-2 business days. Shipping to other areas takes 3-5 business days.",
    },
    {
      id: "returns",
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for unused products in original packaging. Customized items may have different terms.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Image Gallery */}
          <div className="flex flex-col-reverse gap-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                    selectedImage === idx
                      ? "border-gold"
                      : "border-border hover:border-gold/50"
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-surface border border-border">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="text-gold text-xs tracking-widest mb-2 uppercase">
              {product.category === "chair"
                ? "ergonomic chair"
                : "standing desk"}
            </p>
            <h1 className="text-5xl font-bold mb-3">{product.name}</h1>
            {product.tagline && (
              <p className="text-xl text-muted-foreground mb-4">
                {product.tagline}
              </p>
            )}

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-gold fill-gold"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-8 p-6 bg-surface rounded-xl border border-gold/20">
              <p className="text-sm text-muted-foreground mb-3">Starting at</p>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl font-bold text-gold">
                  LKR {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    LKR {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-sm text-gold font-semibold">
                  Save LKR{" "}
                  {(product.originalPrice - product.price).toLocaleString()}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Quick Features */}
            <div className="mb-8 grid grid-cols-2 gap-3">
              {product.features.slice(0, 4).map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Add-ons Section - Card Grid */}
            <div className="mb-8">
              <p className="text-xs text-muted-foreground mb-6 tracking-widest uppercase">
                Add-ons
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {accessoriesData
                  .slice(0, expandAddOns ? accessoriesData.length : 2)
                  .map((accessory) => (
                    <button
                      key={accessory.id}
                      onClick={() =>
                        setSelectedAccessories((prev) => ({
                          ...prev,
                          [accessory.id]: !prev[accessory.id],
                        }))
                      }
                      className={`p-3 rounded-lg border-2 transition-all text-left group ${
                        selectedAccessories[accessory.id]
                          ? "border-gold bg-gold/10"
                          : "border-border hover:border-gold/50 bg-surface"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Image */}
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-foreground/5">
                          <img
                            src={accessory.image}
                            alt={accessory.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm">
                            {accessory.name}
                          </h3>
                        </div>

                        {/* Price */}
                        <div className="text-right flex-shrink-0">
                          <p className="text-sm font-bold text-gold">
                            {accessory.price.toLocaleString()}
                          </p>
                          {selectedAccessories[accessory.id] && (
                            <div className="mt-1">
                              <Check className="w-4 h-4 text-gold" />
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
              </div>

              {!expandAddOns && accessoriesData.length > 2 && (
                <button
                  onClick={() => setExpandAddOns(true)}
                  className="mt-4 w-full py-2 text-gold font-semibold hover:text-gold/80 transition-colors flex items-center justify-center gap-2"
                >
                  See More <ChevronRight className="w-4 h-4" />
                </button>
              )}

              {expandAddOns && accessoriesData.length > 2 && (
                <button
                  onClick={() => setExpandAddOns(false)}
                  className="mt-4 w-full py-2 text-gold font-semibold hover:text-gold/80 transition-colors flex items-center justify-center gap-2"
                >
                  See Less <ChevronRight className="w-4 h-4 rotate-90" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Order Summary Section - Centered */}
      <section className="w-full px-4 py-12 bg-surface border-t border-b border-gold/20">
        <div className="max-w-7xl mx-auto p-8 bg-surface rounded-2xl border border-gold/20">
          <div className="space-y-3 pb-6">
            <div className="flex justify-between">
              <span className="text-muted-foreground">{product.name}</span>
              <span className="font-semibold">
                LKR {product.price.toLocaleString()}
              </span>
            </div>

            {selectedAccessoryItems.map((accessory) => (
              <div key={accessory.id} className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  + {accessory.name}
                </span>
                <span className="font-semibold">
                  LKR {accessory.price.toLocaleString()}
                </span>
              </div>
            ))}

            <div className="flex justify-between pt-2 border-t border-border">
              <span className="text-muted-foreground">Quantity</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-6 h-6 rounded border border-border hover:bg-accent transition-colors"
                >
                  −
                </button>
                <span className="w-6 text-center font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-6 h-6 rounded border border-border hover:bg-accent transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="my-6 py-4 border-t border-border">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-4xl font-bold text-gold">
                LKR {totalPrice.toLocaleString()}
              </span>
            </div>
          </div>

          {selectedAccessoryItems.length > 0 && (
            <p className="text-xs text-muted-foreground mb-6">
              ✓ {selectedAccessoryItems.length} accessories included
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button
              variant="gold"
              size="lg"
              className="flex-1"
              onClick={handleBuyNow}
            >
              BUY NOW
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4 mr-2" /> ADD TO CART
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="space-y-3 pt-6 border-t border-border">
            <div className="flex items-center gap-3 text-sm">
              <Truck className="w-5 h-5 text-gold" />
              <span>Free Delivery in Colombo</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <ShieldCheck className="w-5 h-5 text-gold" />
              <span>3-5 Year Warranty</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Zap className="w-5 h-5 text-gold" />
              <span>Easy Installation Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">Features at a Glance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature}</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium quality and durability built in.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">Specifications</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold text-lg mb-4">Technical Specs</h3>
              {product.specs && (
                <ul className="space-y-3">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-3 text-sm">
                      <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Additional Info</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                  Easy assembly with included tools and instructions
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                  Comprehensive warranty coverage included
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                  24/7 customer support available
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                  Compatible with standard accessories
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border border-border rounded-lg overflow-hidden bg-surface hover:border-gold/30 transition-colors"
            >
              <button
                onClick={() =>
                  setExpandedFaq(expandedFaq === item.id ? null : item.id)
                }
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-foreground/5 transition-colors"
              >
                <h3 className="font-semibold">{item.question}</h3>
                <ChevronRight
                  className={`w-5 h-5 text-gold transition-transform ${
                    expandedFaq === item.id ? "rotate-90" : ""
                  }`}
                />
              </button>
              {expandedFaq === item.id && (
                <div className="px-6 py-4 border-t border-border bg-foreground/5 text-sm text-muted-foreground">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Success Notification */}
      {showAddedNotification && (
        <div className="fixed bottom-4 right-4 bg-gold text-gold-foreground px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4" />
          <span>Added to cart!</span>
        </div>
      )}
    </div>
  );
}
