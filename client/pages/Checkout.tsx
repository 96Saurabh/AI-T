import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ShoppingBag,
  CreditCard,
  Truck,
  Shield,
  MapPin,
  Phone,
  Mail,
  User,
  Lock,
} from "lucide-react";

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    paymentMethod: "card",
    saveInfo: false,
  });

  // Mock order data - would come from state/context in real app
  const orderData = {
    tshirt: {
      name: "Classic Round Neck T-Shirt",
      style: "Round Neck",
      color: "Navy Blue",
      size: "L",
      price: 24.99,
      image: "👕",
    },
    logo: {
      text: "LOGO",
      prompt: "Modern minimalist logo design",
      price: 9.99,
    },
    shipping: 4.99,
    tax: 3.15,
  };

  const subtotal = orderData.tshirt.price + orderData.logo.price;
  const total = subtotal + orderData.shipping + orderData.tax;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission
    console.log("Order submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" size="sm">
                <Link to="/preview">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Preview
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
                <p className="text-gray-600">Complete your order</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm">
              Step 3 of 3
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Delivery Form */}
          <div className="lg:col-span-3 space-y-6">
            {/* Contact Information */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <User className="w-5 h-5 mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      placeholder="John"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      placeholder="Doe"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@example.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="w-5 h-5 mr-2" />
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    placeholder="123 Main Street, Apt 4B"
                    className="mt-1 min-h-[80px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                      placeholder="New York"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) =>
                        handleInputChange("state", e.target.value)
                      }
                      placeholder="NY"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) =>
                        handleInputChange("zipCode", e.target.value)
                      }
                      placeholder="10001"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) =>
                        handleInputChange("country", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup
                  value={formData.paymentMethod}
                  onValueChange={(value) =>
                    handleInputChange("paymentMethod", value)
                  }
                >
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-1">
                      <div className="flex items-center justify-between">
                        <span>Credit / Debit Card</span>
                        <div className="flex space-x-2">
                          <div className="w-8 h-5 bg-blue-500 rounded text-xs text-white flex items-center justify-center font-bold">
                            V
                          </div>
                          <div className="w-8 h-5 bg-red-500 rounded text-xs text-white flex items-center justify-center font-bold">
                            M
                          </div>
                          <div className="w-8 h-5 bg-blue-600 rounded text-xs text-white flex items-center justify-center font-bold">
                            A
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex-1">
                      <div className="flex items-center justify-between">
                        <span>PayPal</span>
                        <div className="w-16 h-5 bg-blue-600 rounded text-xs text-white flex items-center justify-center font-bold">
                          PayPal
                        </div>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value="apple" id="apple" />
                    <Label htmlFor="apple" className="flex-1">
                      <div className="flex items-center justify-between">
                        <span>Apple Pay</span>
                        <div className="w-16 h-5 bg-black rounded text-xs text-white flex items-center justify-center font-bold">
                          🍎 Pay
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                {formData.paymentMethod === "card" && (
                  <div className="space-y-4 mt-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" className="mt-1" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-3 pt-4">
                  <Checkbox
                    id="saveInfo"
                    checked={formData.saveInfo}
                    onCheckedChange={(checked) =>
                      handleInputChange("saveInfo", checked as boolean)
                    }
                  />
                  <Label htmlFor="saveInfo" className="text-sm text-gray-600">
                    Save my information for future purchases
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0 sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* T-Shirt Item */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl">
                    {orderData.tshirt.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">
                      {orderData.tshirt.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {orderData.tshirt.style} • {orderData.tshirt.color} •{" "}
                      {orderData.tshirt.size}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      ${orderData.tshirt.price}
                    </p>
                  </div>
                </div>

                {/* Logo Item */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {orderData.logo.text}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900">
                      AI Generated Logo
                    </h4>
                    <p className="text-sm text-gray-600 truncate">
                      {orderData.logo.prompt}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      ${orderData.logo.price}
                    </p>
                  </div>
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 flex items-center">
                      <Truck className="w-4 h-4 mr-1" />
                      Shipping
                    </span>
                    <span className="font-medium">
                      ${orderData.shipping.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">
                      ${orderData.tax.toFixed(2)}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="flex items-center justify-center space-x-2 p-3 bg-green-50 rounded-lg">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-700">
                    Secure 256-bit SSL encryption
                  </span>
                </div>

                {/* Place Order Button */}
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-ai-gradient hover:opacity-90 text-white border-0 py-3 text-lg font-semibold"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  Place Order - ${total.toFixed(2)}
                </Button>

                {/* Payment Icons */}
                <div className="flex items-center justify-center space-x-3 pt-4">
                  <div className="w-8 h-5 bg-blue-500 rounded text-xs text-white flex items-center justify-center font-bold">
                    V
                  </div>
                  <div className="w-8 h-5 bg-red-500 rounded text-xs text-white flex items-center justify-center font-bold">
                    M
                  </div>
                  <div className="w-8 h-5 bg-blue-600 rounded text-xs text-white flex items-center justify-center font-bold">
                    A
                  </div>
                  <div className="w-12 h-5 bg-blue-600 rounded text-xs text-white flex items-center justify-center font-bold">
                    PayPal
                  </div>
                  <div className="w-12 h-5 bg-black rounded text-xs text-white flex items-center justify-center font-bold">
                    🍎 Pay
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="text-center text-sm text-gray-600 space-y-1">
                  <p className="flex items-center justify-center">
                    <Truck className="w-4 h-4 mr-1" />
                    Free shipping on orders over $50
                  </p>
                  <p>Estimated delivery: 3-5 business days</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
