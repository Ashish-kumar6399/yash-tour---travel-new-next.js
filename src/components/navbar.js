'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  let timeoutId;

  // Function to handle hover (desktop)
  const handleDropdownEnter = (menu) => {
    clearTimeout(timeoutId);
    setOpenDropdown(menu);
  };

  // Function to hide dropdown after delay
  const handleDropdownLeave = () => {
    timeoutId = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  return (
    <nav className="bg-white shadow-md border-b-4 sticky z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black">
              YASH <span className="text-lightpink">Tour & Travels</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks
              openDropdown={openDropdown}
              setOpenDropdown={setOpenDropdown}
              handleDropdownEnter={handleDropdownEnter}
              handleDropdownLeave={handleDropdownLeave}
              closeMenu={() => setIsOpen(false)}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-yellow-500">
          <div className="flex flex-col space-y-4 p-4">
            <NavLinks openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} closeMenu={() => setIsOpen(false)} mobile />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ openDropdown, setOpenDropdown, handleDropdownEnter, handleDropdownLeave, closeMenu, mobile = false }) => {
  const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    {
      name: 'CAR',
      href: '#',
      submenu: [
        { name: 'BMW CARS FLEET', href: '/bmw-cars' },
        { name: 'SEDAN CARS FLEET', href: '/car/sedan' },
        { name: 'Luxury CARS FLEET', href: '/car/luxury' },
        { name: 'TOYOTA CARS FLEET', href: '/car/toyota' },
        { name: 'SUV AND MUV VEHICLE FLEET', href: '/car/suv-muv' },
      ],
    },
    {
      name: 'Bus',
      href: '#',
      submenu: [
        { name: 'Mini Van', href: '/bus/mini-van' },
        { name: 'Passenger Van', href: '/bus/passenger-van' },
      ],
    },
    {
      name: 'Tour Packages',
      href: '/tour-packages',
      submenu: [
        { name: 'Golden Triangle Tours', href: '/golden-triangle' },
        { name: 'Kashmir Tour', href: '/tour/kashmir' },
        { name: 'Gangtok Darjeeling Tour', href: '/tour/gangtok' },
        { name: 'Andaman Tour', href: '/tour/andaman' },
      ],
    },
    { name: 'CONTACT US', href: '/contact-us' },
  ];

  return (
    <>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="relative group"
          onMouseEnter={!mobile ? () => handleDropdownEnter(item.name) : undefined}
          onMouseLeave={!mobile ? handleDropdownLeave : undefined}
        >
          <Link
            href={item.href}
            className="text-black hover:text-yellow-500 font-medium flex items-center focus:outline-none md:cursor-pointer w-full text-left"
            onClick={(e) => {
              if (item.submenu) {
                e.preventDefault();
                setOpenDropdown(openDropdown === item.name ? null : item.name);
              } else {
                closeMenu();
              }
            }}
          >
            {item.name} {item.submenu && <ChevronDown size={16} className="ml-1" />}
          </Link>

          {item.submenu && (
            <div
              className={`absolute left-0 mt-2 w-48 bg-white shadow-md border border-yellow-500 rounded-md z-50 transition-all duration-200 ease-in-out
                ${openDropdown === item.name ? 'block' : 'hidden'} md:group-hover:block`}
              onMouseEnter={!mobile ? () => handleDropdownEnter(item.name) : undefined}
              onMouseLeave={!mobile ? handleDropdownLeave : undefined}
            >
              {item.submenu.map((subItem, subIndex) => (
                <Link key={subIndex} href={subItem.href} onClick={closeMenu}>
                  <div className="block px-4 py-2 text-black hover:bg-yellow-100 w-full">{subItem.name}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Navbar;
