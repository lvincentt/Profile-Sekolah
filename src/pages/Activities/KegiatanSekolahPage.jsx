import { Calendar, Users, MapPin, ArrowRight } from "lucide-react";
import foto1 from "../../assets/images/placeholder4.jpg";
import foto2 from "../../assets/images/placeholder5.jpg";
import foto3 from "../../assets/images/placeholder6.jpg";

export default function KegiatanSekolahPage() {
  const kegiatanList = [
    {
      id: 1,
      judul: "Peringatan Hari Kartini",
      tanggal: "21 April 2024",
      gambar: foto1,
      deskripsi:
        "Siswa mengenakan pakaian adat dan mengikuti lomba pidato bertema perjuangan wanita Indonesia.",
      peserta: "Seluruh Siswa",
      lokasi: "Lapangan Sekolah",
    },
    {
      id: 2,
      judul: "Class Meeting Semester Genap",
      tanggal: "10–14 Juni 2024",
      gambar: foto2,
      deskripsi:
        "Kegiatan penutup semester yang diisi dengan berbagai perlombaan antar kelas, seperti futsal, tarik tambang, dan cerdas cermat.",
      peserta: "Seluruh Siswa",
      lokasi: "Lapangan & Aula Sekolah",
    },
    {
      id: 3,
      judul: "Kunjungan Edukasi ke Museum Geologi Bandung",
      tanggal: "5 Maret 2024",
      gambar: foto3,
      deskripsi:
        "Siswa kelas VIII mengikuti kegiatan belajar lapangan untuk menambah wawasan tentang sejarah geologi Indonesia.",
      peserta: "Siswa Kelas VIII",
      lokasi: "Museum Geologi Bandung",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-maroon-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-maroon-100 rounded-2xl mb-6">
            <Users size={32} className="text-maroon-700" />
          </div>
          <h1 className="text-4xl font-bold text-maroon-800 mb-4">
            Kegiatan Sekolah
          </h1>
          <div className="w-20 h-1 bg-maroon-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Beragam aktivitas pembelajaran dan pengembangan karakter siswa di
            lingkungan SMP Dummy School.
            <span className="block text-gray-500 text-base mt-2">
              Dokumentasi momen berharga dalam perjalanan pendidikan siswa kami.
            </span>
          </p>
        </div>

        {/* Grid Kegiatan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kegiatanList.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={item.gambar}
                    alt={item.judul}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-maroon-600" />
                    <span className="text-sm font-semibold text-gray-800">
                      {item.tanggal}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Judul */}
                <h3 className="font-bold text-xl text-gray-900 line-clamp-2 leading-tight group-hover:text-maroon-700 transition-colors duration-300 mb-4">
                  {item.judul}
                </h3>

                {/* Metadata */}
                <div className="flex flex-col gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-maroon-50 p-2 rounded-lg">
                      <Users size={16} className="text-maroon-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        Peserta
                      </p>
                      <p className="text-sm font-medium text-gray-800">
                        {item.peserta}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-maroon-50 p-2 rounded-lg">
                      <MapPin size={16} className="text-maroon-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        Lokasi
                      </p>
                      <p className="text-sm font-medium text-gray-800">
                        {item.lokasi}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Deskripsi */}
                <div className="mb-6">
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                    {item.deskripsi}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button className="inline-flex items-center text-maroon-600 font-semibold text-sm hover:text-maroon-700 transition-colors duration-300 group/readmore">
                    Lihat Galeri
                    <ArrowRight
                      size={16}
                      className="ml-2 transform group-hover/readmore:translate-x-1 transition-transform duration-300"
                    />
                  </button>

                  <button className="text-xs text-gray-500 hover:text-maroon-600 font-medium transition-colors duration-300">
                    Bagikan
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Section */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-gray-500 text-lg">
              Masih banyak kegiatan menarik lainnya
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-maroon text-white font-semibold rounded-2xl hover:bg-maroon/80 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group/cta">
              Jelajahi Semua Kegiatan
              <ArrowRight
                size={20}
                className="ml-3 transform group-hover/cta:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
