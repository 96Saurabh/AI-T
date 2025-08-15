import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Star } from "lucide-react";
import TabSection from "./TabSection";

// Import all background images
import backgroundImage from "../img/img1.jpeg";
import backgroundImage1 from "../img/img2.jpeg";
import backgroundImage2 from "../img/img3.jpeg";
import backgroundImage3 from "../img/img4.jpeg";
import backgroundImage4 from "../img/img5.jpeg";
import backgroundImage5 from "../img/img6.jpeg";
import ThreeStep from "./ThreeStep";
import ChooseUs from "./ChooseUs";
import { Footer } from "react-day-picker";
import AppFooter from "./Footer";

export default function Index() {
  const images = [
    backgroundImage,
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
    backgroundImage5,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[90vh]">
        {/* Background Image with fade transition */}
        <div
          className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl sm:text-6xl lg:text-hero font-bold font-display text-white mb-6">
            Design Your Logo with AI.
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Wear It Proud.
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Transform your ideas into stunning custom t-shirt designs using our
            cutting-edge AI technology. From concept to creation in minutes, not
            hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/design"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-base font-medium text-white hover:opacity-90 transition"
            >
              <Sparkles className="w-5 h-5 mr-2 text-white" />
              Start Designing
            </Link>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-3 text-base font-medium border border-white text-white bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition"
            >
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-300">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 border-2 border-white"
                  />
                ))}
              </div>
              <span className="ml-3 text-gray-300">1000+ happy customers</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-gray-300">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </section>

      <TabSection />

      {/* Three-Step Process */}
      <ThreeStep />

      {/* AI Features Showcase */}
      <ChooseUs/>

      {/* CTA Section */}
      <AppFooter/>
    </div>
  );
}
