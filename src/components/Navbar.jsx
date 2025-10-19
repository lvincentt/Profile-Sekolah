import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // ⬅️ penting
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // untuk tahu path halaman saat ini

  let timeoutId = null;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleMouseEnter = (key) => {
    clearTimeout(timeoutId);
    setActiveDropdown(key);
  };
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setActiveDropdown(null), 150);
  };

  const dropdowns = {
    profil: [
      { name: "Sejarah", href: "/sejarah" },
      { name: "Visi & Misi", href: "/visi-misi" },
      { name: "Struktur Organisasi", href: "/struktur-organisasi" },
      { name: "Guru & Staf", href: "/guru-staf" },
      { name: "Fasilitas", href: "/fasilitas" },
    ],
    berita: [
      { name: "Berita", href: "/berita" },
      { name: "Pengumuman", href: "/pengumuman" },
      { name: "Agenda", href: "/agenda" },
    ],
    kegiatan: [
      { name: "Kegiatan Sekolah", href: "/kegiatan-sekolah" },
      { name: "Prestasi", href: "/prestasi" },
      { name: "Ekstrakurikuler", href: "/ekstrakurikuler" },
    ],
    galeri: [
      { name: "Foto", href: "/galeri-foto" },
      { name: "Video", href: "/galeri-video" },
    ],
  };

  // ✅ Cek apakah halaman saat ini adalah Home
  const isHome = location.pathname === "/";

  // Tentukan style dasar
  const navbarStyle =
    isHome && !scrolled
      ? "bg-transparent text-white"
      : "bg-white/90 backdrop-blur-md border-b border-gray-200 text-gray-800 shadow-sm";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-700 ease-in-out ${navbarStyle}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="/"
            className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              isHome && !scrolled
                ? "text-white hover:text-red-200"
                : "text-gray-900 hover:text-red-600"
            }`}
          >
            SMP Dummy School
          </a>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex space-x-8 items-center font-medium transition-colors duration-300 ${
              isHome && !scrolled ? "text-white/90" : "text-gray-700"
            }`}
          >
            {Object.entries(dropdowns).map(([key, items]) => (
              <li
                key={key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center py-2 transition-colors duration-200 group ${
                    isHome && !scrolled
                      ? "hover:text-red-200"
                      : "hover:text-red-600"
                  }`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  <ChevronDown
                    size={16}
                    className="ml-1 transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>

                {activeDropdown === key && (
                  <ul
                    className="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl py-3 animate-fade-in"
                    onMouseEnter={() => handleMouseEnter(key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Non-dropdown Menu */}
            <li>
              <a
                href="/ppdb"
                className={`py-2 transition-colors duration-200 ${
                  isHome && !scrolled
                    ? "hover:text-red-200"
                    : "hover:text-red-600"
                }`}
              >
                PPDB
              </a>
            </li>
            <li>
              <a
                href="/kontak"
                className={`py-2 transition-colors duration-200 ${
                  isHome && !scrolled
                    ? "hover:text-red-200"
                    : "hover:text-red-600"
                }`}
              >
                Kontak
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X
                size={24}
                className={`${
                  isHome && !scrolled ? "text-white" : "text-gray-700"
                }`}
              />
            ) : (
              <Menu
                size={24}
                className={`${
                  isHome && !scrolled ? "text-white" : "text-gray-700"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a
              href="/"
              className="block py-3 px-4 text-gray-900 font-semibold hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200"
            >
              Beranda
            </a>

            {Object.entries(dropdowns).map(([key, items]) => (
              <div
                key={key}
                className="border-b border-gray-100 last:border-b-0"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer py-3 px-4 font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200 list-none">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <div className="pl-4 mt-1 space-y-1">
                    {items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block py-2 px-4 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </details>
              </div>
            ))}

            <a
              href="/ppdb"
              className="block py-3 px-4 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200"
            >
              PPDB
            </a>
            <a
              href="/kontak"
              className="block py-3 px-4 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200"
            >
              Kontak
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
