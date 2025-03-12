"use client";

import { Home, Video, Settings, User, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const menuItems = [
  { name: "Dashboard", icon: <Home size={24} />, href: "/" },
  { name: "Meus Vídeos", icon: <Video size={24} />, href: "/videos" },
  { name: "Configurações", icon: <Settings size={24} />, href: "/settings" },
  { name: "Perfil", icon: <User size={24} />, href: "/profile" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`h-screen bg-gradient-to-b from-white to-gray-100 shadow-xl p-6 flex flex-col justify-between transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}
    >
      <div>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 rounded-full border-4 border-blue-500 transition-transform transform hover:scale-110"
            />
            {isOpen && <h2 className="text-2xl font-extrabold text-blue-700">StoryBoost</h2>}
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-blue-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <nav className="space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 p-3 rounded-xl font-medium transition-all duration-300 ${
                activeItem === item.name
                  ? "bg-blue-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>
      <footer className="mt-8 text-gray-500 text-sm text-center">
        &copy; 2025 StoryBoost. Todos os direitos reservados.
      </footer>
    </aside>
  );
}