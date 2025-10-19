import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-maroon text-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Kolom 1 - Logo & Deskripsi */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/logo.png"
              alt="Logo Sekolah"
              className="w-10 h-10 bg-white rounded-full p-1 shadow-sm"
            />
            <h3 className="text-xl font-semibold text-white">
              SMP Dummy School
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-gray-200">
            Sekolah yang berkomitmen membentuk generasi unggul, berkarakter, dan
            berprestasi. Kami berusaha menghadirkan lingkungan belajar yang
            nyaman, inspiratif, dan penuh semangat.
          </p>
        </div>

        {/* Kolom 2 - Navigasi */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["Beranda", "#"],
              ["Profil", "#profil"],
              ["Berita", "#berita"],
              ["Kegiatan", "#kegiatan"],
              ["Galeri", "#galeri"],
              ["PPDB", "#ppdb"],
            ].map(([name, href]) => (
              <li key={name}>
                <a
                  href={href}
                  className="hover:text-red-300 transition-colors duration-200"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3 - Kontak */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Kontak Kami</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-red-300 mt-0.5" />
              <span>Jl. Pendidikan No. 123, Pamanukan, Subang, Jawa Barat</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-red-300" />
              <a
                href="tel:+62211234567"
                className="hover:text-red-300 transition-colors duration-200"
              >
                (021) 1234-567
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-red-300" />
              <a
                href="mailto:info@sekolahku.sch.id"
                className="hover:text-red-300 transition-colors duration-200"
              >
                info@sekolahku.sch.id
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 4 - Sosial Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h4>
          <div className="flex flex-col space-y-2 text-sm">
            <a href="#" className="hover:text-red-300 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-red-300 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-red-300 transition">
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Garis & Copyright */}
      <div className="border-t border-red-700 mt-12 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} SMP Dummy School. All rights reserved.
      </div>
    </footer>
  );
}
