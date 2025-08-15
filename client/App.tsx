import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Index from "./pages/Index";
import Design from "./pages/Design";
import Shop from "./pages/Shop";
import TShirtViewer from "./pages/TShirtViewer";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Placeholder component for routes not yet implemented
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center max-w-md mx-auto px-4">
      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
        <span className="text-2xl">🚧</span>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-600 mb-6">
        This page is coming soon! We're working hard to bring you an amazing
        experience.
      </p>
      <p className="text-sm text-gray-500">
        Continue prompting to help us build this page exactly how you want it.
      </p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          {/* <Navigation /> */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/design" element={<Design />} />
            <Route path="/preview" element={<TShirtViewer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/orders"
              element={<PlaceholderPage title="My Orders" />}
            />
            <Route path="/login" element={<PlaceholderPage title="Login" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
