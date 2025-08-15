import React from "react";
import { ArrowUpRight } from "lucide-react";

function ThreeStep() {
  const steps = [
    {
      title: "Enter a Logo Prompt",
      description:
        "Describe your vision in simple words. Our AI understands everything from minimalist coffee cup to fierce dragon logo",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Preview on 3D T-Shirt",
      description:
        " See your design come to life on a realistic 3D t-shirt model. Adjust colors, size, and placement in real-time",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Order and Checkout",
      description:
        "Choose your size, quantity, and fabric. Secure checkout with fast shipping to your door.",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 bg-[#ffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative group bg-[#d2e3fc] border border-transparent hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]"
            >
              <h3 className="text-xl font-semibold text-black mb-3">
                {step.title}
              </h3>
              <p className="text-black-400 text-sm mb-6">{step.description}</p>

              {/* Arrow icon circle */}
              {/* <div
                className={`absolute top-6 right-6 w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center transition-transform group-hover:scale-110`}
              >
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThreeStep;
