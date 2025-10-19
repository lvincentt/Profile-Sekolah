import { Play, Calendar, Eye, Share2, Download, Youtube } from "lucide-react";
import { useState } from "react";
import foto1 from "../../assets/images/placeholder4.jpg";
import { showToast } from "../../components/Toast";

export default function GalleryVideo() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const videos = [
    {
      id: 1,
      title: "Upacara Bendera 17 Agustus 2025",
      url: "https://www.youtube.com/watch?v=24uBMkY-X3g&list=RDaJ492Cqvrng&index=3",
      thumbnail: foto1,
      kategori: "Kegiatan Sekolah",
      tanggal: "17 Agustus 2025",
      durasi: "15:30",
      views: "2.4K",
      deskripsi:
        "Upacara bendera dalam rangka memperingati Hari Kemerdekaan Republik Indonesia ke-80",
    },
    {
      id: 2,
      title: "Kegiatan Pramuka Sekolah",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
      thumbnail: "/video/pramuka-thumb.jpg",
      kategori: "Ekstrakurikuler",
      tanggal: "12 Juli 2025",
      durasi: "8:45",
      views: "1.8K",
      deskripsi:
        "Kegiatan perkemahan dan latihan pramuka di bumi perkemahan sekolah",
    },
    {
      id: 3,
      title: "Perayaan Hari Guru Nasional",
      url: "https://www.youtube.com/embed/ysz5S6PUM-U",
      thumbnail: "/video/hari-guru-thumb.jpg",
      kategori: "Acara Khusus",
      tanggal: "25 November 2025",
      durasi: "12:20",
      views: "3.1K",
      deskripsi:
        "Penghargaan dan apresiasi untuk para guru dalam memperingati Hari Guru Nasional",
    },
    {
      id: 4,
      title: "Science Fair 2025",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/video/science-fair-thumb.jpg",
      kategori: "Akademik",
      tanggal: "5 Maret 2025",
      durasi: "18:15",
      views: "4.2K",
      deskripsi:
        "Pameran karya ilmiah dan inovasi siswa dalam ajang tahunan Science Fair",
    },
    {
      id: 5,
      title: "Pentas Seni Akhir Tahun",
      url: "https://www.youtube.com/embed/9bZkp7q19f0",
      thumbnail: "/video/pentas-seni-thumb.jpg",
      kategori: "Seni & Budaya",
      tanggal: "20 Desember 2025",
      durasi: "22:40",
      views: "5.7K",
      deskripsi:
        "Pagelaran seni dan budaya menampilkan bakat siswa dalam berbagai bidang kesenian",
    },
    {
      id: 6,
      title: "Turnamen Basket Antar Kelas",
      url: "https://www.youtube.com/embed/JGwWNGJdvx8",
      thumbnail: "/video/basket-thumb.jpg",
      kategori: "Olahraga",
      tanggal: "8 Februari 2025",
      durasi: "14:25",
      views: "3.9K",
      deskripsi:
        "Kompetisi basket tahunan yang memperebutkan piala bergilir kepala sekolah",
    },
  ];

  const categories = [
    "Semua",
    "Kegiatan Sekolah",
    "Ekstrakurikuler",
    "Acara Khusus",
    "Akademik",
    "Seni & Budaya",
    "Olahraga",
  ];

  const filteredVideos =
    selectedCategory === "Semua"
      ? videos
      : videos.filter((video) => video.kategori === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-maroon/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-maroon/70 to-maroon rounded-3xl mb-6 shadow-lg">
            <Youtube size={36} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-maroon mb-4">Galeri Video</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-maroon/50 to-maroon mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Dokumentasi visual berbagai kegiatan dan momen spesial di SMP Bunda
            Maria.
            <span className="block text-gray-500 text-base mt-2">
              Saksikan momen berharga yang tak terlupakan dalam perjalanan
              pendidikan.
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
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-maroon/80 hover:border-maroon/70 hover:text-white shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Video */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-2"
            >
              {/* Video Thumbnail Container */}
              <div className="relative overflow-hidden">
                <div className="aspect-video w-full bg-gray-200 relative">
                  {/* Thumbnail Image */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-2xl"
                    >
                      <Play size={32} className="fill-current ml-1" />
                    </a>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                    {video.durasi}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                    <span className="text-sm font-semibold text-gray-800">
                      {video.kategori}
                    </span>
                  </div>
                </div>
              </div>

              {/* Video Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-maroon/70 transition-colors duration-300">
                  {video.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {video.deskripsi}
                </p>

                {/* Metadata */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{video.tanggal}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{video.views}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-maroon/60 font-semibold text-sm hover:text-maroon/70 transition-colors duration-300 group/play"
                  >
                    <Play size={16} className="mr-2" />
                    Tonton Video
                  </a>

                  <div className="flex justify-end items-center gap-3">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(video.url);
                        showToast.info("Link video disalin ke clipboard 🎉");
                      }}
                      className="text-gray-400 hover:text-maroon/70 transition-colors duration-300"
                    >
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white shadow-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <Youtube size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Subscribe Channel YouTube Kami!
            </h3>
            <p className="text-red-100 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Dapatkan update video terbaru dari berbagai kegiatan dan acara
              sekolah kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-2xl hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Youtube size={20} className="mr-3" />
                Kunjungi YouTube
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-red-600 transform hover:-translate-y-1 transition-all duration-300">
                Lihat Semua Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
