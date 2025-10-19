import {
  Camera,
  ZoomIn,
  Calendar,
  MapPin,
  Heart,
  Share2,
  Download,
} from "lucide-react";
import { useState } from "react";

import foto1 from "../../assets/images/placeholder4.jpg";
import foto2 from "../../assets/images/placeholder5.jpg";
import foto3 from "../../assets/images/placeholder6.jpg";
import foto4 from "../../assets/images/placeholder7.jpg";
import foto5 from "../../assets/images/placeholder8.jpg";
import foto6 from "../../assets/images/placeholder9.jpg";
import foto7 from "../../assets/images/placeholder10.jpg";
import foto8 from "../../assets/images/placeholder11.jpg";
import foto9 from "../../assets/images/placeholder12.jpg";

export default function GaleriFotoPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const galeriFoto = [
    {
      id: 1,
      judul: "Upacara Bendera Hari Senin",
      gambar: foto1,
      kategori: "Kegiatan Sekolah",
      tanggal: "15 Januari 2024",
      lokasi: "Lapangan Sekolah",
      likes: 124,
    },
    {
      id: 2,
      judul: "Kegiatan Class Meeting",
      gambar: foto2,
      kategori: "Olahraga",
      tanggal: "12 Juni 2024",
      lokasi: "Lapangan & Aula Sekolah",
      likes: 89,
    },
    {
      id: 3,
      judul: "Perayaan Hari Kartini",
      gambar: foto3,
      kategori: "Budaya",
      tanggal: "21 April 2024",
      lokasi: "Aula Serbaguna",
      likes: 156,
    },
    {
      id: 4,
      judul: "Bakti Sosial Panti Asuhan",
      gambar: foto4,
      kategori: "Sosial",
      tanggal: "5 Maret 2024",
      lokasi: "Panti Asuhan Kasih Bunda",
      likes: 203,
    },
    {
      id: 5,
      judul: "Lomba Paduan Suara",
      gambar: foto5,
      kategori: "Seni & Musik",
      tanggal: "18 Mei 2024",
      lokasi: "Gedung Kesenian Kota",
      likes: 167,
    },
    {
      id: 6,
      judul: "Kunjungan Edukasi ke Museum",
      gambar: foto6,
      kategori: "Edukasi",
      tanggal: "3 Februari 2024",
      lokasi: "Museum Geologi Bandung",
      likes: 98,
    },
    {
      id: 7,
      judul: "Science Fair 2024",
      gambar: foto7,
      kategori: "Akademik",
      tanggal: "25 Agustus 2024",
      lokasi: "Laboratorium IPA",
      likes: 145,
    },
    {
      id: 8,
      judul: "Pentas Seni Akhir Tahun",
      gambar: foto8,
      kategori: "Seni & Budaya",
      tanggal: "15 Desember 2024",
      lokasi: "Auditorium Sekolah",
      likes: 189,
    },
    {
      id: 9,
      judul: "Kemah Pramuka",
      gambar: foto9,
      kategori: "Pramuka",
      tanggal: "8 Juli 2024",
      lokasi: "Bumi Perkemahan Cibubur",
      likes: 112,
    },
  ];

  const categories = [
    "Semua",
    "Kegiatan Sekolah",
    "Olahraga",
    "Budaya",
    "Sosial",
    "Seni & Musik",
    "Edukasi",
    "Akademik",
    "Pramuka",
  ];

  const filteredGaleri =
    selectedCategory === "Semua"
      ? galeriFoto
      : galeriFoto.filter((item) => item.kategori === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-maroon/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-maroon/50 to-maroon rounded-3xl mb-6 shadow-lg mt-4">
            <Camera size={36} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-maroon-800 mb-4">
            Galeri Foto
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-maroon/50 to-maroon mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Dokumentasi berbagai kegiatan dan momen berharga di lingkungan SMP
            Dummy School.
            <span className="block text-gray-500 text-base mt-2">
              Abadikan kenangan indah dalam perjalanan pendidikan siswa kami.
            </span>
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                selectedCategory === category
                  ? "bg-maroon text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-maroon-50 hover:border-maroon-200 hover:text-maroon-700 shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Foto - Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredGaleri.map((item) => (
            <div
              key={item.id}
              className="group break-inside-avoid bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.gambar}
                  alt={item.judul}
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay dengan Informasi */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-bold text-lg mb-3">
                      {item.judul}
                    </h3>

                    {/* Metadata */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-white/90">
                        <Calendar size={14} />
                        <span className="text-sm">{item.tanggal}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/90">
                        <MapPin size={14} />
                        <span className="text-sm">{item.lokasi}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-white hover:text-rose-400 transition-colors duration-300">
                          <Heart size={18} />
                          <span className="text-sm">{item.likes}</span>
                        </button>
                        <button className="text-white hover:text-blue-400 transition-colors duration-300">
                          <Share2 size={18} />
                        </button>
                        <button className="text-white hover:text-green-400 transition-colors duration-300">
                          <Download size={18} />
                        </button>
                      </div>
                      <button className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg hover:bg-white/30 transition-colors duration-300">
                        <ZoomIn size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-sm">
                  <span className="text-sm font-semibold text-gray-800">
                    {item.kategori}
                  </span>
                </div>
              </div>

              {/* Bottom Info (Visible on Mobile) */}
              <div className="p-4 lg:hidden">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.judul}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{item.tanggal}</span>
                  <div className="flex items-center gap-1">
                    <Heart size={14} className="text-rose-500" />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
