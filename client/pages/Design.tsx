import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Wand2,
  RefreshCw,
  Check,
  Download,
  Heart,
  Copy,
} from "lucide-react";

// Mock logo data - in a real app this would come from an AI service
const generateMockLogos = (prompt: string) => {
  const baseColors = [
    "bg-gradient-to-br from-purple-500 to-blue-500",
    "bg-gradient-to-br from-green-500 to-teal-500",
    "bg-gradient-to-br from-orange-500 to-red-500",
  ];

  return baseColors.map((color, index) => ({
    id: index + 1,
    prompt,
    gradient: color,
    selected: false,
  }));
};

export default function Design() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLogos, setGeneratedLogos] = useState<any[]>([]);
  const [selectedLogo, setSelectedLogo] = useState<number | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // Simulate AI generation delay
    setTimeout(() => {
      const newLogos = generateMockLogos(prompt);
      setGeneratedLogos(newLogos);
      setSelectedLogo(null);
      setIsGenerating(false);
    }, 2000);
  };

  const handleRegenerate = () => {
    if (generatedLogos.length > 0) {
      handleGenerate();
    }
  };

  const handleSelectLogo = (logoId: number) => {
    setSelectedLogo(logoId);
  };

  const handleRefinePrompt = () => {
    if (prompt.trim()) {
      handleGenerate();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-sm font-medium text-gray-900 mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
            AI Logo Generator
          </div>
          <h1 className="text-4xl font-bold font-display text-gray-900 mb-4">
            Create Stunning Logos with AI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Describe your vision and watch our AI create professional logo
            designs in seconds
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Prompt Input */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <Label
                      htmlFor="prompt"
                      className="text-lg font-semibold text-gray-900 mb-3 block"
                    >
                      Describe Your Logo
                    </Label>
                    <Textarea
                      id="prompt"
                      placeholder="e.g., Modern coffee shop logo with minimalist design, warm colors, and a coffee bean icon"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-[120px] text-base resize-none border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleGenerate}
                      disabled={!prompt.trim() || isGenerating}
                      className="flex-1 bg-ai-gradient hover:opacity-90 text-white border-0 py-3 text-base font-semibold"
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Wand2 className="w-5 h-5 mr-2" />
                          Generate Logos
                        </>
                      )}
                    </Button>

                    {generatedLogos.length > 0 && (
                      <Button
                        onClick={handleRegenerate}
                        variant="outline"
                        disabled={isGenerating}
                        className="px-6 py-3"
                      >
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Regenerate
                      </Button>
                    )}
                  </div>

                  {generatedLogos.length > 0 && (
                    <Button
                      onClick={handleRefinePrompt}
                      variant="ghost"
                      disabled={isGenerating}
                      className="w-full py-3 text-gray-600"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Refine Current Prompt
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  💡 Pro Tips for Better Results
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    • Be specific about style (minimalist, vintage, modern)
                  </li>
                  <li>• Mention colors you prefer</li>
                  <li>• Include the type of business or industry</li>
                  <li>• Describe any symbols or icons you want</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Generated Logos */}
          <div className="space-y-6">
            {generatedLogos.length === 0 ? (
              <Card className="shadow-lg border-0 h-[500px]">
                <CardContent className="p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Ready to Create Magic?
                    </h3>
                    <p className="text-gray-600">
                      Enter a description and generate your first AI logo
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Generated Logos
                  </h2>
                  <span className="text-sm text-gray-500">
                    {generatedLogos.length} variations
                  </span>
                </div>

                <div className="grid gap-6">
                  {generatedLogos.map((logo) => (
                    <Card
                      key={logo.id}
                      className={`shadow-lg border-2 transition-all duration-200 cursor-pointer ${
                        selectedLogo === logo.id
                          ? "border-purple-500 ring-2 ring-purple-200"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleSelectLogo(logo.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-6">
                          {/* Logo Preview */}
                          <div className="flex-shrink-0">
                            <div
                              className={`w-24 h-24 rounded-xl ${logo.gradient} flex items-center justify-center shadow-lg`}
                            >
                              <span className="text-white font-bold text-2xl">
                                {logo.prompt.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          </div>

                          {/* Logo Info */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 mb-2">
                              Logo Variation {logo.id}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                              Based on: "{logo.prompt}"
                            </p>

                            <div className="flex items-center space-x-3">
                              <Button
                                size="sm"
                                variant={
                                  selectedLogo === logo.id
                                    ? "default"
                                    : "outline"
                                }
                                className={
                                  selectedLogo === logo.id
                                    ? "bg-purple-600 hover:bg-purple-700"
                                    : ""
                                }
                              >
                                {selectedLogo === logo.id ? (
                                  <>
                                    <Check className="w-4 h-4 mr-2" />
                                    Selected
                                  </>
                                ) : (
                                  "Select"
                                )}
                              </Button>

                              <Button size="sm" variant="ghost">
                                <Heart className="w-4 h-4" />
                              </Button>

                              <Button size="sm" variant="ghost">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {selectedLogo && (
                  <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <h3 className="font-semibold text-purple-900 mb-2">
                          Ready to use this logo?
                        </h3>
                        <p className="text-purple-700 mb-4">
                          Preview it on a t-shirt or download in high resolution
                        </p>
                        <div className="flex justify-center space-x-3">
                          <Button
                            asChild
                            className="bg-purple-600 hover:bg-purple-700"
                          >
                            <Link to="/preview">Preview on T-Shirt</Link>
                          </Button>
                          <Button variant="outline">Download High-Res</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
