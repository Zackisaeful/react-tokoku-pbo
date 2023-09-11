import React from "react";
import {Link} from 'react-router-dom'

const Footer2 = () => {
  return (
    // bottom-0
    <footer className="bottom-0 bg-[#D3E7FF] py-12">
      <div className="container mx-auto ">
        <div className="flex flex-wrap mx-10">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4  mb-8 sm:mb-0 ">
            <h4 className="text-sky-600 text-lg font-semibold mb-6">Company</h4>
            <ul className="text-gray-400">
              <li>
                <Link to={'/'} className="hover:text-sky-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={'/'} className="hover:text-sky-600">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to={'/'} className="hover:text-sky-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={'/'} className="hover:text-sky-600">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8 sm:mb-0">
            <h4 className="text-sky-600 text-lg font-semibold mb-6">
              Get Help
            </h4>
            <ul className="text-gray-400">
              <li>
                <Link to={'/'} className="hover:text-sky-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to={'/'} className="hover:text-sky-600">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to={'/'} className="hover:text-sky-600">
                  Returns
                </Link>
              </li>
              <li>
                <Link to={'/'} className="hover:text-sky-600">
                  Order Status
                </Link>
              </li>
              <li>
                <Link to={'/'} className="hover:text-sky-600">
                  Payment Options
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8 sm:mb-0">
            <h4 className="text-sky-600 text-lg font-semibold mb-6">
              Online Shop
            </h4>
            <ul className="text-gray-400">
              <li>
                <Link to={'/'} className="hover:text-sky-600">
                  Watch
                </Link>
              </li>
              <li>
                <Link to={'/'} className="hover:text-sky-600">
                  Bag
                </Link>
              </li>
              <li>
                <Link to={'/'} className="hover:text-sky-600">
                  Shoes
                </Link>
              </li>
              <li>
                <Link to={'/'} className="hover:text-sky-600">
                  Dress
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4">
            <h4 className="text-sky-600 text-lg font-semibold mb-6">
              Follow Us
            </h4>
            <div className="text-gray-400">
              <Link to={'/'} className="hover:text-sky-600 mr-4">
                <i className="fab fa-facebook-f">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, totam!</i>
              </Link>
              <Link to={'/'} className="hover:text-sky-600 mr-4">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to={'/'} className="hover:text-sky-600 mr-4">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to={'/'} className="hover:text-sky-600">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
