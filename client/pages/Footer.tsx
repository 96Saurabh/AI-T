import React from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaDiscord,
//   FaXTwitter,
//   FaYoutube,
//   FaLinkedin,
// } from "react-icons/fa6";
import Footer from "react-day-picker";
;

export default function AppFooter() {
  return (
    <footer className="bg-[#0d0f12] text-gray-300 px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-800 pb-8">
          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>AI Art Generator</li>
              <li>AI Video Generator</li>
              <li>Transparent PNG Generator</li>
              <li>AI Marketing Tools</li>
              <li>AI Graphic Design</li>
              <li>AI Print on Demand</li>
              <li>AI Photography</li>
              <li>AI Interior Design</li>
              <li>AI Architecture</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>Pricing</li>
              <li>API</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Support</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Leonardo Creator Program</li>
              <li>Affiliate Program</li>
            </ul>
          </div>

          {/* Get the App */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get the App</h3>
            <div className="flex flex-col space-y-4">
              <img
                src="/appstore-badge.png"
                alt="Download on the App Store"
                className="h-12"
              />
              <img
                src="/googleplay-badge.png"
                alt="Get it on Google Play"
                className="h-12"
              />
            </div>
          </div>

          {/* Stay Tuned */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Tuned</h3>
            {/* <div className="flex space-x-4 text-2xl">
              <FaFacebook />
              <FaInstagram />
              <FaDiscord />
              <FaXTwitter />
              <FaYoutube />
              <FaLinkedin />
            </div> */}
          </div>
        </div>

        {/* Middle section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Leonardo AI" className="h-10 w-10" />
            <div>
              <h4 className="text-white font-semibold">
                Leonardo.<span className="text-purple-500">Ai</span>
              </h4>
              <p className="text-sm text-gray-400">
                Leonardo Interactive Pty Ltd
                <br />
                ABN: 56 662 209 485
              </p>
            </div>
          </div>
          <div className="text-sm text-gray-400 max-w-xl mt-6 md:mt-0">
            Leonardo.ai is fully SOC 2 Type I and Type II accredited,
            demonstrating our commitment to the highest standards of security,
            availability, and data integrity. This ensures our customers can
            trust that their data is handled with enterprise-grade protection
            and compliance.
          </div>
        </div>

        {/* Bottom legal */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 text-sm text-gray-500">
          <p>© 2025 All Rights Reserved, Leonardo Interactive Pty Ltd®</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
            <a href="#">DPA</a>
            <a href="#">DMCA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
