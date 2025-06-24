"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">My Site</div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Menu Items */}
      <div
        className={`flex-col md:flex md:flex-row md:items-center gap-4 absolute md:static bg-white left-0 right-0 p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
          isOpen ? "top-16" : "-top-96"
        } md:top-0`}
      >
        <a href="#home" className="block">Home</a>
        <a href="#about" className="block">About</a>
        <a href="mailto:sa6426533@gmail.com" className="block">Contact</a>
      </div>
    </nav>
  );
}
