import React from "react";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-12 md:py-16 border-t-2 border-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <img src="./assets/logoPALMO.png" alt=""/>
            </div>
            <p className="text-sm">
              We are a team of experienced web designers and developers,
            </p>
            <p className="text-sm">
              dedicated to creating beautiful and functional websites for businesses of all sizes.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-gray-700" href="#">Web Design</a>
              </li>
              <li>
                <a className="hover:text-gray-700" href="#">Web Development</a>
              </li>
              <li>
                <a className="hover:text-gray-700" href="#">E-commerce Solutions</a>
              </li>
              <li>
                <a className="hover:text-gray-700" href="#">Digital Marketing</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>+57 310 875 0323</li>
              <li><a href="http://www.palmo.com" className="hover:text-gray-700">www.palmo.com</a></li>
              <li><a href="mailto:palmo@gmail.com" className="hover:text-gray-700">palmo@gmail.com</a></li>
              <li>3316 Scheuvront Drive, Denver, Colorado 435</li>
            </ul>
          </div>
          <div className="md:flex items-center">
            {/* Cambia el botón por un enlace a la página de inicio de sesión */}
            <Link to="/login" className="inline-flex items-center justify-center px-16 py-3 rounded-md bg-black text-white font-medium hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
