import React from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

function ChooseUs() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-4">
            Why Choose AI-Powered Design?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of custom apparel with our advanced AI
            technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                {/* <Zap className="w-6 h-6 text-white" /> */}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Lightning Fast Generation
                </h3>
                <p className="text-gray-600">
                  Generate professional-quality logos in seconds, not hours. Our
                  AI works faster than any human designer.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Infinite Creativity
                </h3>
                <p className="text-gray-600">
                  Never run out of ideas. Our AI can create unlimited variations
                  and styles for any concept you imagine.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                {/* <CreditCard className="w-6 h-6 text-white" /> */}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Affordable Excellence
                </h3>
                <p className="text-gray-600">
                  Get designer-quality results at a fraction of the cost. No
                  expensive design fees or long wait times.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 rounded-3xl p-8 flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-ai-gradient rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    AI Magic
                  </h3>
                  <p className="text-gray-600">
                    Powered by cutting-edge technology
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-base font-medium text-white hover:opacity-90 transition"
                  >
                    <NavLink
                      to="/design"
                      className={({ isActive }) =>
                        isActive ? "opacity-90" : ""
                      }
                    >
                      Start Designing
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
