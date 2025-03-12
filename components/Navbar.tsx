"use client";

import { Search, User, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gradient-to-r from-white to-gray-100 shadow-md p-4 flex justify-between items-center transition-all duration-300">
      <Link href="/" className="text-2xl font-extrabold text-blue-700 hover:text-blue-900 transition-colors">
        Painel de Controle
      </Link>
      <div className="flex items-center gap-6">
        {/* Search Box */}
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full bg-gray-100 rounded-full px-5 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search size={20} className="absolute right-3 top-2 text-gray-500" />
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md text-gray-700 hover:text-blue-700 transition-all hover:shadow-lg"
          >
            <User size={22} className="text-blue-700" />
            <span className="font-medium">Perfil</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-52 bg-white border rounded-xl shadow-lg overflow-hidden">
              <Link
                href="/profile"
                className="flex items-center px-5 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Settings size={18} className="mr-3 text-blue-700" /> Configurações
              </Link>
              <Link
                href="/logout"
                className="flex items-center px-5 py-3 text-red-600 hover:bg-gray-100 transition-colors"
              >
                <LogOut size={18} className="mr-3" /> Sair
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}