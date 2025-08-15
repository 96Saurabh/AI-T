import { useState } from "react";
import { Shirt, MousePointer } from "lucide-react";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("tshirt");

  const tabs = [
    { id: "tshirt", label: "T-Shirts", icon: <Shirt size={18} /> },
    { id: "hoodie", label: "Hoodies", icon: <Shirt size={18} /> },
    { id: "mousepad", label: "Mousepads", icon: <MousePointer size={18} /> },
  ];

  // Example images (replace with your own image URLs)
  const images = {
    tshirt: [
      "https://i.pinimg.com/1200x/38/40/d6/3840d6ef5d085a047b577fbf4aa3c4b4.jpg",
      "https://i.pinimg.com/1200x/4a/cb/af/4acbafd13f6d7a99900fb9609a26065a.jpg",
      "https://i.pinimg.com/1200x/1f/7f/9a/1f7f9a6cabca9f417d0b12e83e94c10c.jpg",
      "https://i.pinimg.com/1200x/8a/b5/fd/8ab5fdb5ac843e9c7690ab6e31ff1c55.jpg",
      "https://i.pinimg.com/1200x/c4/03/91/c403912de338f3c4b38e609cf3fa8889.jpg",
      "https://i.pinimg.com/1200x/94/5a/b8/945ab8ccd32392d7dea517b47927353a.jpg",
      //   "https://i.pinimg.com/736x/5a/d5/ae/5ad5ae9e0991d9439efc7503ddc51bef.jpg",
      "https://i.pinimg.com/1200x/a8/17/77/a81777f48183fbed29dcc3ec9455fa33.jpg",
    ],
    hoodie: [
      "https://i.pinimg.com/1200x/38/40/d6/3840d6ef5d085a047b577fbf4aa3c4b4.jpg",
      "https://i.pinimg.com/1200x/4a/cb/af/4acbafd13f6d7a99900fb9609a26065a.jpg",
      //   "https://i.pinimg.com/1200x/1f/7f/9a/1f7f9a6cabca9f417d0b12e83e94c10c.jpg",
      "https://i.pinimg.com/1200x/8a/b5/fd/8ab5fdb5ac843e9c7690ab6e31ff1c55.jpg",
      "https://i.pinimg.com/1200x/c4/03/91/c403912de338f3c4b38e609cf3fa8889.jpg",
      "https://i.pinimg.com/1200x/94/5a/b8/945ab8ccd32392d7dea517b47927353a.jpg",
      "https://i.pinimg.com/736x/5a/d5/ae/5ad5ae9e0991d9439efc7503ddc51bef.jpg",
      //   "https://i.pinimg.com/1200x/a8/17/77/a81777f48183fbed29dcc3ec9455fa33.jpg",
    ],
    mousepad: [
      "https://i.pinimg.com/1200x/38/40/d6/3840d6ef5d085a047b577fbf4aa3c4b4.jpg",
      //   "https://i.pinimg.com/1200x/4a/cb/af/4acbafd13f6d7a99900fb9609a26065a.jpg",
      //   "https://i.pinimg.com/1200x/1f/7f/9a/1f7f9a6cabca9f417d0b12e83e94c10c.jpg",
      //   "https://i.pinimg.com/1200x/8a/b5/fd/8ab5fdb5ac843e9c7690ab6e31ff1c55.jpg",
      "https://i.pinimg.com/1200x/c4/03/91/c403912de338f3c4b38e609cf3fa8889.jpg",
      "https://i.pinimg.com/1200x/94/5a/b8/945ab8ccd32392d7dea517b47927353a.jpg",
      "https://i.pinimg.com/736x/5a/d5/ae/5ad5ae9e0991d9439efc7503ddc51bef.jpg",
      "https://i.pinimg.com/1200x/a8/17/77/a81777f48183fbed29dcc3ec9455fa33.jpg",
    ],
  };

  return (
    <div className="bg-white py-6 min-h-screen">
      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-200
              ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none"
                  : "bg-gray-900 text-gray-300 border border-gray-700 hover:bg-gray-800"
              }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="px-6">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images[activeTab].map((img, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl bg-gray-900 break-inside-avoid group"
            >
              {/* Image */}
              <img
                src={img}
                alt={activeTab}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Bottom Hover Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4 text-white">
                <h3 className="text-lg font-semibold">T-Shirt {idx + 1}</h3>
                <p className="text-sm text-gray-300">
                  {"Dummy description for product".slice(0, 25)}...
                </p>
                <button className="mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-sm font-medium hover:opacity-90 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabSection;
