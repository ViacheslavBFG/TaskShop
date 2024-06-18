import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-2">NoPainNoGain💪</h2>
          <p className="text-sm">Let's do this ****</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-white hover:text-blue-500"
            >
              <FacebookOutlined style={{ fontSize: "24px" }} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-white hover:text-blue-300"
            >
              <TwitterOutlined style={{ fontSize: "24px" }} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-white hover:text-pink-400"
            >
              <InstagramOutlined style={{ fontSize: "24px" }} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-2">Subscribe</h3>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 mb-2 sm:mb-0 sm:mr-2 text-gray-800 rounded"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 hover:bg-blue-600 rounded text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-400">
        © 2024 NoPainNoGain.All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
