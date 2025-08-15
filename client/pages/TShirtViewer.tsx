import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  RotateCw,
  Edit3,
  ShoppingCart,
  Palette,
  Shirt,
  Check,
  ArrowLeft,
} from "lucide-react";
import * as THREE from "three";

// T-Shirt 3D Model Component
function TShirtModel({
  color,
  style,
  logoText,
}: {
  color: string;
  style: string;
  logoText: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const logoRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // T-shirt geometry based on style
  const getGeometry = () => {
    switch (style) {
      case "polo":
        return <cylinderGeometry args={[1.2, 1.4, 2.5, 16]} />;
      case "hoodie":
        return <boxGeometry args={[2.8, 3.2, 0.3]} />;
      default: // round-neck
        return <cylinderGeometry args={[1.1, 1.3, 2.2, 16]} />;
    }
  };

  return (
    <group>
      {/* Main T-shirt */}
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
        {getGeometry()}
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Logo on t-shirt */}
      {logoText && (
        <mesh ref={logoRef} position={[0, 0.3, 0.16]}>
          <planeGeometry args={[1, 0.5]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.9} />
        </mesh>
      )}

      {/* T-shirt sleeves */}
      <mesh position={[-1.5, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.4, 1.2, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[1.5, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.4, 1.2, 8]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

// Scene component
function Scene({
  color,
  style,
  logoText,
}: {
  color: string;
  style: string;
  logoText: string;
}) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-5, 5, 5]} intensity={0.5} />

      <TShirtModel color={color} style={style} logoText={logoText} />

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={3}
        maxDistance={8}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />
    </>
  );
}

export default function TShirtViewer() {
  const [selectedColor, setSelectedColor] = useState("#3b82f6");
  const [selectedStyle, setSelectedStyle] = useState("round-neck");
  const [autoRotate, setAutoRotate] = useState(false);

  // Mock selected logo data - would come from navigation state
  const [selectedLogo] = useState({
    id: 1,
    text: "LOGO",
    prompt: "Modern minimalist logo design",
  });

  const colors = [
    { name: "Navy Blue", value: "#1e40af", popular: true },
    { name: "Classic Black", value: "#000000", popular: true },
    { name: "Pure White", value: "#ffffff", popular: true },
    { name: "Forest Green", value: "#16a34a" },
    { name: "Crimson Red", value: "#dc2626" },
    { name: "Royal Purple", value: "#7c3aed" },
    { name: "Sunset Orange", value: "#ea580c" },
    { name: "Steel Gray", value: "#6b7280" },
  ];

  const styles = [
    {
      id: "round-neck",
      name: "Round Neck",
      description: "Classic comfortable fit",
      price: "$24.99",
    },
    {
      id: "polo",
      name: "Polo Shirt",
      description: "Business casual style",
      price: "$34.99",
    },
    {
      id: "hoodie",
      name: "Hoodie",
      description: "Cozy and warm",
      price: "$49.99",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" size="sm">
                <Link to="/design">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Design
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  3D T-Shirt Preview
                </h1>
                <p className="text-gray-600">
                  Customize your design and preview it in 3D
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm">
              Step 2 of 3
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-12 gap-8 h-[calc(100vh-200px)]">
          {/* Left Panel - Color & Style Selection */}
          <div className="lg:col-span-3 space-y-6">
            {/* T-Shirt Style Selection */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Shirt className="w-5 h-5 mr-2" />
                  T-Shirt Style
                </h3>
                <div className="space-y-3">
                  {styles.map((style) => (
                    <div
                      key={style.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedStyle === style.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedStyle(style.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {style.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {style.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">
                            {style.price}
                          </p>
                          {selectedStyle === style.id && (
                            <Check className="w-4 h-4 text-blue-500 mt-1" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Color Selection */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  Color Selection
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {colors.map((color) => (
                    <div
                      key={color.value}
                      className={`relative p-3 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedColor === color.value
                          ? "border-blue-500 ring-2 ring-blue-200"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedColor(color.value)}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-8 h-8 rounded-full border-2 border-gray-300"
                          style={{ backgroundColor: color.value }}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {color.name}
                          </p>
                          {color.popular && (
                            <Badge variant="secondary" className="text-xs mt-1">
                              Popular
                            </Badge>
                          )}
                        </div>
                      </div>
                      {selectedColor === color.value && (
                        <Check className="absolute top-2 right-2 w-4 h-4 text-blue-500" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Panel - 3D Model */}
          <div className="lg:col-span-6">
            <Card className="shadow-2xl border-0 h-full">
              <CardContent className="p-0 h-full">
                <div className="relative h-full rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Canvas
                    camera={{ position: [0, 0, 5], fov: 50 }}
                    shadows
                    className="h-full"
                  >
                    <Scene
                      color={selectedColor}
                      style={selectedStyle}
                      logoText={selectedLogo.text}
                    />
                  </Canvas>

                  {/* 3D Controls Overlay */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex space-x-2 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setAutoRotate(!autoRotate)}
                      >
                        <RotateCw className="w-4 h-4" />
                      </Button>
                      <div className="text-xs text-gray-600 px-2 py-1">
                        Drag to rotate • Scroll to zoom
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Logo & Actions */}
          <div className="lg:col-span-3 space-y-6">
            {/* Selected Logo */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Selected Logo
                </h3>
                <div className="space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-3xl">
                      {selectedLogo.text}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Logo Design #1</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedLogo.prompt}
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <Link to="/design">
                      <Edit3 className="w-4 h-4 mr-2" />
                      Change Logo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Order Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      {styles.find((s) => s.id === selectedStyle)?.name}
                    </span>
                    <span className="font-medium">
                      {styles.find((s) => s.id === selectedStyle)?.price}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">AI Logo Design</span>
                    <span className="font-medium">$9.99</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>$34.98</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-ai-gradient hover:opacity-90 text-white border-0 py-3"
              >
                <Link to="/checkout">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Continue to Checkout
                </Link>
              </Button>

              <Button variant="outline" className="w-full">
                <RotateCw className="w-4 h-4 mr-2" />
                Rotate View
              </Button>

              <Button asChild variant="ghost" className="w-full">
                <Link to="/design">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Change Logo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
