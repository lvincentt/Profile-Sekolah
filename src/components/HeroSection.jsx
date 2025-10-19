import { useState, useEffect } from "react";
import foto1 from "../assets/images/placeholder1.jpg";
import foto2 from "../assets/images/placeholder2.jpg";
import foto3 from "../assets/images/placeholder3.jpg";

export default function HeroSection() {
  const images = [foto1, foto2, foto3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Konten */}
      <div className="relative z-10 px-4 max-w-3xl">
        <p className="text-sm md:text-base text-beige mb-2 tracking-wide uppercase">
          🌟 Selamat Datang di Sekolah Kami
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Membangun <span className="text-orange-400">Generasi Unggul</span>
          <br /> untuk Masa Depan
        </h1>

        <p className="text-gray-200 text-sm md:text-lg mb-8">
          Kami berkomitmen memberikan pendidikan terbaik bagi siswa, membentuk
          karakter yang kuat, dan mengasah potensi menuju masa depan gemilang.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#ppdb"
            className="bg-maroon text-white hover:bg-maroon/80 px-6 py-3 rounded-md font-medium shadow-md transition"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
