import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are dedicated to providing the best service and experience for our customers. Join us on our journey!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Explore</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-white transition duration-300">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition duration-300">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition duration-300">About</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2">123 Main Street, City, Country</li>
              <li className="mb-2">Email: info@example.com</li>
              <li className="mb-2">Phone: +123 456 7890</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-myRed mt-8 pt-8 text-center">
          <p className="text-gray-400">Atelier 17 Experiences. All rights reserved. 
            &copy; {new Date().getFullYear()} 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;