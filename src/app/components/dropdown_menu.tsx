

  


    import React from 'react';
import Link from 'next/link';

const DropdownMenu = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex items-center space-x-6">
        <li>
          <Link href="/">
            <h1 className="text-gray-700 hover:text-orange-500">Home</h1>
          </Link>
        </li>
        <li className="relative group">
          {/* Navbar item that shows dropdown on hover */}
          <span className="cursor-pointer text-gray-700 hover:text-orange-500">
            Services
          </span>
          {/* Dropdown menu */}
          <div className="absolute left-0 top-full mt-2 hidden w-48 rounded-md bg-white shadow-lg group-hover:block">
            <Link href="/services/web-development">
              <h1 className="block px-4 py-2 hover:bg-gray-200">Web Development</h1>
            </Link>
            <Link href="/services/mobile-apps">
              <h1 className="block px-4 py-2 hover:bg-gray-200">Mobile Apps</h1>
            </Link>
            <Link href="/services/seo">
              <h1 className="block px-4 py-2 hover:bg-gray-200">SEO</h1>
            </Link>
          </div>
        </li>
        <li>
          <Link href="/contact">
            <h1 className="text-gray-700 hover:text-orange-500">Contact</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DropdownMenu;
